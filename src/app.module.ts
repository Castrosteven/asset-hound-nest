import { Module } from '@nestjs/common';
import { NmapController } from './controllers/nmap.controller';
import {
  AppController,
  ScannerController,
} from './controllers/scanner.controller';
import { assetController } from './controllers/asset.controller';

import { NmapService } from './services/nmap.service';
import { AppService, ScannerService } from './services/scanner.service';
import { AssetService } from './services/asset.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ScannerController,
    NmapController,
    assetController,
  ],
  providers: [AppService, ScannerService, NmapService, AssetService],
})
export class AppModule {}
