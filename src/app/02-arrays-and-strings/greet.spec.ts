import { greet } from './greet';

describe('greeting-test', () => {
  it( 'Name should be added to welcome ', () => {
    expect( greet('johan')).toContain( 'johan');
  })
})
