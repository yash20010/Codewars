// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

function sumOfABeach(beach) {
    // your code here
    return (
        (beach.match(/sand/gi) || []).length +
        (beach.match(/water/gi) || []).length +
        (beach.match(/fish/gi) || []).length +
        (beach.match(/sun/gi) || []).length
    )
}
