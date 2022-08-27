function bigSorting(unsorted) {
  // Write your code here
  unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      let i = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
      }
    }
  });

  return unsorted;
}
