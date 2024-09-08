#!/usr/bin/env node
import { Command } from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';
import { calculateInterest, formatCurrency, RAX_RATE } from './calculator.js';

const program = new Command();

console.log(
  chalk.blue(figlet.textSync('InterestMe', { horizontalLayout: 'full' }))
);

program
  .version('1.0.0')
  .description('This tool allows you to calculate the interest amount for a given amount and time')
  .requiredOption('-a, --amount <type>', 'Amount')
  .requiredOption('-i, --interest <type>', 'Interest rate for anum')
  .requiredOption('-d, --duration <type>', 'Duration in months')
  .action((options) => {
    const result = calculateInterest(options);
    const taxAmount = result * 0.01 * RAX_RATE;
    console.log(`
      Interest earned: ${chalk.green(formatCurrency(result))} LKR
      Rax Rate: ${chalk.green(RAX_RATE.toFixed(2))} %
      Tax amount: ${chalk.red(formatCurrency(taxAmount))} LKR
      Interest after tax: ${chalk.green(formatCurrency(result - taxAmount))} LKR
    `);
  });

program.parse(process.argv);
