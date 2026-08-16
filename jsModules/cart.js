// cart function
export function addProduct(cart, product) {
    cart.push(product);
}

export function removeProduct(cart, productName) {
    return cart.filter(product => product.name !== productName);
}

export function isCartEmpty(cart) {
    return cart.length === 0;
}

export const data = { name: "popular" }

// module.exports = { addProduct, removeProduct, isCartEmpty }