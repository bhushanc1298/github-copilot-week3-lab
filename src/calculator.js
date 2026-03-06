#!/usr/bin/env node

/**
 * CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Calculator operations
const calculator = {
  // Addition operation
  add: (a, b) => a + b,

  // Subtraction operation
  subtract: (a, b) => a - b,

  // Multiplication operation
  multiply: (a, b) => a * b,

  // Division operation
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
};

// Close readline interface if not running as main module
if (require.main !== module) {
  rl.close();
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculator;
}

// Main calculator function
function startCalculator() {
  console.log('🧮 Welcome to the Node.js CLI Calculator!');
  console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Type "exit" to quit\n');

  promptUser();
}

// Prompt user for input
function promptUser() {
  rl.question('Enter expression (e.g., 5 + 3): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    try {
      const result = evaluateExpression(input);
      console.log(`Result: ${result}\n`);
    } catch (error) {
      console.error(`Error: ${error.message}\n`);
    }

    promptUser();
  });
}

// Parse and evaluate the expression
function evaluateExpression(input) {
  const trimmed = input.trim();
  
  // Match pattern: number operator number
  const match = trimmed.match(/^(-?\d+\.?\d*)\s*([\+\-\*\/])\s*(-?\d+\.?\d*)$/);
  
  if (!match) {
    throw new Error('Invalid expression. Use format: number operator number');
  }

  const num1 = parseFloat(match[1]);
  const operator = match[2];
  const num2 = parseFloat(match[3]);

  switch (operator) {
    case '+':
      return calculator.add(num1, num2);
    case '-':
      return calculator.subtract(num1, num2);
    case '*':
      return calculator.multiply(num1, num2);
    case '/':
      return calculator.divide(num1, num2);
    default:
      throw new Error('Unknown operator');
  }
}

// Only start the CLI if this file is being run directly (not imported for testing)
if (require.main === module) {
  startCalculator();
}
