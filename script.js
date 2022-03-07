function diagonalDifference(arr) {
    var n = arr.length
    var diagonal1 = 0
    var diagonal2 = 0

    for (var i = 0; i < n; i++) {

        for (var j = 0; j < n; j++) {

            // finding the sum of primary diagonal
            if (i === j) {
                diagonal1 += arr[i][j]
            }

            // finding the sum of secondary diagonal
            if (i + j === n - 1) {
                diagonal2 += arr[i][j]
            }

        }

    }

    return Math.abs(diagonal1 - diagonal2)
}