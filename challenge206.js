// Ever the learned traveller, Alan Partridge has pretty strong views on London:

// "Go to London. I guarantee you'll either be mugged or not appreciated.
// Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
// Your job is to check that the provided list of stations contains all of the stops Alan mentions. There will be other stations in the array. Example:

// ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
// If the stations all appear, return 'Smell my cheese you mother!', if not, return 'No, seriously, run. You will miss it. '.


function alan(x){
  let stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
  for(let i = 0; i<stations.length; i++){
    if(!(x.includes(stations[i]))){
      return 'No, seriously, run. You will miss it.'
    }
  }
  return 'Smell my cheese you mother!'
}