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

console.log(calculateTotalCost(100, 0.1, 15)); // Expected: price=$100, tax=10%, discount=$15

// Test 2: Without discount  
console.log(calculateTotalCost(100, .10, undefined)); // Expected: price=$100, tax=10%, no discount

// Test 3: With discount
console.log(calculateTotalCost(50, 0.08, 5));  // Expected: price=$200, tax=8%, discount=$20
