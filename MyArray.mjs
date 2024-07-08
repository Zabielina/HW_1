

export default class MyArray {
    
    constructor(arr) {
        this.array = arr || [];
    }

 
    getArray() {
        return this.array;
    }

    setArray(arr) {
        this.array = arr;
    }

    
    print() {
        console.log(this.array);
    }

    findMin() {
        return Math.min(...this.array);
    }

   
    findMax() {
        return Math.max(...this.array);
    }

    
    findSum() {
        return this.array.reduce((acc, curr) => acc + curr, 0);
    }

    bubbleSort() {
        let len = this.array.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                  
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
        return this.array;
    }
}


