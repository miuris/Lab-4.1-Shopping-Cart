//////////////
//TASK 1 /////////////////
////////////
function capitalize(name) {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
    
    function formatFullName(firstName, lastName) {
        if (!firstName || !lastName) {
            return "Invalid name input.";
        }
 
    const formattedFirst = capitalize(firstName);
    const formattedLast = capitalize(lastName);   

    return formattedLast + ', ' + formattedFirst;         
}

console.log(formatFullName('miuris', 'gutierrez'));
console.log(formatFullName('', 'gutierrez'));
console.log(formatFullName('miuris', ''));
console.log(formatFullName('', ''));

////////////
//TASK 2 /////////////////
//////////
function calculateTotalCost(price, quantity, taxRate) {

    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input.";
    }
    const totalCost = (price * quantity) * (1 + taxRate);

    return totalCost;
}
////////////
//TASK 3 /////////////////
//////////
function checkEligibility(age, isEmployed) {
    if (age >18 && isEmployed) {
        return "Eligible";
    } else if (age >18 && !isEmployed) {
        return "Conditionally Eligible";
    } else {
        return "Not Eligible";
    }
}
////////////
//TASK 4 /////////////////
//////////
function calculateTotalCost(price, taxRate, discount) {
    // Calculate base cost
    let baseTotal = price * (1 + taxRate);
    
    // Check if discount parameter is provided
    if (discount !== undefined) {
        // Subtract discount from base total
        baseTotal = baseTotal - discount;
    }
    
    return baseTotal.toFixed(2);
}

    ///Testing cases(price, taxes, discount)///
console.log(calculateTotalCost(100, 0.1, 15));
console.log(calculateTotalCost(100, .10, undefined));
console.log(calculateTotalCost(50, 0.08, 5)); 