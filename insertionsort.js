function insertionSort1(n, arr) {
  // Write your code here
  let i = n - 2;
  let a = arr[n - 1];
  do {
    let string = "";
    for (let j = 0; j < arr.length; j++) {
      // jika j sama dengan i dan lebih besar dari pada let a
      if (j === i && arr[j] > a) {
        arr[j + 1] = arr[j];
      }
      if (j === i && arr[j] < a) {
        arr[j + 1] = a;
        i = 0;
      }
      string += arr[j] + " ";
    }
    console.log(string);
    i--;
  } while (i >= 0);

  let string1 = "";
  if (arr[0] > a) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[0] > a) {
        arr[j + 1] = arr[j];
        arr[j] = a;
      }
      string1 += arr[j] + " ";
    }
    console.log(string1);
  }
}
