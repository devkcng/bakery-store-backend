import {
  PrismaClient,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  ShippingStatus,
  ProcessingStatus,
  OvenStatus,
  CartStatus,
  AccountType,
  Role,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St',
      image: 'path/to/image.jpg',
      account_type: AccountType.LOCAL,
      role: Role.CUSTOMER,
      provider_account_id: 'provider123',
      password: 'password123',
    },
  });

  // Seed Categories
  const category = await prisma.category.create({
    data: {
      name: 'Bread',
    },
  });

  // Seed Products
  const product = await prisma.product.create({
    data: {
      name: 'Sourdough Bread',
      category_id: category.id,
      price: 5.99,
      description: 'A delicious sourdough bread',
      img_path: '/images/sourdough.jpg',
      product_capacity_per_batch: 50,
    },
  });

  // Seed Warehouses
  const warehouse = await prisma.wareHouse.create({
    data: {
      name: 'Main Warehouse',
      quantity: 1000,
      unit: 'kg',
    },
  });

  // Seed Recipes
  const recipe = await prisma.recipe.create({
    data: {
      name: 'Sourdough Recipe',
      product_id: product.id,
      complete_time: 120,
    },
  });

  // Seed RecipeDetails
  await prisma.recipeDetail.create({
    data: {
      warehouse_id: warehouse.id,
      quantity: 500,
      recipe_id: recipe.id,
    },
  });

  // Seed Orders
  const order = await prisma.order.create({
    data: {
      user_id: user.id,
      total_amount: 59.9,
      order_status: OrderStatus.PENDING,
      order_date: new Date(),
    },
  });

  // Seed OrderDetails
  const orderDetail = await prisma.orderDetail.create({
    data: {
      order_id: order.id,
      product_id: product.id,
      product_quantity: 10,
    },
  });

  // Seed Transactions
  await prisma.transaction.create({
    data: {
      payment_method: PaymentMethod.BANK_TRANSFER,
      status: PaymentStatus.SUCCESS,
      amount: 59.9,
      order_id: order.id,
    },
  });

  // Seed Toppings
  const topping = await prisma.topping.create({
    data: {
      name: 'Sesame Seeds',
      price: 0.5,
    },
  });

  // Seed ProductToppings
  await prisma.productTopping.create({
    data: {
      product_id: product.id,
      topping_id: topping.id,
    },
  });

  // Seed OrderProductToppings
  await prisma.orderProductTopping.create({
    data: {
      order_detail_id: orderDetail.id,
      topping_id: topping.id,
      quantity: 5,
    },
  });

  // Seed ShippingInfos
  await prisma.shippingInfo.create({
    data: {
      recipient_name: 'John Doe',
      street_address: '123 Main St',
      district: 'District 1',
      ward: 'Ward 1',
      phone_number: '1234567890',
      notes: 'Leave at the front door',
      order_id: order.id,
      shipping_status: ShippingStatus.IN_TRANSIT,
    },
  });

  // Seed OrderDetailProcesses
  await prisma.orderDetailProcess.create({
    data: {
      order_detail_id: orderDetail.id,
      processing_status: ProcessingStatus.WAITING,
      order_quantity: 10,
      processing_quantity: 5,
      processed_quantity: 5,
    },
  });

  // Seed Ovens
  const oven = await prisma.oven.create({
    data: {
      status: OvenStatus.AVAILABLE,
      current_capacity_used: 0,
    },
  });

  // Seed Carts
  const cart = await prisma.cart.create({
    data: {
      user_id: user.id,
      status: CartStatus.ACTIVE,
    },
  });

  // Seed CartItems
  await prisma.cartItem.create({
    data: {
      cart_id: cart.id,
      product_id: product.id,
      quantity: 2,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
