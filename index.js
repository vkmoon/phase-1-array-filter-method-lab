function findMatching(drivers, match){
    const names = drivers.filter(driver => driver.toUpperCase() === match.toUpperCase())
    return names
}

function fuzzyMatch(drivers, match){
    const names = drivers.filter(driver => driver.startsWith(match))
    return names
}

function  matchName(drivers, string){
    const result = drivers.filter(driver => driver.name === string)
    return result

}



