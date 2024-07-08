

import MyArray from './MyArray.mjs';



// const MyArray = require('./MyArray.cjs');


let arrInstance = new MyArray([5, 2, 8, 1, 4]);


arrInstance.printArray();


console.log('Min:', arrInstance.findMin());


console.log('Max:', arrInstance.findMax());


console.log('Sum:', arrInstance.findSum());


arrInstance.sortArray();
console.log('Sorted Array:', arrInstance.getArray());
