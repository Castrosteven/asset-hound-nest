import { Controller, Get, Query, Ip } from '@nestjs/common';
import { NmapService } from '../services/nmap.service';

@Controller('detect')
export class NmapController {
  constructor(private readonly nmapService: NmapService) {}
  @Get('scan')
  deviceDetecter(@Query('host') host: string, @Ip() ip: string): Promise<any> {
    if (host) {
      return this.nmapService.deviceDetecter(host);
    } else {
      const address = ip.replace('::ffff:', '');
      return this.nmapService.deviceDetecter(address);
    }
  }
  @Get('subnet')
  async subnetScanner(@Query('host') host: string): Promise<any> {
    return await this.nmapService.subnetScanner(host);
  }
}
