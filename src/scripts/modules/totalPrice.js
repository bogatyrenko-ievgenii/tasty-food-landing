const prices = {
    "pizza roasted": 190,
    "pizza fried": 200,
    "pizza fresh": 220,
    "pizza home made": 250,
    "burger roasted": 190,
    "burger fried": 200,
    "burger fresh": 220,
    "burger home made": 250,
    "sushi roasted": 190,
    "sushi fried": 200,
    "sushi fresh": 220,
    "sushi home made": 250,
}



const getAmount = () => {
    let shopping = JSON.parse(localStorage.getItem('shopping'));
    let totalPrice = 0;
    
    for (let quantity in shopping) {
        for (let price in prices) {
            if (quantity == price) {
                totalPrice += shopping[quantity] * prices[price]
            }
        }
    }
    
    document.querySelector('.header__price').innerHTML = totalPrice !== 0 ? `${totalPrice}<br>UAH` : '';
}

export default getAmount;
