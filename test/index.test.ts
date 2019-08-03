import { expect } from 'chai';
import 'mocha';
import index = require('../dist/index');

describe('index', () => {
  it('should have message equal to `Hello, World!`', () => {
    expect(index.message).to.be.equal('Hello, World!');
  });
});
