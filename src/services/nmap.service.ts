import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { xml2json } from 'xml-js';
@Injectable()
export class NmapService {
  async nmap(command: string): Promise<string> {
    const child = spawn('nmap', ['-oX', `-`, '-F', command, '-O']);
    let data = '';
    for await (const chunk of child.stdout) {
      // console.log('stdout chunk: ' + chunk);
      data += chunk;
    }
    let error = '';
    for await (const chunk of child.stderr) {
      // console.error('stderr chunk: ' + chunk);
      error += chunk;
    }
    const exitCode = await new Promise((resolve, reject) => {
      child.on('close', resolve);
    });

    if (exitCode) {
      throw new Error(`subprocess error exit ${exitCode}, ${error}`);
    }
    return data;
  }
  async deviceDetecter(host: string) {
    console.log(host);
    try {
      const response = await this.nmap(host);
      const result = xml2json(response, { compact: true, spaces: 4 });
      const data = JSON.parse(result);
      console.log(data);
      const state = data.nmaprun.runstats.hosts._attributes;
      if (state.up != 0) {
        const address = data.nmaprun.host.address;
        const os = data.nmaprun.host.os.osmatch;
        const obj = {
          state: state,
          addressInfo: address,
          os: os,
        };
        return obj;
      } else {
        //   0 state.down , means no ip when ping
        //   1 state.down, means it has ip it's just offline
        return state.down < 0 ? 'offline' : 'Unknown';
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async subnetScanner(subnet: string) {
    const response = await this.nmap(subnet);
    const data = xml2json(response, { spaces: 4 });
    const result = JSON.parse(data).elements[3].elements;
    const output = result.filter((res) => {
      return res.name == 'hosthint';
    });
    const filtered = output.filter((host) => {
      return host.elements.filter((ele) => {
        return ele.name == 'address';
      });
    });
    return {
      total: filtered.length,
      response: filtered,
    };
  }
}
