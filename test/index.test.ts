import { expect } from 'chai';
import 'mocha';
import index = require('../dist/index');

describe('index', () => {
  it('should have NiseMongoClient', () => {
    expect(index.NiseMongoClient).to.be.a('function');
  });
});
