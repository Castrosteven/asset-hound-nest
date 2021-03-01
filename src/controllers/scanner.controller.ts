import { Controller, Get, Query, Ip } from '@nestjs/common';
import { AppService, ScannerService } from '../services/scanner.service';
import { hostInfo, win32, adapterInfo, ComputerSystem, biosInfo } from '../interfaces/scanner.interfaces'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('scanner')
export class ScannerController {
  constructor(private readonly scannerService: ScannerService) { }
  @Get()
  getHostInformation(@Query('host') host: string, @Ip() ip: string): Promise<hostInfo | string> {
    if (host) {
      return this.scannerService.resolveDns(host);
    } else {
      const address = ip.replace('::ffff:', '')
      return this.scannerService.resolveDns(address);
    }
  }
  @Get('os')
  getWin32Info(@Query('host') host: string, @Ip() ip: string): Promise<win32> {
    if (host) {
      return this.scannerService.getWin32Info(host);
    } else {
      const address = ip.replace('::ffff:', '')
      return this.scannerService.getWin32Info(address);
    }
  }
  @Get('net')
  getNetInfo(@Query('host') host: string, @Ip() ip: string): Promise<adapterInfo> {
    if (host) {
      return this.scannerService.getNetInfo(host);
    } else {
      const address = ip.replace('::ffff:', '')
      return this.scannerService.getNetInfo(address);
    }
  }
  @Get('hw')
  getHwInfo(@Query('host') host: string, @Ip() ip: string): Promise<ComputerSystem> {
    if (host) {
      return this.scannerService.getHwInfo(host);
    } else {
      const address = ip.replace('::ffff:', '')
      return this.scannerService.getHwInfo(address);
    }
  }
  @Get('bios')
  getBiosInfo(@Query('host') host: string, @Ip() ip: string): Promise<biosInfo> {
    if (host) {
      return this.scannerService.getBiosInfo(host);
    } else {
      const address = ip.replace('::ffff:', '')
      return this.scannerService.getBiosInfo(address);
    }
  }

}