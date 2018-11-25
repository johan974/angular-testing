import { getCurrencies} from "./getCurrencies";

describe( 'currency array', () => {
  it( 'give all currencies', () => {
    const currencies = getCurrencies();
    expect( currencies).toContain( 'USD');
    expect( currencies).toContain( 'EUR');
    expect( currencies).toContain( 'AUD');
  })
})
