
const record = [
    { year: "2014", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2013", result: "L"},
    
    
]
function superbowlWin (record) {
    const yearWon= record.find(record => record.result === "W")
    return yearWon ? yearWon.year : undefined
}

console.log(superbowlWin(record))