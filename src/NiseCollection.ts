import { NiseCursor } from './NiseCursor';

export class NiseCollection {
  private dbName: string;
  private colName: string;
  private options: any;

  constructor(dbName: string, colName: string, options: any = {}) {
    this.dbName = dbName;
    this.colName = colName;
    this.options = options;
  }

  public async find(query: any = {}, options: any = {}): Promise<NiseCursor> {
    return new NiseCursor(this.dbName, this.colName, query, options);
  }
}
