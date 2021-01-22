
// Started Code KilometerToMeter Function

function kilometerToMeter(km) {
    var meter = km * 1000;
    if (km >= 1) {
        return meter;
    }
    else {
        return ("Distance can not be nagative number.")
    }
}
var result = kilometerToMeter(-5);
console.log(result);

// End Code...




// Start Coding Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    if ((watch <= 0) || (phone <= 0) || (laptop <= 0)) {
        return 'Please add a item to your cart'
    }
    else {
        watchPrice = watch * 50;
        phonePrice = phone * 100;
        laptopPrice = laptop * 500;
    }
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
var totalBudget = budgetCalculator(1, -1, 1);
console.log(totalBudget);

// End Coding Budget Calculator





// Start Codding hotelCost
function hotelCost(stayDay) {
    var dayCost = 100;
    if (stayDay <= 10) {
        yourCost = stayDay * dayCost;
    }
    else if (stayDay <= 20) {
        var fristTenDays = 10 * dayCost;
        var discount = stayDay - 10;
        var discountPrice = discount * 80;
        stayDay = fristTenDays + discountPrice;
    }
    else {
        var fristTenDays = 10 * dayCost;
        var discountPrice = 10 * 80;
        var discount = stayDay - 20;
        var happyCustomer = discount * 50;
        stayDay = fristTenDays + discountPrice + happyCustomer;
    }
    return stayDay;
}
var yourHotelCost = hotelCost(21);
console.log(yourHotelCost)

// End hotelCost Coding






// staring megaFriend function

function megaFriend(friend) {
    var large = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
        if (friend.length < element.length) {
            large = element;
        }

    } return large;
}
var friend = ["abir", "abdullah", "robin", "Kalim Uddin", "ali", "Salim Uddin"]
var result = megaFriend(friend)
console.log(result)
// End  megaFriend *****

// My Name is MeHeDi HaSaN khairul