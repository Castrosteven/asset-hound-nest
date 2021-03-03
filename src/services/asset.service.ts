import { Injectable } from '@nestjs/common';
import addToDatabase from '../db';

@Injectable()
export class AssetService {
  async addAssetToDb(data: any): Promise<any> {
    const response = await addToDatabase(data);
    return response;
  }
}
