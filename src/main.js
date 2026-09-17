// task 1

function calculateSubtotal(price, quantity) {
  if (price <= 0 || quantity <= 0) {
    return 0;
  }

  const total = price * quantity;
  return total;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0

// task 2

function calculateDiscount(subtotal, isPremium) {
  let totalDiscount = 0;

  if (!isPremium) {
    return 0;
  }

  if (subtotal >= 1000) {
    totalDiscount = subtotal * 0.1;
  } else {
    totalDiscount = subtotal * 0.05;
  }

  // Ще один варіант
  // if (subtotal >= 1000 && isPremium) {
  //   totalDiscount = subtotal * 0.1;
  // } else if (subtotal <= 1000 && isPremium) {
  //   totalDiscount = subtotal * 0.05;
  // }

  return totalDiscount;
}

console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0

// task 3

function getDeliveryPrice(deliveryType) {
  switch (deliveryType) {
    case 'pickup':
      return 0;

    case 'standard':
      return 80;

    case 'express':
      return 150;

    default:
      return -1;
  }
}

console.log(getDeliveryPrice('pickup')); // 0
console.log(getDeliveryPrice('standard')); // 80
console.log(getDeliveryPrice('express')); // 150
console.log(getDeliveryPrice('drone')); // -1

// task 4

function showPackingProgress(quantity) {
  if (quantity <= 0) {
    console.log('Немає товарів для пакування');
    return;
  }

  for (let i = 1; i <= quantity; i++) {
    console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

showPackingProgress(3);
showPackingProgress(1);
showPackingProgress(0);

// task 5

function createOrderSummary(
  productName,
  price,
  quantity,
  isPremium,
  deliveryType
) {
  const subtotal = calculateSubtotal(price, quantity);

  if (subtotal === 0) {
    return 'Замовлення неможливо оформити';
  }

  const discount = calculateDiscount(subtotal, isPremium);
  const deliveryPrice = getDeliveryPrice(deliveryType);

  if (deliveryPrice === -1) {
    return 'Невідомий спосіб доставки';
  }

  const total = subtotal - discount + deliveryPrice;

  showPackingProgress(quantity);

  return `Товар: ${productName}. Кількість: ${quantity}. До сплати: ${total} грн.`;
}

console.log(createOrderSummary('Навушники', 250, 4, true, 'standard'));
// Товар: Навушники. Кількість: 4. До сплати: 980 грн.

console.log(createOrderSummary('Клавіатура', 800, 1, true, 'pickup'));
// Товар: Клавіатура. Кількість: 1. До сплати: 760 грн.

console.log(createOrderSummary('Миша', 500, 0, false, 'express'));
// Замовлення неможливо оформити

console.log(createOrderSummary('Монітор', 5000, 1, false, 'drone'));
// Невідомий спосіб доставки
