function findLeapYear(years) {
    let leapYears = [];
  
    for (let i = 0; i < years.length; i++) {
      if (years[i] % 4 === 0 && (years[i] % 100 !== 0 || years[i] % 400 === 0)) {
        leapYears.push(years[i]);
      }
    }
  
    console.log("Leap Years: ", leapYears);
    return leapYears;
  }
  
  const input = [2023, 2024, 2025, 2028, 2030];
  findLeapYear(input);
  