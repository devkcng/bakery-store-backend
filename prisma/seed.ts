import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Category
  await prisma.category.createMany({
    data: [{ name: 'Bánh ngọt' }, { name: 'Bánh mặn' }],
  });

  // Seed WareHouse
  await prisma.wareHouse.createMany({
    data: [
      { name: 'Bột mì', quantity: 100.0, unit: 'kg' },
      { name: 'Phô mai', quantity: 3.0, unit: 'kg' },
    ],
  });

  // Seed Product
  await prisma.product.createMany({
    data: [
      {
        name: 'Pizza hải sản',
        category_id: 2,
        price: 200000,
        description: 'Pizza hải sản nóng hổi',
        img_path: '/imgs/bakery-images/pizzab.png',
        max_daily_quantity_limit: 20,
        product_capacity_per_batch: 4,
      },
      {
        name: 'Bánh su kem',
        category_id: 1,
        price: 10000,
        description: 'Bánh su kem thơm ngon',
        img_path: '/imgs/bakery-images/chouxb.png',
        max_daily_quantity_limit: 100,
        product_capacity_per_batch: 24,
      },
      {
        name: 'Bánh cupcake',
        category_id: 1,
        price: 20000,
        description: 'Bánh cupcake thơm ngon',
        img_path: '/imgs/bakery-images/cupcakeb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
      },
      {
        name: 'Bánh táo',
        category_id: 1,
        price: 80000,
        description: 'Bánh táo Pháp thơm ngon',
        img_path: '/imgs/bakery-images/applepieb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
      },
      {
        name: 'Bánh macaron',
        category_id: 1,
        price: 20000,
        description: 'Bánh macaron thơm ngon',
        img_path: '/imgs/bakery-images/macaronb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 24,
      },
      {
        name: 'Bánh cookies',
        category_id: 1,
        price: 20000,
        description: 'Bánh cookies thơm ngon',
        img_path: '/imgs/bakery-images/cookiesb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 24,
      },
      {
        name: 'Bánh sừng bò',
        category_id: 1,
        price: 40000,
        description: 'Bánh sừng bò thơm ngon',
        img_path: '/imgs/bakery-images/croissantb.png',
        max_daily_quantity_limit: 100,
        product_capacity_per_batch: 12,
      },
    ],
  });

  // Seed Recipe
  await prisma.recipe.createMany({
    data: [
      { name: 'Bước 1: Làm sốt cà chua...', product_id: 1, complete_time: 120 },
      { name: 'Bước 1:Làm phần vỏ bánh...', product_id: 2, complete_time: 120 },
      { name: '1.Bật nóng lò nướng...', product_id: 3, complete_time: 70 },
      { name: '+ Làm cốt bánh...', product_id: 4, complete_time: 75 },
      { name: '1.Đun chảy socola và bơ...', product_id: 5, complete_time: 75 },
      { name: '1.Chuối lột vỏ...', product_id: 6, complete_time: 120 },
      { name: 'Bước 1: Làm vỏ bánh...', product_id: 7, complete_time: 100 },
      {
        name: '1.Đem cốt chanh trộn với sữa...',
        product_id: 8,
        complete_time: 50,
      },
      { name: 'Bước 1: Sơ Chế Táo...', product_id: 9, complete_time: 65 },
      { name: 'Bước 1: Chuẩn bị Bột...', product_id: 10, complete_time: 100 },
      {
        name: 'Bước 1: Trộn Hỗn Hợp Bột...',
        product_id: 11,
        complete_time: 40,
      },
      {
        name: 'Bước 1: Nhào bột, nghỉ bột...',
        product_id: 12,
        complete_time: 120,
      },
    ],
  });

  // Seed Topping
  await prisma.topping.createMany({
    data: [
      { name: 'Kiwi', price: 5000 },
      { name: 'Bột matcha', price: 5000 },
      { name: 'Mứt đào', price: 5000 },
      { name: 'Thịt nguội', price: 8000 },
      { name: 'Mứt việt quất', price: 5000 },
      { name: 'Việt quất', price: 5000 },
      { name: 'Mâm xôi', price: 5000 },
      { name: 'Bơ tan chảy', price: 5000 },
      { name: 'Sốt mayonaise', price: 5000 },
      { name: 'Hạt vừng', price: 5000 },
      { name: 'Phô mai sợi', price: 10000 },
      { name: 'Socola đen', price: 5000 },
      { name: 'Bột cacao', price: 5000 },
      { name: 'Bơ đậu phộng', price: 5000 },
      { name: 'Chuối', price: 10000 },
      { name: 'Nho khô', price: 5000 },
      { name: 'Táo tươi', price: 10000 },
      { name: 'Kem tươi', price: 5000 },
      { name: 'Mật ong', price: 5000 },
      { name: 'Tôm', price: 15000 },
      { name: 'Nghêu', price: 15000 },
      { name: 'Ớt chuông', price: 10000 },
      { name: 'Tỏi', price: 5000 },
      { name: 'Hành', price: 5000 },
      { name: 'Cà chua', price: 5000 },
      { name: 'Bánh oreo', price: 8000 },
      { name: 'Hạnh nhân lát', price: 8000 },
      { name: 'Dâu sấy dẻo', price: 10000 },
      { name: 'Dừa dợi sấy', price: 5000 },
      { name: 'Hạt óc chó', price: 5000 },
      { name: 'Sốt caramel', price: 10000 },
      { name: 'Dâu tây tươi', price: 10000 },
      { name: 'Sốt socola', price: 5000 },
      { name: 'Mứt trái cây', price: 5000 },
    ],
  });

  // // Seed ShippingInfo
  // await prisma.shippingInfo.createMany({
  //   data: [
  //     {
  //       recipient_name: 'Nguyễn Văn Vũ',
  //       street_address: '123 Đường Lê Lợi',
  //       district: 'Quận 1',
  //       ward: 'Phường Bến Nghé',
  //       phone_number: '0901234567',
  //       notes: 'Giao hàng trong giờ hành chính',
  //       shipping_status: 'IN_TRANSIT',
  //       order_id: 0,
  //     },
  //     {
  //       recipient_name: 'Trần Thị Bự',
  //       street_address: '456 Đường Nguyễn Huệ',
  //       district: 'Quận 1',
  //       ward: 'Phường Bến Thành',
  //       phone_number: '0902345678',
  //       notes: 'Giao sau 5 giờ chiều',
  //       shipping_status: 'DELIVERED',
  //       order_id: 0,
  //     },
  //     {
  //       recipient_name: 'Lê Văn Cao',
  //       street_address: '789 Đường Trường Chinh',
  //       district: 'Quận Tân Bình',
  //       ward: 'Phường 15',
  //       phone_number: '0903456789',
  //       notes: 'Gọi trước khi giao',
  //       shipping_status: 'DELIVERED',
  //     },
  //     {
  //       recipient_name: 'Phạm Thị Diệp',
  //       street_address: '135 Đường Hoàng Hoa Thám',
  //       district: 'Quận Bình Thạnh',
  //       ward: 'Phường 7',
  //       phone_number: '0904567890',
  //       notes: 'Giao hàng trong buổi sáng',
  //       shipping_status: 'IN_TRANSIT',
  //     },
  //     {
  //       recipient_name: 'Đỗ Minh Em',
  //       street_address: '246 Đường Cách Mạng Tháng 8',
  //       district: 'Quận 3',
  //       ward: 'Phường 11',
  //       phone_number: '0905678901',
  //       notes: 'Giao trong giờ hành chính',
  //       shipping_status: 'IN_TRANSIT',
  //     },
  //     {
  //       recipient_name: 'Bùi Văn Pha',
  //       street_address: '357 Đường Điện Biên Phủ',
  //       district: 'Quận Bình Thạnh',
  //       ward: 'Phường 25',
  //       phone_number: '0906789012',
  //       notes: 'Không gọi khi giao hàng',
  //       shipping_status: 'DELIVERED',
  //     },
  //     {
  //       recipient_name: 'Vũ Thị Gióng',
  //       street_address: '468 Đường Hai Bà Trưng',
  //       district: 'Quận 3',
  //       ward: 'Phường 6',
  //       phone_number: '0907890123',
  //       notes: 'Giao hàng sau 6 giờ chiều',
  //       shipping_status: 'IN_TRANSIT',
  //     },
  //     {
  //       recipient_name: 'Ngô Văn Huy',
  //       street_address: '579 Đường Nguyễn Trãi',
  //       district: 'Quận 5',
  //       ward: 'Phường 8',
  //       phone_number: '0908901234',
  //       notes: 'Gọi điện trước khi giao',
  //       shipping_status: 'IN_TRANSIT',
  //     },
  //     {
  //       recipient_name: 'Trịnh Thị Ý',
  //       street_address: '680 Đường Võ Văn Kiệt',
  //       district: 'Quận 1',
  //       ward: 'Phường Cô Giang',
  //       phone_number: '0909012345',
  //       notes: 'Giao hàng trong buổi chiều',
  //       shipping_status: 'DELIVERED',
  //     },
  //     {
  //       recipient_name: 'Lâm Văn Châu',
  //       street_address: '791 Đường Phan Xích Long',
  //       district: 'Quận Phú Nhuận',
  //       ward: 'Phường 2',
  //       phone_number: '0910123456',
  //       notes: 'Giao trong giờ hành chính',
  //       shipping_status: 'DELIVERED',
  //     },
  //   ],
  // });

  // Seed Oven
  await prisma.oven.createMany({
    data: [
      {
        oven_product_capacity_id: 1,
        status: 'AVAILABLE',
        current_capacity_used: 0,
        current_baking_type: null,
        start_time: null,
        time_remaining: null,
      },
      {
        oven_product_capacity_id: 2,
        status: 'IN_USE',
        current_capacity_used: 2,
        current_baking_type: 'bread',
        start_time: new Date('2024-11-14T09:00:00Z'),
        time_remaining: 30,
      },
      {
        oven_product_capacity_id: 3,
        status: 'AVAILABLE',
        current_capacity_used: 0,
        current_baking_type: null,
        start_time: null,
        time_remaining: null,
      },
      {
        oven_product_capacity_id: 4,
        status: 'IN_USE',
        current_capacity_used: 3,
        current_baking_type: 'cookies',
        start_time: new Date('2024-11-14T10:15:00Z'),
        time_remaining: 45,
      },
      {
        oven_product_capacity_id: 5,
        status: 'AVAILABLE',
        current_capacity_used: 0,
        current_baking_type: null,
        start_time: null,
        time_remaining: null,
      },
      {
        oven_product_capacity_id: 6,
        status: 'IN_USE',
        current_capacity_used: 3,
        current_baking_type: 'pizza',
        start_time: new Date('2024-11-14T11:30:00Z'),
        time_remaining: 15,
      },
      {
        oven_product_capacity_id: 7,
        status: 'AVAILABLE',
        current_capacity_used: 0,
        current_baking_type: null,
        start_time: null,
        time_remaining: null,
      },
    ],
  });

  // Seed OrderDetail
  await prisma.orderDetail.createMany({
    data: [
      { order_id: 1, product_id: 1, product_quantity: 10 },
      { order_id: 2, product_id: 3, product_quantity: 12 },
      { order_id: 3, product_id: 4, product_quantity: 10 },
      { order_id: 4, product_id: 1, product_quantity: 10 },
      { order_id: 5, product_id: 3, product_quantity: 12 },
      { order_id: 6, product_id: 4, product_quantity: 10 },
      { order_id: 7, product_id: 1, product_quantity: 10 },
      { order_id: 8, product_id: 3, product_quantity: 12 },
      { order_id: 9, product_id: 4, product_quantity: 10 },
      { order_id: 10, product_id: 4, product_quantity: 10 },
    ],
  });

  // Seed OrderDetailProcess
  await prisma.orderDetailProcess.createMany({
    data: [
      {
        oven_id: 1,
        order_detail_id: 3,
        processing_status: 'WAITING',
        order_quantity: 5,
        processing_quantity: 0,
        processed_quantity: 0,
      },
      {
        oven_id: 2,
        order_detail_id: 2,
        processing_status: 'IN_PROGRESS',
        order_quantity: 8,
        processing_quantity: 4,
        processed_quantity: 3,
      },
      {
        oven_id: 3,
        order_detail_id: 5,
        processing_status: 'COMPLETED',
        order_quantity: 7,
        processing_quantity: 7,
        processed_quantity: 7,
      },
      {
        oven_id: 4,
        order_detail_id: 6,
        processing_status: 'WAITING',
        order_quantity: 6,
        processing_quantity: 0,
        processed_quantity: 0,
      },
      {
        oven_id: 5,
        order_detail_id: 4,
        processing_status: 'IN_PROGRESS',
        order_quantity: 9,
        processing_quantity: 6,
        processed_quantity: 5,
      },
      {
        oven_id: 6,
        order_detail_id: 1,
        processing_status: 'COMPLETED',
        order_quantity: 4,
        processing_quantity: 4,
        processed_quantity: 4,
      },
      {
        oven_id: 7,
        order_detail_id: 6,
        processing_status: 'WAITING',
        order_quantity: 3,
        processing_quantity: 0,
        processed_quantity: 0,
      },
      {
        oven_id: 1,
        order_detail_id: 8,
        processing_status: 'IN_PROGRESS',
        order_quantity: 7,
        processing_quantity: 5,
        processed_quantity: 4,
      },
      {
        oven_id: 2,
        order_detail_id: 9,
        processing_status: 'COMPLETED',
        order_quantity: 8,
        processing_quantity: 8,
        processed_quantity: 8,
      },
      {
        oven_id: 3,
        order_detail_id: 10,
        processing_status: 'WAITING',
        order_quantity: 2,
        processing_quantity: 0,
        processed_quantity: 0,
      },
    ],
  });

  // Seed OrderProductTopping
  await prisma.orderProductTopping.createMany({
    data: [
      { order_detail_id: 1, topping_id: 5, quantity: 2 },
      { order_detail_id: 2, topping_id: 12, quantity: 1 },
      { order_detail_id: 3, topping_id: 8, quantity: 3 },
      { order_detail_id: 4, topping_id: 6, quantity: 1 },
      { order_detail_id: 5, topping_id: 15, quantity: 2 },
      { order_detail_id: 6, topping_id: 10, quantity: 1 },
      { order_detail_id: 7, topping_id: 22, quantity: 3 },
      { order_detail_id: 8, topping_id: 11, quantity: 2 },
      { order_detail_id: 9, topping_id: 9, quantity: 1 },
      { order_detail_id: 10, topping_id: 13, quantity: 1 },
      { order_detail_id: 2, topping_id: 7, quantity: 2 },
      { order_detail_id: 3, topping_id: 20, quantity: 1 },
      { order_detail_id: 4, topping_id: 14, quantity: 1 },
      { order_detail_id: 5, topping_id: 19, quantity: 2 },
      { order_detail_id: 6, topping_id: 16, quantity: 3 },
      { order_detail_id: 7, topping_id: 21, quantity: 2 },
      { order_detail_id: 8, topping_id: 18, quantity: 1 },
      { order_detail_id: 9, topping_id: 17, quantity: 3 },
      { order_detail_id: 10, topping_id: 23, quantity: 1 },
      { order_detail_id: 1, topping_id: 3, quantity: 2 },
      { order_detail_id: 3, topping_id: 2, quantity: 1 },
      { order_detail_id: 4, topping_id: 24, quantity: 2 },
      { order_detail_id: 5, topping_id: 25, quantity: 1 },
      { order_detail_id: 6, topping_id: 26, quantity: 3 },
      { order_detail_id: 7, topping_id: 28, quantity: 1 },
      { order_detail_id: 8, topping_id: 30, quantity: 2 },
      { order_detail_id: 9, topping_id: 29, quantity: 1 },
      { order_detail_id: 10, topping_id: 31, quantity: 1 },
    ],
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
