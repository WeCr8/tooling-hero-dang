// src/utils/formatting.js

export function fractionToDecimal(value) {
    if (typeof value === 'string' && value.includes('/')) {
      const [numerator, denominator] = value.split('/').map(Number)
      if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
        return (numerator / denominator).toFixed(3)
      }
    }
    return value
  }
  
  export function formatNumber(value, decimals = 3) {
    const num = parseFloat(value)
    if (!isNaN(num)) {
      return num.toFixed(decimals)
    }
    return value
  }
  