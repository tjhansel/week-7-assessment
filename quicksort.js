function quicksort(arr) {
  sort(arr, 0, arr.length - 1)
  function swap(arr, a, b) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  function partition(arr, l, r) {
    var p = arr[r],
      i = l - 1,
      j = l
    while (j < r) {
      if (arr[j] <= p) {
        swap(arr, ++i, j)
      }
      j++
    }
    swap(arr, i + 1, r)
    return i + 1
  }
  function sort(arr, l, r) {
    var p
    if (l < r) {
      p = partition(arr, l, r)
      sort(arr, l, p - 1)
      sort(arr, p + 1, r)
    } else if (l === arr.length) {
      console.log(arr)
    }
  }
}


quicksort([89,44,32,65,90,12,2,5,83,109,42,65,73,21,8,81,0,52,55,77,23])
// quicksort(['apple','banana','almond','juciy fruit','coconut','watermelon','strawberry'])