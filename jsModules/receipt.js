
// receipt function
function printReceipt(cart) {
  console.log("========== RECEIPT ==========");

  for (const product of cart) {
    console.log(`${product.name}: $${product.price}`);
  }

  const total = calculateTotal(cart);

  console.log("-----------------------------");
  console.log(`Total: $${total}`);
  console.log("=============================");
}