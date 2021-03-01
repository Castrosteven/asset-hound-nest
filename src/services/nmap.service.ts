import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process'
@Injectable()
export class NmapService {
    async nmap(command: string): Promise<string> {
        const child = spawn('nmap', [`${command}`]);
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
    async deviceDetecter(host: string) {
        console.log(host)
        try {
            const response = await this.nmap('opsprinter.med.cornell.edu')
            console.log(response)
            return response
        } catch (error) {
            console.error(error)
        }
    }

}


