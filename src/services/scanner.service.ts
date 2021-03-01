import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process'
import { hostInfo, host, win32, ComputerSystem, adapterInfo, biosInfo } from '../interfaces/scanner.interfaces'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class ScannerService {
  async powerShell(command: string): Promise<string> {
    const child = spawn('powershell.exe', [command]);
    let data = "";
    for await (const chunk of child.stdout) {
      // console.log('stdout chunk: ' + chunk);
      data += chunk;
    }
    let error = "";
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
  async resolveDns(host: string): Promise<hostInfo | string> {
    try {
      const dnsName = await this.powerShell(`Resolve-DnsName ${host} | ConvertTo-Json`)
      if (dnsName.length > 0) {
        const obj = JSON.parse(dnsName)
        if (Array.isArray(obj)) {
          const filteredObject: hostInfo = obj.map(hostResult => {
            const returnObject: host = {
              host: host,
              name: hostResult.Name,
              dns: hostResult.NameHost,
            }
            if (hostResult.IPAddress) {
              const obj: host = { ...returnObject, IPAddress: hostResult.IPAddress }
              return obj
            } else return returnObject
          })
          return filteredObject
        } else {
          const response: host = {
            host: obj.host,
            name: obj.Name,
            dns: obj.NameHost
          }
          return [response]
        }
      }
      else {
        return `Unable to obtain information from ${host}`
      }
    } catch (error) {
      console.log(error)
      return `${error.name}: ${host} is not a valid dns name or ip address`
    }
  }
  async getWin32Info(host: string): Promise<win32> {
    const response = await this.powerShell(`Get-WmiObject -Class Win32_OperatingSystem -ComputerName ${host} | ConvertTo-Json`)
    const obj = JSON.parse(response)
    const returnObject: win32 = {
      BuildNumber: obj.BuildNumber,
      Caption: obj.Caption,
      Manufacturer: obj.Manufacturer,
      OSArchitecture: obj.OSArchitecture,
      PSComputerName: obj.PSComputerName
    }
    return returnObject
  }
  async getNetInfo(host: string): Promise<adapterInfo> {
    const response = await this.powerShell(`Get-WmiObject -Class Win32_NetworkAdapterConfiguration -ComputerName ${host} | ConvertTo-Json`)
    const response2 = await this.powerShell(`Get-WmiObject -Class Win32_NetworkAdapter -ComputerName ${host} | ConvertTo-Json`)
    const ob2 = JSON.parse(response2)
    const obj = JSON.parse(response)
    const returnObject = obj.map((adapter) => {
      const obj = {
        IPAddress: adapter.IPAddress,
        PSComputerName: adapter.PSComputerName
      }
      return obj
    })
    const returnObject2 = ob2.map((adapter) => {
      const obj = {
        MACAddress: adapter.MACAddress,
        IPAddress: adapter.IPAddress,
        AdapterType: adapter.AdapterType,
        Name: adapter.Name,
        ProductName: adapter.ProductName,
        PSComputerName: adapter.PSComputerName
      }
      return obj
    })
    return returnObject2.map((item, i) => Object.assign({}, item, returnObject[i]));
  }
  async getHwInfo(host: string): Promise<ComputerSystem> {
    const response = await this.powerShell(`Get-WmiObject -Class Win32_ComputerSystem -ComputerName ${host} | ConvertTo-Json`)
    const obj = JSON.parse(response)
    const returnObject: ComputerSystem = {
      Domain: obj.Domain,
      Manufacturer: obj.Manufacturer,
      Model: obj.Model,
      Name: obj.Name,
    }
    return returnObject
  }
  async getBiosInfo(host: string): Promise<biosInfo> {
    const response = await this.powerShell(`Get-WmiObject -Class Win32_Bios -ComputerName ${host} | ConvertTo-Json`)
    const obj = JSON.parse(response)
    const returnObject: biosInfo = {
      SerialNumber: obj.SerialNumber
    }
    return returnObject
  }

}

