import { Controller, Post, Query } from '@nestjs/common';

import { AssetService } from '../services/asset.service';
import { ScannerService } from '../services/scanner.service';
import { NmapService } from '../services/nmap.service';

@Controller('asset')
export class assetController {
  constructor(private readonly assetService: AssetService) {}
  @Post()
  async getAsset(@Query('host') host: string): Promise<any> {
    const detect = new NmapService();
    const detectAnswer = await detect.deviceDetecter(host);
    const data = {
      detectAnswer,
    };
    return this.assetService.addAssetToDb(data);
  }
}
