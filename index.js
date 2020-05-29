const minimumAbsDifference = arr => {
    let result = [];
    let minAbsDiff = 0;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        let tempArr = [arr[i], arr[i + 1]];
        let difference = Math.abs(arr[i] - arr[i + 1]);

        if (difference < minAbsDiff || minAbsDiff === 0) {
            result = [tempArr];
            minAbsDiff = difference;
        } else if (difference === minAbsDiff) {
            result.push(tempArr);
        }
    }

    return result;
};