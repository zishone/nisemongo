import { niseDatabase } from './NiseDatabase';

export class NiseCursor {
  private listeners: any = {
    end: () => null,
    error: (error: Error) => null,
  };
  private end: boolean;
  private options: any;
  private query: any;
  private colName: string;
  private dbName: string;

  constructor(dbName: string = 'test', colName: string, query: any = {}, options: any = {}) {
    this.dbName = dbName;
    this.colName = colName;
    this.query = query;
    this.options = options;
    this.listeners = {
      end: () => null,
      error: (error: Error) => null,
    };
    this.end = false;
  }

  public async toArray(): Promise<any[]> {
    return niseDatabase[this.dbName][this.colName];
  }

  public on(event: string, listener: () => void): void {
    this.listeners[event] = listener;
    switch (event) {
      case 'data':
        try {
          for (const document of niseDatabase[this.dbName][this.colName]) {
            this.listeners[event](document);
          }
          this.end = true;
          this.listeners.end();
        } catch (error) {
          this.listeners.error(error);
        }
        break;
      case 'end':
        try {
          if (this.end) {
            this.listeners[event]();
          }
        } catch (error) {
          this.listeners.error(error);
        }
        break;
      default:
        break;
    }
  }

  public pause(): void {
    return undefined;
  }

  public resume(): void {
    return undefined;
  }

  public emit(event: string, data?: any): void {
    if (this.listeners[event]) {
      this.listeners[event](data);
    }
  }

  public async count(applySkipLimit: boolean = true, options: any = {}): Promise<number> {
    return niseDatabase[this.dbName][this.colName].length;
  }
}
