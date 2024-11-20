
--Tạo giá cho Topping
INSERT INTO topping (name, price) values
 ('Kiwi', 5000),
  ('Bột matcha', 5000),
  ('Mứt đào', 5000),
  ('Thịt nguội', 8000),
  ('Mứt việt quất', 5000),
  ('Việt quất', 5000),
  ('Mâm xôi', 5000),
  ('Bơ tan chảy', 5000),
  ('Sốt mayonaise', 5000),
  ('Hạt vừng', 5000),
  ('Phô mai sợi', 10000),
  ('Socola đen', 5000),
  ('Bột cacao', 5000),
  ('Bơ đậu phộng', 5000),
  ('Chuối', 10000),
  ('Nho khô', 5000),
  ('Táo tươi', 10000),
  ('Kem tươi', 5000),
  ('Mật ong', 5000),
  ('Tôm', 15000),
  ('Nghêu', 15000),
  ('Ớt chuông', 10000),
  ('Tỏi', 5000),
  ('Hành', 5000),
  ('Cà chua', 5000),
   ('Bánh oreo', 8000),
  ('Hạnh nhân lát', 8000),
  ('Dâu sấy dẻo', 10000),
  ('Dừa dợi sấy', 5000),
  ('Hạt óc chó', 5000),
  ('Sốt caramel', 10000),
  ('Dâu tây tươi', 10000),
  ('Sốt socola', 5000),
  ('Mứt trái cây', 5000)
 
 -- Tạo dữ liệu cho bảng Category
INSERT INTO Category (name) VALUES
  ('Bánh ngọt'),
  ('Bánh mặn');
  
--Của hương nè
 INSERT INTO Product (name, category_id, price, description, img_path, max_daily_quantity_limit, product_capacity_per_batch) VALUES
 ('Pizza phô mai', 2, 200000, 'Pizza phô mai nóng hổi', '/imgs/bakery-images/saltedb.png', 20, 4),
 ('Bánh tag trứng', 1, 30000, 'Bánh tag trứng thơm ngon', '/imgs/bakery-images/eggtagb.png', 50, 12),
 ('Bánh muffin', 1, 20000, 'Bánh muffin Pháp thơm ngon', '/imgs/bakery-images/muffinb.png', 50, 12),
 ('Bánh bông lan trứng muối', 2, 150000, 'Bánh bông lan trứng muối thơm ngon', '/imgs/bakery-images/saltedb.png', 10, 4),
 ('Bánh brownies', 1, 50000, 'Bánh brownies thơm ngon', '/imgs/bakery-images/browniesb.png', 50, 12),
 ('Bánh chuối', 1, 80000, 'Bánh chuối thơm ngon', '/imgs/bakery-images/bananapieb.png', 50, 12),
 ('Bánh su kem', 1, 10000, 'Bánh su kem thơm ngon', '/imgs/bakery-images/chouxb.png', 100, 24),
('Bánh cupcake', 1, 20000, 'Bánh cupcake thơm ngon', '/imgs/bakery-images/cupcakeb.png', 50, 12),
('Bánh táo', 1, 80000, 'Bánh táo Pháp thơm ngon', '/imgs/bakery-images/applepieb.png', 50, 12),
('Bánh macaron', 1, 20000, 'Bánh macaron thơm ngon', '/imgs/bakery-images/macaronb.png', 50, 24),
('Bánh cookies', 1, 20000, 'Bánh cookies thơm ngon', '/imgs/bakery-images/cookiesb.png', 50, 24),
 ('Bánh sừng bò', 1, 40000, 'Bánh sừng bò thơm ngon', '/imgs/bakery-images/croissantb.png', 100, 12),
  ('Bánh waffle', 1, 50000, 'Bánh waffle thơm ngon', '/imgs/bakery-images/waffleb.png', 50, 6),
  ('Bánh eclair', 1, 20000, 'Bánh eclair thơm ngon', '/imgs/bakery-images/eclairb.png', 50, 24),
  ('Bánh donut', 1, 30000, 'Bánh mì nướng bơ tỏi thơm lừng', '/imgs/bakery-images/donutb.png', 50, 5)
  
  insert into producttopping (product_id,topping_id) values
  (1,4),(1,20),(1,21),(1,22),(1,24),(1,25),
  (2,1),(2,3),(2,5),(2,6),(2,7),(2,12),(2,16),(2,17),(2,18),(2,19),(2,27),(2,28),(2,30),(2,32),(2,34),
  (3,1),(3,5),(3,6),(3,7),(3,10),(3,11),(3,12),(3,15),(3,16),(3,19),(3,26),(3,27),(3,29),(3,30),(3,31),(3,33),(3,34),
  (4,4),(4,9),(4,10),
  (5,1),(5,2),(5,3),(5,5),(5,6),(5,7),(5,11),(5,12),(5,13),(5,14),(5,15),(5,16),(5,18),(5,19),(5,26),(5,27),(5,28),(5,29),(5,31),(5,32),(5,33),(5,34)
  
 -- Product 6: Bánh chuối
INSERT INTO producttopping (product_id, topping_id) VALUES
    (6, 1),    -- Kiwi
    (6, 2),    -- Bột matcha
    (6, 10),   -- Hạt vừng
    (6, 16),   -- Nho khô
    (6, 20),   -- Mật ong
    (6, 27);   -- Dâu sấy dẻo

-- Product 7: Bánh su kem
INSERT INTO producttopping (product_id, topping_id) VALUES
    (7, 8),    -- Bơ tan chảy
    (7, 18),   -- Kem tươi
    (7, 19),   -- Mật ong
    (7, 25),   -- Bánh oreo
    (7, 31);   -- Sốt caramel

-- Product 8: Bánh cupcake
INSERT INTO producttopping (product_id, topping_id) VALUES
    (8, 5),    -- Mứt đào
    (8, 9),    -- Sốt mayonaise
    (8, 12),   -- Socola đen
    (8, 13),   -- Bột cacao
    (8, 18),   -- Kem tươi
    (8, 24);   -- Cà chua

-- Product 9: Bánh táo
INSERT INTO producttopping (product_id, topping_id) VALUES
    (9, 17),   -- Táo tươi
    (9, 20),   -- Tôm
    (9, 23),   -- Tỏi
    (9, 26),   -- Hạnh nhân lát
    (9, 29);   -- Dừa dợi sấy

-- Product 10: Bánh macaron
INSERT INTO producttopping (product_id, topping_id) VALUES
    (10, 3),   -- Mứt việt quất
    (10, 7),   -- Mâm xôi
    (10, 13),  -- Bột cacao
    (10, 14),  -- Bơ đậu phộng
    (10, 32);  -- Sốt socola

-- Product 11: Bánh cookies
INSERT INTO producttopping (product_id, topping_id) VALUES
    (11, 4),   -- Thịt nguội
    (11, 6),   -- Việt quất
    (11, 18),  -- Kem tươi
    (11, 22),  -- Ớt chuông
    (11, 30);  -- Hạt óc chó

-- Product 12: Bánh sừng bò
INSERT INTO producttopping (product_id, topping_id) VALUES
    (12, 2),   -- Bột matcha
    (12, 11),  -- Phô mai sợi
    (12, 21),  -- Nghêu
    (12, 28);  -- Dâu sấy dẻo

-- Product 13: Bánh waffle
INSERT INTO producttopping (product_id, topping_id) VALUES
    (13, 8),   -- Bơ tan chảy
    (13, 12),  -- Socola đen
    (13, 19),  -- Mật ong
    (13, 25),  -- Bánh oreo
    (13, 33);  -- Dâu tây tươi

-- Product 14: Bánh eclair
INSERT INTO producttopping (product_id, topping_id) VALUES
    (14, 3),   -- Mứt việt quất
    (14, 10),  -- Hạt vừng
    (14, 15),  -- Chuối
    (14, 17),  -- Táo tươi
    (14, 30);  -- Hạt óc chó

-- Product 15: Bánh donut
INSERT INTO producttopping (product_id, topping_id) VALUES
    (15, 5),   -- Mứt đào
    (15, 12),  -- Socola đen
    (15, 26),  -- Hạnh nhân lát
    (15, 29),  -- Dừa dợi sấy
    (15, 34);  -- Mứt trái cây

INSERT INTO ShippingInfo (recipient_name, street_address, district, ward, phone_number, notes, shipping_status) VALUES
    ('Nguyễn Văn Vũ', '123 Đường Lê Lợi', 'Quận 1', 'Phường Bến Nghé', '0901234567', 'Giao hàng trong giờ hành chính', 'IN_TRANSIT'),
    ('Trần Thị Bự', '456 Đường Nguyễn Huệ', 'Quận 1', 'Phường Bến Thành', '0902345678', 'Giao sau 5 giờ chiều', 'DELIVERED'),
    ('Lê Văn Cao', '789 Đường Trường Chinh', 'Quận Tân Bình', 'Phường 15', '0903456789', 'Gọi trước khi giao', 'DELIVERED'),
    ('Phạm Thị Diệp', '135 Đường Hoàng Hoa Thám', 'Quận Bình Thạnh', 'Phường 7', '0904567890', 'Giao hàng trong buổi sáng', 'IN_TRANSIT'),
    ('Đỗ Minh Em', '246 Đường Cách Mạng Tháng 8', 'Quận 3', 'Phường 11', '0905678901', 'Giao trong giờ hành chính', 'IN_TRANSIT'),
    ('Bùi Văn Pha', '357 Đường Điện Biên Phủ', 'Quận Bình Thạnh', 'Phường 25', '0906789012', 'Không gọi khi giao hàng', 'DELIVERED'),
    ('Vũ Thị Gióng', '468 Đường Hai Bà Trưng', 'Quận 3', 'Phường 6', '0907890123', 'Giao hàng sau 6 giờ chiều', 'IN_TRANSIT'),
    ('Ngô Văn Huy', '579 Đường Nguyễn Trãi', 'Quận 5', 'Phường 8', '0908901234', 'Gọi điện trước khi giao', 'IN_TRANSIT'),
    ('Trịnh Thị Ý', '680 Đường Võ Văn Kiệt', 'Quận 1', 'Phường Cô Giang', '0909012345', 'Giao hàng trong buổi chiều', 'DELIVERED'),
    ('Lâm Văn Châu', '791 Đường Phan Xích Long', 'Quận Phú Nhuận', 'Phường 2', '0910123456', 'Giao trong giờ hành chính', 'DELIVERED'),

    ('Đặng Văn Kha', '12 Đường Cộng Hòa', 'Quận Tân Bình', 'Phường 4', '0901123456', 'Giao buổi sáng', 'IN_TRANSIT'),
    ('Nguyễn Thị Lan', '34 Đường Nguyễn Văn Trỗi', 'Quận Phú Nhuận', 'Phường 10', '0902123456', 'Giao hàng trong giờ hành chính', 'DELIVERED'),
    ('Lý Văn Minh', '56 Đường Võ Thị Sáu', 'Quận 3', 'Phường Tân Định', '0903123456', 'Không gọi khi giao hàng', 'IN_TRANSIT'),
    ('Lê Thị Ngọc', '78 Đường Nguyễn Kiệm', 'Quận Gò Vấp', 'Phường 3', '0904123456', 'Giao trước 5 giờ chiều', 'DELIVERED'),
    ('Phan Văn O', '90 Đường Lạc Long Quân', 'Quận 11', 'Phường 5', '0905123456', 'Gọi trước khi giao', 'IN_TRANSIT'),
    ('Hà Thị Phương', '11 Đường Tân Sơn Nhì', 'Quận Tân Phú', 'Phường 2', '0906123456', 'Giao trong giờ hành chính', 'DELIVERED'),
    ('Bùi Văn Quyết', '13 Đường Quang Trung', 'Quận Gò Vấp', 'Phường 8', '0907123456', 'Không gọi trước', 'IN_TRANSIT'),
    ('Trịnh Văn Rượu', '15 Đường Đinh Tiên Hoàng', 'Quận 1', 'Phường Đa Kao', '0908123456', 'Giao hàng trong buổi sáng', 'DELIVERED'),
    ('Nguyễn Thị Sâm', '17 Đường Phạm Văn Đồng', 'Quận Thủ Đức', 'Phường Linh Đông', '0909123456', 'Gọi trước khi giao', 'IN_TRANSIT'),
    ('Đoàn Văn Tùng', '19 Đường Bình Long', 'Quận Bình Tân', 'Phường Bình Hưng Hòa', '0910123456', 'Giao hàng buổi tối', 'IN_TRANSIT'),

    ('Phạm Văn Uy', '21 Đường Nguyễn Xí', 'Quận Bình Thạnh', 'Phường 13', '0911123456', 'Giao hàng vào cuối tuần', 'DELIVERED'),
    ('Trần Thị Vũ', '23 Đường Điện Biên Phủ', 'Quận Bình Thạnh', 'Phường 25', '0912123456', 'Gọi trước khi giao', 'IN_TRANSIT'),
    ('Lê Thị Quyên', '25 Đường Hoàng Văn Thụ', 'Quận Tân Bình', 'Phường 4', '0913123456', 'Giao hàng trong giờ hành chính', 'DELIVERED'),
    ('Lý Văn Xug', '27 Đường Cộng Hòa', 'Quận Tân Bình', 'Phường 12', '0914123456', 'Gọi trước khi giao', 'IN_TRANSIT'),
    ('Nguyễn Thị Yên', '29 Đường Nguyễn Hữu Thọ', 'Quận 7', 'Phường Tân Hưng', '0915123456', 'Giao hàng buổi chiều', 'DELIVERED'),
    ('Bùi Văn Viết', '31 Đường Nguyễn Hữu Thọ', 'Quận 7', 'Phường Tân Phong', '0916123456', 'Không gọi trước', 'IN_TRANSIT'),
    ('Trần Văn Á', '33 Đường Nguyễn Văn Linh', 'Quận 7', 'Phường Tân Thuận', '0917123456', 'Giao sau 5 giờ chiều', 'DELIVERED'),
    ('Nguyễn Thị Bưởi', '35 Đường Quốc Lộ 1A', 'Quận Bình Tân', 'Phường An Lạc', '0918123456', 'Gọi trước khi giao', 'IN_TRANSIT'),
    ('Phạm Văn Cao', '37 Đường Xa Lộ Hà Nội', 'Quận 9', 'Phường Hiệp Phú', '0919123456', 'Giao trong giờ hành chính', 'IN_TRANSIT'),
    ('Lê Thị Dung', '39 Đường Mai Chí Thọ', 'Quận 2', 'Phường Thạnh Mỹ Lợi', '0920123456', 'Giao hàng buổi sáng', 'DELIVERED');
