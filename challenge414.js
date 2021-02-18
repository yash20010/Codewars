// You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.

// Create a function which returns the distance of the two points which are farthest apart.

// All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.

// furthest_distance([[1,2], [3,8], [4,3]]) # returns 6.32
// Distances between

// [1,2] [3,8] : 6.32

// [3,8] [4,3] : 5.10

// [1,2] [4,3] : 3.16

// This link may help if you don't know how to work out the distance between two points.

function furthestDistance(arr) {
  return arr.reduce((a, c, i, array) => {
    for (let j = i + 1; j < array.length; j++) {
      let val =
        Math.round(Math.hypot(c[0] - array[j][0], c[1] - array[j][1]) * 100) /
        100;
      if (a < val) {
        a = val;
      }
    }
    return a;
  }, 0);
}
