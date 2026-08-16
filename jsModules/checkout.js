// checkout function
function checkout(cart) {
    if (isCartEmpty(cart)) {
        console.log("Cart is empty!");
        return;
    }

    console.log("Starting checkout...");

    printReceipt(cart);

    console.log("Payment successful!");
}

module.exports = { checkout }