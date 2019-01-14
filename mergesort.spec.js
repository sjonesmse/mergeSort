describe('Split Array function', () => {
  it('is able to split an array into two halves', () => {
    expect(split([2, 7, 4, 5, 7, 8])).toEqual([[2, 7, 4], [5, 7, 8]]);
  });
});

describe('Merge function', () => {
  it('is able to merge two sorted arrays into one sorted array', () => {
    expect(merge([2, 4, 7], [5, 7, 8])).toEqual([2, 4, 5, 7, 7, 8]);
  });
});

describe('MergeSort function', () => {
  it('is able to sort an array', () => {
    expect(mergeSort([2, 14, 7, 5, 70, 8])).toEqual([2, 5, 7, 8, 14, 70]);
  });
});
