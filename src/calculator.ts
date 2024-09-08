export interface Inputs {
  amount: number;
  interest: number;
  duration: number;
}

// government rax rate
export const RAX_RATE = 5;

export function calculateInterest(inputs: Inputs): number {
  const amount = parseInt(inputs.amount as any);
  const interestRate = parseFloat(inputs.interest as any);
  const duration = parseInt(inputs.duration as any);

  // Calculate interest using the formula: 
  // (P * r * t) / 100, where P is the principal amount,
  // r is the interest rate, and t is the time in years.
  const interest = (amount * interestRate * duration) / (100 * 12);

  return interest;
}

export function formatCurrency(amount: number) {
  return (Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
}
