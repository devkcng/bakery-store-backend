INSERT INTO
  "Category" (id, name)
VALUES
  (1, 'Bánh ngọt'),
  (2, 'Bánh mặn');

-- Tạo dữ liệu cho bảng WareHouse
INSERT INTO
  "WareHouse" (id, name, quantity, unit)
VALUES
  (1, 'Bột mì', 100.0, 'kg'),
  (2, 'Đường', 50.0, 'kg'),
  (3, 'Sữa tươi', 100.0, 'l'),
  (4, 'Bơ thực vật', 20.0, 'kg'),
  (5, 'Sữa đặc', 50.0, 'l'),
  (6, 'Trứng gà', 1000.0, 'quả'),
  (7, 'Bột nở', 50.0, 'kg'),
  (8, 'Bơ nhạt', 20.0, 'kg'),
  (9, 'Men', 20.0, 'kg'),
  (10, 'Bột bắp', 30.0, 'kg'),
  (11, 'Socola đen', 100.0, 'kg'),
  (12, 'Bột cacao', 10.0, 'kg'),
  (13, 'Bơ đậu phộng', 10.0, 'kg'),
  (14, 'Chuối', 20.0, 'kg'),
  (15, 'Nho khô', 10.0, 'kg'),
  (16, 'Táo tươi', 20.0, 'kg'),
  (17, 'Bột baking powder', 10.0, 'kg'),
  (18, 'Bột mì', 100.0, 'kg'),
  (19, 'Cà phê', 5.0, 'kg'),
  (20, 'Kem tươi', 100.0, 'kg'),
  (21, 'Mật ong', 100.0, 'kg'),
  (22, 'Tinh chất vani', 5.0, 'kg'),
  (23, 'Muối', 50.0, 'kg'),
  (24, 'Chanh', 1.0, 'kg'),
  (25, 'Dầu ăn', 100.0, 'l'),
  (26, 'Tôm', 20.0, 'kg'),
  (27, 'Nghêu', 10.0, 'kg'),
  (28, 'Ớt chuông', 10.0, 'kg'),
  (29, 'Tỏi', 3.0, 'kg'),
  (30, 'Hành', 2.0, 'kg'),
  (31, 'Cà chua', 10.0, 'kg'),
  (32, 'Tương cà', 3.0, 'kg'),
  (33, 'Dầu oliu', 3.0, 'kg'),
  (34, 'Phô mai', 3.0, 'kg');

-- Tạo dữ liệu cho bảng Product
-- Sản phẩm thuộc Category 'Bánh ngọt'
INSERT INTO
  "Product" (
    id,
    name,
    category_id,
    price,
    description,
    img_path,
    max_daily_quantity_limit,
    product_capacity_per_batch
  )
VALUES
  (
    1,
    'Pizza hải sản',
    2,
    200000,
    'Pizza hải sản nóng hổi',
    '/imgs/bakery-images/pizzab.png',
    20,
    4
  ),
  (
    2,
    'Bánh tag trứng',
    1,
    30000,
    'Bánh tag trứng thơm ngon',
    '/imgs/bakery-images/eggtagb.png',
    50,
    12
  ),
  (
    3,
    'Bánh muffin',
    1,
    20000,
    'Bánh muffin thơm ngon',
    '/imgs/bakery-images/muffinb.png',
    50,
    12
  ),
  (
    4,
    'Bánh bông lan trứng muối',
    2,
    150000,
    'Bánh bông lan trứng muối thơm ngon',
    '/imgs/bakery-images/saltedb.png',
    10,
    4
  ),
  (
    5,
    'Bánh brownies',
    1,
    50000,
    'Bánh brownies thơm ngon',
    '/imgs/bakery-images/browniesb.png',
    50,
    12
  ),
  (
    6,
    'Bánh chuối',
    1,
    80000,
    'Bánh chuối thơm ngon',
    '/imgs/bakery-images/bananapieb.png',
    50,
    12
  ),
  (
    7,
    'Bánh su kem',
    1,
    10000,
    'Bánh su kem thơm ngon',
    '/imgs/bakery-images/chouxb.png',
    100,
    24
  ),
  (
    8,
    'Bánh cupcake',
    1,
    20000,
    'Bánh cupcake thơm ngon',
    '/imgs/bakery-images/cupcakeb.png',
    50,
    12
  ),
  (
    9,
    'Bánh táo',
    1,
    80000,
    'Bánh táo Pháp thơm ngon',
    '/imgs/bakery-images/applepieb.png',
    50,
    12
  ),
  (
    10,
    'Bánh macaron',
    1,
    20000,
    'Bánh macaron thơm ngon',
    '/imgs/bakery-images/macaronb.png',
    50,
    24
  ),
  (
    11,
    'Bánh cookies',
    1,
    20000,
    'Bánh cookies thơm ngon',
    '/imgs/bakery-images/cookiesb.png',
    50,
    24
  ),
  (
    12,
    'Bánh sừng bò',
    1,
    40000,
    'Bánh sừng bò thơm ngon',
    '/imgs/bakery-images/croissantb.png',
    100,
    12
  ),
  (
    13,
    'Bánh waffle',
    1,
    50000,
    'Bánh waffle thơm ngon',
    '/imgs/bakery-images/waffleb.png',
    50,
    6
  ),
  (
    14,
    'Bánh eclair',
    1,
    20000,
    'Bánh eclair thơm ngon',
    '/imgs/bakery-images/eclairb.png',
    50,
    24
  ),
  (
    15,
    'Bánh donut',
    1,
    30000,
    'Bánh mì nướng bơ tỏi thơm lừng',
    '/imgs/bakery-images/donutb.png',
    50,
    5
  );

-- Tạo dữ liệu cho bảng Recipe
-- Công thức cho Bánh sừng bò và Bánh mì nướng bơ tỏi
INSERT INTO
  "Recipe" (id, name, product_id, complete_time)
VALUES
  (1, 'Công thức Pizza hải sản', 1, 180),
  (2, 'Công thức Bánh tag trứng', 2, 120),
  (3, 'Công thức Bánh muffin', 3, 70),
  (4, 'Công thức Bánh bông lan trứng muối', 4, 75),
  (5, 'Công thức Bánh brownies', 5, 75),
  (6, 'Công thức Bánh chuối', 6, 120),
  (7, 'Công thức Bánh su kem', 7, 80),
  (8, 'Công thức Bánh cupcake', 8, 50),
  (9, 'Công thức Bánh táo', 9, 65),
  (10, 'Công thức Bánh macaron', 10, 100),
  (11, 'Công thức Bánh cookies', 11, 40),
  (12, 'Công thức Bánh sừng bò', 12, 540),
  (13, 'Công thức Bánh waffle', 13, 30),
  (14, 'Công thức Bánh eclair', 14, 45),
  (15, 'Công thức Bánh donut', 15, 900);

-- Tạo dữ liệu cho bảng RecipeDetail
-- Bánh pizza
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 400, 1), -- 400g Bột mì
  (9, 200, 1), -- 200g Men
  (34, 10, 1), -- 10g Phô mai (assuming phô mai has warehouse_id 31)
  (26, 200, 1), -- 200g Tôm
  (27, 200, 1), -- 200g Nghêu
  (29, 5, 1), -- 5g Tỏi
  (30, 5, 1), -- 5g Hành
  (2, 20, 1), -- 20g Đường
  (32, 800, 1), -- 800g Cà chua
  (33, 10, 1), -- 10g Tương cà
  (22, 5, 1), -- 5g Mật ong
  (33, 20, 1), -- 20g Dầu ô liu (assuming dầu ô liu has warehouse_id 25)
  (28, 5, 1), -- 5g Ớt chuông
  (33, 90, 1), -- 90ml Tương cà ketchup (same warehouse_id as tương cà)
  (24, 1, 1);

-- 1g Muối
-- Bánh egg tag
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 400, 2), -- 400g Bột mì đa dụng
  (4, 200, 2), -- 200g Bơ thực vật loại hơi mặn
  (6, 2, 2), -- 2 lòng đỏ Trứng gà 
  (6, 3, 2), -- 3 quả Trứng gà
  (5, 60, 2), -- 60ml Sữa đặc
  (3, 200, 2), -- 200ml Sữa tươi không đường
  (23, 5, 2), -- 5g Tinh chất vani
  (2, 10, 2);

-- 10g Đường
-- Bánh muffin
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 300, 3), -- 300g Bột mì đa dụng
  (7, 10, 3), -- 10g Bột nở
  (23, 10, 3), -- 10g Chiết xuất vani
  (6, 2, 3), -- 2 quả Trứng gà
  (3, 150, 3), -- 150g Sữa tươi
  (8, 50, 3), -- 50g Bơ nhạt
  (25, 40, 3), -- 40g Dầu ăn
  (24, 1, 3), -- 1 nhúm Muối tinh (1g for approximation)
  (15, 10, 3);

-- 10g Nho khô
-- Pizza bông lan
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (6, 12, 4), -- 12 quả Trứng muối
  (6, 3, 4), -- 3 quả Trứng gà
  (1, 50, 4), -- 50g Bột mì đa dụng
  (10, 20, 4), -- 20g Bột bắp
  (3, 40, 4), -- 40g Sữa tươi không đường
  (31, 10, 4), --  Phô mai
  (25, 25, 4), -- 25g Dầu ăn
  (8, 20, 4), -- 20g Bơ lạt (unsalted butter)
  (2, 70, 4), -- 70g Đường
  (23, 1, 4), -- 1 ống Vani (assuming 1 tube ~ 1g)
  (24, 0.5, 4), -- ½ muỗng cà phê Muối (0.5g approximation)
  (26, 0.5, 4);

-- ½ miếng Chanh (assuming 0.5g or adjust as needed
-- Pizza bronies
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 75, 5), -- 75g Bột mì đa dụng
  (8, 150, 5), -- 150g Bơ lạt (unsalted butter)
  (11, 250, 5), -- 250g Socola đen
  (6, 4, 5), -- 4 quả Trứng gà
  (12, 35, 5), -- 35g Bột cacao
  (13, 10, 5), -- 10g Bơ đậu phộng
  (2, 200, 5), -- 200g Đường nâu
  (23, 5, 5), -- 5g Tinh chất vani
  (24, 2, 5);

-- 2g Muối
-- bánh Chuối
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (14, 900, 6), -- 900g Chuối
  (1, 300, 6), -- 300g Bột mì số 11
  (6, 135, 6), -- 135g Trứng gà 
  (3, 150, 6), -- 150g Sữa tươi không đường
  (15, 10, 6), -- Một ít Nho khô
  (2, 250, 6), -- 250g Đường cát trắng
  (23, 4, 6), -- 3-5g Vani nước 
  (8, 50, 6), -- 50g Bơ lạt 
  (25, 50, 6), -- 50g Dầu ăn
  (18, 5, 6);

-- 5g Baking soda
-- bánh sukem
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (3, 200, 7), -- 200ml Sữa tươi
  (1, 100, 7), -- 100g Bột mì đa dụng
  (8, 90, 7), -- 90g Bơ lạt
  (6, 3, 7), -- 3 quả Trứng gà
  (2, 35, 7), -- 35g Đường
  (10, 20, 7), -- 20g Bột bắp
  (8, 10, 7), -- 10g Bơ lạt 
  (23, 2.5, 7), -- 1/2 muỗng cà phê Vani 
  (24, 0.5, 7);

-- 1 chút Muối (0.5g as an approximation)
--bánh cupcake
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 80, 8), -- 80g Bột mì đa dụng
  (7, 3.3, 8), -- ⅔ thìa cà phê Bột nở
  (3, 60, 8), -- 60ml Sữa tươi không đường
  (6, 1, 8), -- 1 quả Trứng gà to
  (24, 1, 8), -- 1 thìa cà phê Nước cốt chanh 
  (24, 0.5, 8), -- Muối trắng 
  (8, 55, 8), -- 55g Bơ nhạt
  (2, 50, 8), -- 50g Đường trắng
  (23, 5, 8);

-- 1 thìa cà phê Vani (approx. 5g)
-- bánh táo
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (20, 100, 9), -- 3 quả Táo tươi 
  (1, 220, 9), -- 220g Bột mì số  
  (18, 4.5, 9), -- 4.5g Bột baking powder
  (6, 3, 9), -- 3 quả Trứng gà
  (3, 90, 9), -- 90ml Sữa tươi
  (8, 60, 9), -- 60g Bơ lạt
  (25, 60, 9), -- 60g Dầu ăn
  (2, 90, 9), -- 90g Đường nâu
  (23, 5, 9);

-- Tinh chất vani (approx. 5g)
-- bánh macaron
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (17, 120, 10), -- 120g Bột hạnh nhân
  (2, 200, 10), -- 200g Đường bột
  (6, 90, 10), -- 90g Lòng trắng trứng (approx. 3 eggs)
  (2, 50, 10), -- 50g Đường cát
  (23, 2.5, 10), -- 1/2 muỗng cà phê Tinh chất vani (approx. 2.5g)
  (30, 0, 10), -- Màu thực phẩm (typically, you would have a custom entry for this)
  (22, 150, 10);

-- 150g Kem tươi (whipping cream)
-- bánh cookies
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 200, 11), -- 200g Bột mì đa dụng
  (8, 115, 11), -- 115g Bơ lạt
  (6, 1, 11), -- 1 quả Trứng gà
  (18, 0.25, 11), -- 0.25g Bột baking soda (approx. 1/4 tsp)
  (11, 100, 11), -- 100g Socola cắt nhỏ
  (17, 50, 11), -- 50g Hạt hạnh nhân (or hạt điều, hạt óc chó)
  (19, 0.5, 11), -- 0.5g Bột quế
  (15, 50, 11), -- 50g Nho khô (or cranberry khô)
  (2, 100, 11), -- 100g Đường nâu
  (2, 50, 11), -- 50g Đường trắng
  (24, 1.5, 11), -- 1.5g Muối
  (23, 5, 11);

-- 5g Tinh chất vani
-- bánh sừng bò
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (9, 13.5, 12), -- 13.5g Men nở khô
  (3, 500, 12), -- 500ml Sữa tươi
  (8, 56, 12), -- 56g Bơ đun chảy
  (1, 680, 12), -- 680g Bột mì đa dụng
  (6, 50, 12), -- 50g Trứng gà (approximately 1-2 eggs)
  (8, 454, 12), -- 454g Bơ lạt
  (23, 20, 12), -- 20ml Nước cốt chanh
  (23, 20, 12), -- 20g Nước cốt chanh (same ingredient, different unit)
  (24, 10, 12), -- 10g Muối
  (2, 50, 12);

-- 50g Đường trắng
-- bánh waffle
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 140, 13), -- 140g Bột làm bánh 
  (6, 3, 13), -- 3 quả Trứng gà
  (8, 120, 13), -- 120g Bơ
  (23, 5, 13), -- 5g Vani
  (24, 0.5, 13), -- 0.5g Muối
  (2, 110, 13), -- 110g Đường cát trắng
  (2, 5, 13);

-- 5g Đường bột
-- bánh eclair
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 100, 14), -- 100g Bột mì
  (8, 70, 14), -- 70g Bơ lạt
  (3, 280, 14), -- 280ml Sữa tươi
  (6, 4, 14), -- 4 quả Trứng gà
  (22, 150, 14), -- 150g Kem tươi
  (10, 12, 14), -- 12g Bột ngô (cornstarch)
  (2, 45, 14), -- 45g Đường
  (24, 0.5, 14), -- 0.5g Muối
  (23, 2, 14);

-- 2g Hương vị vani
-- bánh donut
INSERT INTO
  "RecipeDetail" (warehouse_id, quantity, recipe_id)
VALUES
  (1, 530, 15), -- 530g Bột mì
  (12, 40, 15), -- 40g Bột cacao
  (8, 170, 15), -- 170g Bơ lạt
  (2, 560, 15), -- 560g Đường bột
  (9, 128, 15), -- 128g Men
  (21, 80, 15), -- 80g Mật ong
  (6, 200, 15), -- 4 quả Trứng gà (approx. 200g)
  (3, 275, 15), -- 275g Sữa tươi không đường
  (23, 5, 15), -- 5g Tinh chất vani
  (24, 1, 15);

-- 1g Muối
-- Tạo dữ liệu cho bảng Order
--INSERT INTO "Order" (total_amount, order_status, order_date) VALUES
--  (60000, 'PENDING', NOW()),
--  (45000, 'COMPLETED', NOW()),
--  (30000, 'CANCELED', NOW());
--
-- Tạo dữ liệu cho bảng OrderDetail
--INSERT INTO "OrderDetail" (order_id, product_id, product_quantity) VALUES
--  (1, 1, 10),
--  (2, 3, 12),  
--  (3, 4, 10); 
--
-- Tạo dữ liệu cho bảng Transaction
--INSERT INTO "Transaction" (payment_method, status, amount, order_id) VALUES
--  ('BANK_TRANSFER', 'SUCCESS', 60000, 1),
--  ('E_WALLET', 'SUCCESS', 45000, 2);
INSERT INTO
  "Topping" (id, name, price)
VALUES
  (1, 'Kiwi', 5000),
  (2, 'Bột matcha', 5000),
  (3, 'Mứt đào', 5000),
  (4, 'Thịt nguội', 8000),
  (5, 'Mứt việt quất', 5000),
  (6, 'Việt quất', 5000),
  (7, 'Mâm xôi', 5000),
  (8, 'Bơ tan chảy', 5000),
  (9, 'Sốt mayonaise', 5000),
  (10, 'Hạt vừng', 5000),
  (11, 'Phô mai sợi', 10000),
  (12, 'Socola đen', 5000),
  (13, 'Bột cacao', 5000),
  (14, 'Bơ đậu phộng', 5000),
  (15, 'Chuối', 10000),
  (16, 'Nho khô', 5000),
  (17, 'Táo tươi', 10000),
  (18, 'Kem tươi', 5000),
  (19, 'Mật ong', 5000),
  (20, 'Tôm', 15000),
  (21, 'Nghêu', 15000),
  (22, 'Ớt chuông', 10000),
  (23, 'Tỏi', 5000),
  (24, 'Hành', 5000),
  (25, 'Cà chua', 5000),
  (26, 'Bánh oreo', 8000),
  (27, 'Hạnh nhân lát', 8000),
  (28, 'Dâu sấy dẻo', 10000),
  (29, 'Dừa dợi sấy', 5000),
  (30, 'Hạt óc chó', 5000),
  (31, 'Sốt caramel', 10000),
  (32, 'Dâu tây tươi', 10000),
  (33, 'Sốt socola', 5000),
  (34, 'Mứt trái cây', 5000);

insert into
  "ProductTopping" (product_id, topping_id)
values
  (1, 4),
  (1, 20),
  (1, 21),
  (1, 22),
  (1, 24),
  (1, 25),
  (2, 1),
  (2, 3),
  (2, 5),
  (2, 6),
  (2, 7),
  (2, 12),
  (2, 16),
  (3, 1),
  (3, 5),
  (3, 6),
  (3, 7),
  (3, 10),
  (3, 11),
  (3, 12),
  (4, 4),
  (4, 9),
  (4, 10),
  (5, 1),
  (5, 2),
  (5, 3),
  (5, 5),
  (5, 6),
  (5, 7),
  (5, 11)
  -- Product 6: Bánh chuối
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (6, 1), -- Kiwi
  (6, 2), -- Bột matcha
  (6, 10), -- Hạt vừng
  (6, 16), -- Nho khô
  (6, 20), -- Mật ong
  (6, 27);

-- Dâu sấy dẻo
-- Product 7: Bánh su kem
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (7, 8), -- Bơ tan chảy
  (7, 18), -- Kem tươi
  (7, 19), -- Mật ong
  (7, 25), -- Bánh oreo
  (7, 31);

-- Sốt caramel
-- Product 8: Bánh cupcake
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (8, 5), -- Mứt đào
  (8, 9), -- Sốt mayonaise
  (8, 12), -- Socola đen
  (8, 13), -- Bột cacao
  (8, 18), -- Kem tươi
  (8, 24);

-- Cà chua
-- Product 9: Bánh táo
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (9, 17), -- Táo tươi
  (9, 20), -- Tôm
  (9, 23), -- Tỏi
  (9, 26), -- Hạnh nhân lát
  (9, 29);

-- Dừa dợi sấy
-- Product 10: Bánh macaron
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (10, 3), -- Mứt việt quất
  (10, 7), -- Mâm xôi
  (10, 13), -- Bột cacao
  (10, 14), -- Bơ đậu phộng
  (10, 32);

-- Sốt socola
-- Product 11: Bánh cookies
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (11, 4), -- Thịt nguội
  (11, 6), -- Việt quất
  (11, 18), -- Kem tươi
  (11, 22), -- Ớt chuông
  (11, 30);

-- Hạt óc chó
-- Product 12: Bánh sừng bò
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (12, 2), -- Bột matcha
  (12, 11), -- Phô mai sợi
  (12, 21), -- Nghêu
  (12, 28);

-- Dâu sấy dẻo
-- Product 13: Bánh waffle
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (13, 8), -- Bơ tan chảy
  (13, 12), -- Socola đen
  (13, 19), -- Mật ong
  (13, 25), -- Bánh oreo
  (13, 33);

-- Dâu tây tươi
-- Product 14: Bánh eclair
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (14, 3), -- Mứt việt quất
  (14, 10), -- Hạt vừng
  (14, 15), -- Chuối
  (14, 17), -- Táo tươi
  (14, 30);

-- Hạt óc chó
-- Product 15: Bánh donut
INSERT INTO
  "ProductTopping" (product_id, topping_id)
VALUES
  (15, 5), -- Mứt đào
  (15, 12), -- Socola đen
  (15, 26), -- Hạnh nhân lát
  (15, 29), -- Dừa dợi sấy
  (15, 34);

-- Mứt trái cây
--INSERT INTO "ShippingInfo" (id,recipient_name, street_address, district, ward, phone_number, notes, shipping_status) VALUES
--    (1,'Nguyễn Văn Vũ', '123 Đường Lê Lợi', 'Quận 1', 'Phường Bến Nghé', '0901234567', 'Giao hàng trong giờ hành chính', 'IN_TRANSIT'),
--    (2,'Trần Thị Bự', '456 Đường Nguyễn Huệ', 'Quận 1', 'Phường Bến Thành', '0902345678', 'Giao sau 5 giờ chiều', 'DELIVERED'),
--    (3,'Lê Văn Cao', '789 Đường Trường Chinh', 'Quận Tân Bình', 'Phường 15', '0903456789', 'Gọi trước khi giao', 'DELIVERED'),
--    (4,'Phạm Thị Diệp', '135 Đường Hoàng Hoa Thám', 'Quận Bình Thạnh', 'Phường 7', '0904567890', 'Giao hàng trong buổi sáng', 'IN_TRANSIT'),
--    (5,'Đỗ Minh Em', '246 Đường Cách Mạng Tháng 8', 'Quận 3', 'Phường 11', '0905678901', 'Giao trong giờ hành chính', 'IN_TRANSIT'),
--    (6,'Bùi Văn Pha', '357 Đường Điện Biên Phủ', 'Quận Bình Thạnh', 'Phường 25', '0906789012', 'Không gọi khi giao hàng', 'DELIVERED'),
--    (7,'Vũ Thị Gióng', '468 Đường Hai Bà Trưng', 'Quận 3', 'Phường 6', '0907890123', 'Giao hàng sau 6 giờ chiều', 'IN_TRANSIT'),
--    (8,'Ngô Văn Huy', '579 Đường Nguyễn Trãi', 'Quận 5', 'Phường 8', '0908901234', 'Gọi điện trước khi giao', 'IN_TRANSIT'),
--    (9,'Trịnh Thị Ý', '680 Đường Võ Văn Kiệt', 'Quận 1', 'Phường Cô Giang', '0909012345', 'Giao hàng trong buổi chiều', 'DELIVERED'),
--    (10,'Lâm Văn Châu', '791 Đường Phan Xích Long', 'Quận Phú Nhuận', 'Phường 2', '0910123456', 'Giao trong giờ hành chính', 'DELIVERED')