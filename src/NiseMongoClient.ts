import mongodb = require('mongodb');
import { NiseDb } from './NiseDb';

export class NiseMongoClient {

  public static async connect(uri: string, options?: any): Promise<NiseMongoClient> {
    return new NiseMongoClient(uri, options);
  }

  private uri: string;
  private options: any;

  constructor(uri: string, options: any = {}) {
    this.uri = uri;
    this.options = options;
  }

  public db(dbName: string = 'test', options: any = {}): NiseDb {
    return new NiseDb(dbName, options);
  }
}
