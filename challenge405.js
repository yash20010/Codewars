// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

// Write a function calculating perimeter of a Triangle defined this way.

// Tests round answers to 6 decimal places.

function hyp(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
function trianglePerimeter(triangle) {
  // your solution here
  return (
    hyp(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y) +
    hyp(triangle.a.x - triangle.c.x, triangle.a.y - triangle.c.y) +
    hyp(triangle.c.x - triangle.b.x, triangle.c.y - triangle.b.y)
  );
}
