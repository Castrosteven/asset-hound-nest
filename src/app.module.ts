import { Module } from '@nestjs/common';
import { NmapController } from './controllers/nmap.controller';
import { AppController, ScannerController } from './controllers/scanner.controller';

import { NmapService } from './services/nmap.service';
import { AppService, ScannerService } from './services/scanner.service';

@Module({
  imports: [],
  controllers: [AppController, ScannerController, NmapController],
  providers: [AppService, ScannerService, NmapService]
})
export class AppModule { }
