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