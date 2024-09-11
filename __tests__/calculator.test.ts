
import { calculateInterest, formatCurrency } from '../src/calculator';

describe('Calculator tests', () => {
  it ('should calculateInterest works', () => {
    const res = calculateInterest({ amount: 100, interest: 7, duration: 1 });
    expect(res).toBe(0.5833333333333334); 
  });

  it ('should format currency', () => {
    const res = formatCurrency(123.445);

    expect(res).toBe('123.45');
  });
});
