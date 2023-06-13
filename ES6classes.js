class DescriptiveStatistics {
    static mean(numbers) {
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum / numbers.length;
    }
  
    static median(numbers) {
      const sorted = numbers.sort((a, b) => a - b);
      const middleIndex = Math.floor(sorted.length / 2);
  
      if (sorted.length % 2 === 0) {
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
      } else {
        return sorted[middleIndex];
      }
    }
  
    static mode(numbers) {
      const frequency = new Map();
  
      for (let num of numbers) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
      }
  
      let maxCount = 0;
      let modes = [];
  
      for (let [num, count] of frequency) {
        if (count > maxCount) {
          maxCount = count;
          modes = [num];
        } else if (count === maxCount) {
          modes.push(num);
        }
      }
  
      return modes;
    }
  
    static range(numbers) {
      const sorted = numbers.sort((a, b) => a - b);
      return sorted[sorted.length - 1] - sorted[0];
    }
  
    static variance(numbers) {
      const mean = DescriptiveStatistics.mean(numbers);
      const squaredDifferences = numbers.map((num) => (num - mean) ** 2);
      const sumSquaredDiff = squaredDifferences.reduce((acc, curr) => acc + curr, 0);
      return sumSquaredDiff / numbers.length;
    }
  
    static standardDeviation(numbers) {
      const variance = DescriptiveStatistics.variance(numbers);
      return Math.sqrt(variance);
    }
  
    static quartiles(numbers) {
      const sorted = numbers.sort((a, b) => a - b);
      const q1Index = Math.floor(sorted.length / 4);
      const q2Index = Math.floor(sorted.length / 2);
      const q3Index = Math.floor((sorted.length * 3) / 4);
  
      return [sorted[q1Index], sorted[q2Index], sorted[q3Index]];
    }
  }
  const numbers = [2, 4, 6, 8, 10];

  console.log(DescriptiveStatistics.mean(numbers));  // Output: 6
  console.log(DescriptiveStatistics.median(numbers));  // Output: 6
    