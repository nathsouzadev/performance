const size = 10000 // 10k

const array = Array.from({ length: size } ).map((_, idx) => ({ idx }))

const t0 = performance.now()
let data = 0

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    data++
    if (arr[i].idx === value) {
    console.log(data)
      return i
    }
  }
  return -1
}

linearSearch(array, 9000)

console.log('Linear search', performance.now() - t0, 'ms')
console.log('-------------------')

const t1 = performance.now()
let n = 0
function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid].idx === value) {
      console.log(n)
      return mid
    }
    if (arr[mid].idx < value) {
      n++
        start = mid + 1
    } else {
        n++
        end = mid - 1
    }
  }
  return -1
}

binarySearch(array, 9000)
console.log('Binary search:', performance.now() - t1, 'ms')