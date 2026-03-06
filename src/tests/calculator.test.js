const calculator = require('../calculator');

describe('Calculator - Basic Arithmetic Operations', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers: -5 + (-3) = -8', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers: 10 + (-7) = 3', () => {
      expect(calculator.add(10, -7)).toBe(3);
    });

    test('should handle zero: 5 + 0 = 5', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add decimal numbers: 2.5 + 1.5 = 4', () => {
      expect(calculator.add(2.5, 1.5)).toBe(4);
    });

    test('should add zero and zero: 0 + 0 = 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers: -5 - (-3) = -2', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero: 10 - 0 = 10', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract same numbers: 7 - 7 = 0', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });

    test('should subtract decimal numbers: 5.5 - 2.5 = 3', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers: -3 * -4 = 12', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative: 6 * -3 = -18', () => {
      expect(calculator.multiply(6, -3)).toBe(-18);
    });

    test('should handle multiplication by zero: 50 * 0 = 0', () => {
      expect(calculator.multiply(50, 0)).toBe(0);
    });

    test('should handle multiplication by one: 42 * 1 = 42', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers: 100 * 200 = 20000', () => {
      expect(calculator.multiply(100, 200)).toBe(20000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers: -20 / -5 = 4', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative: 20 / -5 = -4', () => {
      expect(calculator.divide(20, -5)).toBe(-4);
    });

    test('should divide resulting in decimal: 7 / 2 = 3.5', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should divide by one: 100 / 1 = 100', () => {
      expect(calculator.divide(100, 1)).toBe(100);
    });

    test('should divide zero by number: 0 / 5 = 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero: 10 / 0', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero: -5 / 0', () => {
      expect(() => calculator.divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero: 0 / 0', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers: 10.5 / 2.5 = 4.2', () => {
      expect(calculator.divide(10.5, 2.5)).toBe(4.2);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers in addition', () => {
      expect(calculator.add(1000000, 1000000)).toBe(2000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle negative zero', () => {
      expect(calculator.add(-0, 0)).toBe(0);
    });

    test('should handle sequential operations', () => {
      // (45 * 2) - 10 = 80
      const result1 = calculator.multiply(45, 2);
      const result2 = calculator.subtract(result1, 10);
      expect(result2).toBe(80);
    });

    test('should handle division with remainder', () => {
      // 15 / 4 = 3.75
      expect(calculator.divide(15, 4)).toBe(3.75);
    });
  });
});
