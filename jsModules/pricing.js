// PRICING FUNCTIONS
function calculateSubtotal(cart) {
  let total = 0;

  for (const product of cart) {
    total += product.price;
  }

  return total;
}

function calculateTax(amount) {
  return amount * 0.1;
}

function calculateTotal(cart) {
  const subtotal = calculateSubtotal(cart);
  const tax = calculateTax(subtotal);

  return subtotal + tax;
}