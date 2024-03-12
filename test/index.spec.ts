import 'mocha'
import { expect } from 'chai'

describe('prueba', () => {
  it('hello world', () => {
    let string: string = "hello";
    expect(string).to.be.equal("hello")
  })
})