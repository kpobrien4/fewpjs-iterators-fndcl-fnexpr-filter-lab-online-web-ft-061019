
function findMatching (driversList, name) {
    return driversList.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }

function fuzzyMatch(driversList, firstLetters){
    return driversList.filter(function (driverName) {
        return driverName.slice(0, firstLetters.length) === firstLetters
    });

}

function matchName(driversList, name) {
    return driversList.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase()

    }) 

}