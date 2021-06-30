// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  let arr = name.split(' ')
  if (arr.length < 3) return name
  return arr
    .map((w, i) => (i === 0 || i === arr.length - 1 ? w : w[0] + '.'))
    .join(' ')
}
