// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
     bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'x';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'y';
}