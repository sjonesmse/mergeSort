describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2, 7, 4, 5, 7, 8])).toEqual([[2, 7, 4], [5, 7, 8]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([2, 7, 4], [5, 7, 8])).toEqual([2, 4, 5, 7, 7, 8]);
  });
});
