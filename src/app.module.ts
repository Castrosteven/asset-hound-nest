import { Module } from '@nestjs/common';
import { AppController, ScannerController } from './controllers/scanner.controller';
import { AppService, ScannerService } from './services/scanner.service';

@Module({
  imports: [],
  controllers: [AppController, ScannerController],
  providers: [AppService, ScannerService],
})
export class AppModule { }
