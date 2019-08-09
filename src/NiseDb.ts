import { NiseCollection } from './NiseCollection';

export class NiseDb {
  private dbName: string;
  private options: any;

  constructor(dbName: string, options: any = {}) {
    this.dbName = dbName;
    this.options = options;
  }

  public collection(colName: string, options: any = {}): NiseCollection {
    return new NiseCollection(this.dbName, colName, options);
  }
}
