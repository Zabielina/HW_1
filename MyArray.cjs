

class MyArray {
    constructor(arr = []) {
        this.array = arr;
    }

    getArray() {
        return this.array;
    }

    setArray(arr) {
        this.array = arr;
    }

    printArray() {
        console.log(this.array);
    }

    findMin() {
        if (this.array.length === 0) return null;
        let min = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] < min) {
                min = this.array[i];
            }
        }
        return min;
    }

    findMax() {
        if (this.array.length === 0) return null;
        let max = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] > max) {
                max = this.array[i];
            }
        }
        return max;
    }

    findSum() {
        return this.array.reduce((acc, val) => acc + val, 0);
    }

    sortArray() {
        let arr = this.array;
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                  
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        this.array = arr;
    }
}

module.exports = MyArray;
