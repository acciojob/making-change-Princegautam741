const makeChange = (c) => {
    // Ensure c is a positive integer less than 100 and greater than 0
    if (typeof c !== 'number' || c <= 0 || c >= 100) {
        alert("Invalid input. Please enter a positive integer less than 100.");
        return;
    }

    // Initialize coin counts
    let quarters = 0, dimes = 0, nickels = 0, pennies = 0;

    // Calculate the number of quarters
    quarters = Math.floor(c / 25);
    c %= 25;

    // Calculate the number of dimes
    dimes = Math.floor(c / 10);
    c %= 10;

    // Calculate the number of nickels
    nickels = Math.floor(c / 5);
    c %= 5;

    // The remaining cents are pennies
    pennies = c;

    // Return the result as an object
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};
