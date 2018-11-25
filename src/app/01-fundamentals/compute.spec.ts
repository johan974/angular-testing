import { compute } from './compute';

describe('compute', () => {
      it( 'shoud return 0 on negative values', () => {
        const result = compute( -1);
    expect( result).toBe( 0);
  })
  it( 'shoud increment by 1 on positive values', () => {
    const result = compute( 0);
    expect( result).toBe( 1);
  })
  it( 'shoud increment by 1 on positive values p2', () => {
    const result = compute( 1);
    expect( result).toBe( 2);
  })
})
