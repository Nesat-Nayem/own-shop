export const totalEarning = (data) => {
    console.log(data)
    let price = 0;
    data.forEach(element => {
        // price = price + element.Price;
        if (element.price) {

            price = price + element.price;
        }
    });
    return price;
}