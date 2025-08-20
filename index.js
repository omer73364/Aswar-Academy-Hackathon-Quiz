// OMAR ANWAR - 07880004146

function bubbleSortArray(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}

function analyzeMissingFrames(frames) {
  const sorted_array = bubbleSortArray([...frames]);
  const gaps = [];
  let longest_gap = null;
  let missing_count = 0;
  let previous = 0;

  for (const current of [...sorted_array, sorted_array.at(-1) + 1]) {
    if (current - previous > 1) {
      const range = [previous + 1, current - 1];
      gaps.push(range);

      if (
        !longest_gap ||
        range[1] - range[0] > longest_gap[1] - longest_gap[0]
      ) {
        longest_gap = range;
      }

      missing_count += current - previous - 1;
    }
    previous = current;
  }

  return { gaps, longest_gap, missing_count };
}

// Example
const frames = [1, 2, 3, 5, 6, 10, 11, 16];
const result = analyzeMissingFrames(frames);

console.log(result);
