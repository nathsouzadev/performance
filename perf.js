const size = 10000 // 10k

const array = Array.from({ length: size } ).map((_, idx) => ({ idx }))
const array2 = Array.from({ length: size }).map((_, idx) => ({ idx: idx * 2 }))
const db1 = []

const t0 = performance.now()
for (const item of array){
    if(array2.some(item2 => item2.idx === item.idx)){
        db1.push(item)
    }
}

console.log('Array performance', performance.now() - t0, 'ms')


const t1 = performance.now()
const collection = array2.map((_, idx) => ({ idx: idx * 2 })).reduce((data, item) => {
    data[item.idx] = item
    return data
}, {})
const db2 = []

for (const item of array){
    if(collection[item.idx]){
        db2.push(item)
    }
}

console.log('Map performance', performance.now() - t1, 'ms')
