-- Tạo dữ liệu cho bảng Category
INSERT INTO Category (name) VALUES
  ('Bánh ngọt'),
  ('Bánh mặn');

-- Tạo dữ liệu cho bảng WareHouse
INSERT INTO WareHouse (name, quantity, unit) VALUES
  ('Bột mì', 100.0, 'kg'),
  ('Đường', 50.0, 'kg'),
  ('Sữa tươi', 100.0, 'l'),
  ('Bơ thực vật', 20.0, 'kg'),
  ('Sữa đặc', 50.0, 'l'),
  ('Trứng gà', 1000.0, 'quả'),
  ('Bột nở', 50.0, 'kg'),
  ('Bơ nhạt', 20.0, 'kg'),
  ('Men', 20.0, 'kg'),
  ('Bột bắp', 30.0, 'kg'),
  ('Socola đen', 100.0, 'kg'),
  ('Bột cacao', 10.0, 'kg'),
  ('Bơ đậu phộng', 10.0, 'kg'),
  ('Chuối', 20.0, 'kg'),
  ('Nho khô', 10.0, 'kg'),
  ('Táo tươi', 20.0, 'kg'),
  ('Bột baking powder', 10.0, 'kg'),
  ('Bột mì', 100.0, 'kg'),
  ('Cà phê', 5.0, 'kg'),
  ('Kem tươi', 100.0, 'kg'),
  ('Mật ong', 100.0, 'kg'),
  ('Tinh chất vani', 5.0, 'kg'),
  ('Muối', 50.0, 'kg'),
  ('Chanh', 1.0, 'kg'),
  ('Dầu ăn', 100.0, 'l'),
  ('Tôm', 20.0, 'kg'),
  ('Nghêu', 10.0, 'kg'),
  ('Ớt chuông', 10.0, 'kg'),
  ('Tỏi', 3.0, 'kg'),
  ('Hành', 2.0, 'kg'),
  ('Cà chua', 10.0, 'kg'),
  ('Tương cà', 3.0, 'kg'),
  ('Dầu oliu', 3.0, 'kg'),
  ('Phô mai', 3.0, 'kg');
  
-- Tạo dữ liệu cho bảng Product
-- Sản phẩm thuộc Category 'Bánh ngọt'
INSERT INTO Product (name, category_id, price, description, img_path, max_daily_quantity_limit, product_capacity_per_batch) VALUES
 ('Pizza hải sản', 2, 200000, 'Pizza hải sản nóng hổi', '/imgs/bakery-images/pizzab.png', 20, 4),
 ('Bánh tag trứng', 1, 30000, 'Bánh tag trứng thơm ngon', '/imgs/bakery-images/eggtagb.png', 50, 12),
 ('Bánh muffin', 1, 20000, 'Bánh muffin thơm ngon', '/imgs/bakery-images/muffinb.png', 50, 12),
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
  ('Bánh donut', 1, 30000, 'Bánh mì nướng bơ tỏi thơm lừng', '/imgs/bakery-images/donutb.png', 50, 5);	   

-- Tạo dữ liệu cho bảng Recipe
-- Công thức cho Bánh sừng bò và Bánh mì nướng bơ tỏi
INSERT INTO Recipe (name, product_id, complete_time) VALUES
 ('Bước 1: Làm sốt cà chua
1.Luộc cà chua trong 5 phút sau đó lột vỏ, băm nhỏ hành tây tỏi,	
2.Phi hành tỏi, cho cà chua, đường muối, tương cà rồi khuấy đều cho đến khi sệt lại trong khoảng 10p
	Bước 2: Làm đế pizza
1.Cho nước, men, mật ong, dầu oliu, rây hết bột mì và nhào tất cả, ủ trong 2 tiếng
2.	Nặn thành hình tròn bán kính 9, 7, 12 tương đương nhỏ vừa lớn
	Bước 3:  cho đế vào lò nướng nhiệt độ 230 -250, quét sốt cà chua và cho tất cả nhân vào và nướng trong 10p ',
     1, 180),
 ('Bước 1:Làm phần vỏ bánh
1.Cho bột mì, bơ thực vật nhào mịn và để trong ngăn đá tủ lạnh khoảng 15 phút. Cho nốt chỗ bột mì còn lại vào trộn đều cùng đường, lòng đỏ trứng gà và 150ml nước. 
2.Nhào bột thật mịn rồi cán mỏng miếng bột thành hình chữ nhật,  lấy phần bột trong tủ lạnh cho vào chính giữa miếng bột, cán nhẹ nhàng. Gấp bột làm 3 rồi bọc màng bọc thực phẩm cho vào ngăn đá 15 phút.
3.Bột sau khi đã nghỉ khoảng 15 phút trong tủ lạnh, đem cán mỏng rồi gấp lại làm 3, cho vào ngăn đá tủ lạnh 15 phút. Lặp đi lặp lại khoảng 4-5 lần để được lớp vỏ bánh nhiều lớp rất đẹp.
4.Lần cán bột cuối cùng bạn chỉ làm mỏng khoảng 3mm rồi dùng khuôn cắt tạo thành những miếng tròn và lót bột vào khuôn nướng. 

	Bước 2 Làm nhân bánh
1.Cho sữa đặc và sữa tươi không đường khuấy đều cho sữa đặc tan rồi cho vào lò vi sóng quay trong khoảng 3 phút.
2. Đánh tan trứng, cho thêm một chút vani đánh cùng cho thơm, đổ trứng vào bát sữa nóng, khuấy nhanh và đều tay.
	Bước 3 Nướng bánh
1.  Bật lò nướng ở nhiệt độ 200 độ C trong khoảng 10 phút cho lò nóng đều. Từ từ rót phần nhân trứng sữa vào từng khuôn bánh rồi đặt khay vào lò nướng.
2.  Nướng bánh khoảng 20 phút khi thấy vỏ bánh chín vàng đều. Cuối cùng lấy bánh bày ra đĩa và trang trí.',
2, 120),
 ('1.Bật nóng lò nướng. Cho khay thiếc muffin có lót sẵn cốc giấy vào
2.Bơ nhạt đun cách thủy cho tan chảy, để nguội.
3.Rây bột mì, bột nở, muối vào chung một bát. Trộn đều chúng
4.Đập trứng gà, sữa tươi, vani, dầu ăn vào chung một bát. Đánh cho tan đều.
5.Thêm từ từ bơ đã nguội vào hỗn hợp. Trộn đều cho hòa quyện
6.Thêm từ từ bột khô vào hỗn hợp ướt. Lúc này, thêm nho khô vào trộn đều nhé
Chia bột vào từng khuôn. Đem nướng ở 180 độ trong 20 phút', 
3, 70),
 ('+ Làm cốt bánh
1.Cho lòng đỏ vào 1 bát lớn, thêm đường, dầu ăn, sữa tươi vào rồi trộn 
2.Cho bột mì đã rây vào hỗn hợp trộn đều. Dùng tay hoặc máy đánh trứng trong vòng 5-7 phút,cho vỏ chanh bào vào 
3.Dùng máy đánh trứng đánh lòng trắng trong vòng 1 phút, cho 40gr đường và tăng tốc độ máy đánh đến khi lòng trắng trứng cứng lại như bông.
4.Cho hỗn hợp lòng trắng vào hỗn hợp lòng đỏ trứng và trộn nhẹ tay.
5.Cho bột vào 2/3  khuôn bánh, đặt lòng đỏ trứng muối lên mặt bánh nướng trong khoảng 30-35 phút
	+ Làm sốt bánh
1. Cho lòng đỏ trứng gà, đường và muối trộn đều cho hỗn hợp hòa quyện lại với nhau. Tiếp theo cho bột ngô vào đánh đều, cuối cùng cho nước và bơ lạt đã đun chảy vào hỗn hợp và trộn đều
2.  Lọc hỗn hợp sốt qua rây vào nồi rồi bắc lên bếp để lửa nhỏ, khuấy đều cho đến khi hỗn hợp sệt lại.
		
	+ Làm bánh và trang trí: Cốt bánh sau khi đã lấy ra khỏi khuôn để nguội, phết sốt kem đã làm lên bánh rồi cho thêm chà bông, phô mai, sốt lên mặt trên trang trí tùy theo sở thích.',
     4,75),
 ('1.Đun chảy socola và bơ
2.Đánh bông đường và trứng trong khoảng 3 phút , đổ hỗn hợp socola chảy vào hỗn hợp trứng đồng thời cho vani và muối vào tiếp tục đánh nhẹ 
3.Đổ chung bột cacao và bột mì rây mịn, đổ từ từ vào hỗn hợp socola trên. Dùng phới trộn đều hỗn hợp tới khi không còn bột khô.
4.Đổ bột vào khuôn
5.Bật lò nướng ở nhiệt độ 175-180 độ C trước 15 phút. Cho bánh vào lò nướng trong khoảng 20-25 phút. ', 
5, 75),
 ('1.Chuối lột vỏ, chừa lại khoảng 3 trái để trang trí mặt bánh rồi dùng nĩa để nghiền nát.
2.Cho đường, trứng vào hỗn hợp chuối. Dùng phới để trộn hỗn hợp cho thật mịn trong vòng 10 phút
3.Cho vani, sữa tươi, dầu ăn bơ lạt, bột và baking soda  vào hỗn hợp và tiếp tục dùng phới để trộn đều hỗn hợp khoảng 15 phút. Cho nho khô vào.
Cho hỗn hợp vào khuôn, cho khoảng 70% để khi chín bánh nở ra đẹp. Nướng ở nhiệt độ 165 độ C trong khoảng thời gian 65-80 phút',
 6, 120),
 ('Bước 1: Làm vỏ bánh
1.Đun bơ, đường, nước và 1 chút xíu muối 
2.Cho phần bột mì vào nồi và khuấy cho hỗn hợp được hòa quyện rồi bật bếp lại và khuấy đến khi thành khối bột dẻo mịn
3.Cho từ từ lượng trứng vào phần bột và khuấy cho đến khi thu được hỗn hợp bột đặc và mịn.
4.Dùng túi bắt kem để bắt phần bột thành từng khối tròn nhỏ vào khay nướng bánh. Nướng bánh ở 220 °C 15 phút rồi 180 °C 15 phút nữa..
	Bước 2: Làm nhân bánh
1. Cho đường vào lòng đỏ trứng và dùng máy đánh trứng đánh cho tới khi chuyển sang màu vàng nhạt
2. Rây bột bắp vào trứng và trộn đều.
3. Đun sữa sôi lăn tăn rồi cho vào hỗn hợp trứng ở trên., khuấy đều.
4. Cho hỗn hợp thu được lên bếp nấu cho đến khi sệt lại. Cho bơ, muối và vani vào trộn đều.
5. Lọc qua rây cho mịn rồi đậy lại sát mặt kem và để nguội.
	Bước 3 Làm bánh hoàn tất: Sau khi vỏ và nhân nguội, Cho nhân vào bên trong phần vỏ bánh ',
     7, 80),
 ('1.Đem cốt chanh trộn với sữa tươi không đường rồi để nghỉ 10 phút để sữa kết tủa, thay thế cho buttermilk.
2.Bơ nhạt và đường trắng để cùng nhau trong một âu.
3.Trộn đều bột mì, bột nở và muối trắng trong một âu khác.
4.Dùng máy đánh trứng đánh hỗn hợp bơ đường ở tốc độ cao trong 5 phút. Sau đó thêm trứng gà và tinh dầu vani vào rồi đánh tan trứng.
5.Cho xen kẽ từng phần hỗn hợp bột mì và hỗn hợp sữa vào đánh.
6.Sau khi cho hết nguyên liệu, đánh bôt thêm khoảng 30 giây tới khi hỗn hợp đủ vừa hòa quyện.
7.Đổ hỗn hợp bột vào lần lượt khuôn bánh cupcake sao cho lượng bột đầy 2/3 khuôn, đưa bánh cupcake vào nướng ở nhiệt độ 180oC trong 20 phút.
8.Trang trí và thưởng thức.',
 8, 50),  
 ('Bước 1: Sơ Chế Táo
Rửa sạch 3 quả táo, gọt vỏ, loại bỏ phần ruột bên trong. Cắt nhỏ một ít táo theo chiều dọc để trang trí bề mặt bánh, phần còn lại cắt thành phần nhỏ theo chiều ngang.
Bước 2: Làm Bột Bánh
Cho 3 quả trứng gà và 60g dầu ăn vào bát, trộn đều.
Thêm sữa tươi, bơ, đường nâu và tinh chất vani vào trộn cho đến khi đường tan hoàn toàn.
Cho bột mì số 8 và bột baking powder vào, trộn đều đến khi hỗn hợp mịn.
Cho phần táo cắt nhỏ vào hỗn hợp bột, trộn đều.
Bước 3: Nướng Bánh
Lót giấy nến vào khuôn bánh. Đổ hỗn hợp bột vào khuôn, dàn đều. Nướng bánh ở nhiệt độ 180 độ C trong 35-40 phút.',
 9, 65),       
 ('Bước 1: Chuẩn bị Bột
-	Rây bột hạnh nhân và đường bột: Trộn bột hạnh nhân và đường bột với nhau, sau đó rây qua rây để hỗn hợp thật mịn.
-	Đánh lòng trắng trứng: Đánh lòng trắng trứng đến khi nổi bọt. Thêm đường cát từ từ và tiếp tục đánh đến khi lòng trắng đạt trạng thái bông cứng (khi nhấc que đánh lên có chóp nhọn).
-	Thêm màu thực phẩm và hương liệu: Nếu muốn bánh có màu sắc hoặc hương vị riêng, cho màu thực phẩm và hương liệu vào lòng trắng trứng đã đánh bông. Trộn đều.
Bước 2: Trộn Bột
-	Cho hỗn hợp bột hạnh nhân và đường bột đã rây vào lòng trắng trứng đánh bông.
-	Dùng spatula (phới dẹt) trộn đều nhẹ nhàng (kỹ thuật fold) cho đến khi bột mịn và chảy đều như dòng ruy-băng. Tránh trộn quá tay để không làm mất độ bông của lòng trắng trứng.
Bước 3: Bắt Bánh và Nướng
-	Bắt bột thành hình: Đổ bột vào túi bắt kem, cắt đầu túi để bắt bánh. Bắt bột thành các vòng tròn nhỏ (đường kính khoảng 3-4 cm) lên khay nướng có lót giấy nến.
-	Để bánh nghỉ: Để bánh nghỉ ở nhiệt độ phòng khoảng 30-60 phút đến khi mặt bánh khô và không dính tay khi chạm vào.
-	Nướng bánh: Làm nóng lò ở 150°C. Nướng bánh trong khoảng 15-18 phút, hoặc cho đến khi bánh có lớp chân bánh đặc trưng và không dính vào giấy nến.
Bước 4: Làm Nhân và Hoàn Thiện Bánh
-	Chuẩn bị nhân: Dùng kem bơ, ganache hoặc mứt để làm nhân bánh.
-	Kẹp nhân: Sau khi bánh nguội, cho một lớp nhân lên một nửa số bánh và kẹp với nửa còn lại để tạo thành chiếc bánh macaron hoàn chỉnh.', 
10, 100), 
 ('Bước 1: Trộn Hỗn Hợp Bột
-	Đánh bơ và đường: Cho bơ, đường nâu và đường trắng vào tô, đánh đều cho đến khi hỗn hợp nhuyễn mịn và có màu nhạt.
-	Thêm trứng và vani: Cho trứng và tinh chất vani vào hỗn hợp bơ, tiếp tục đánh đều cho đến khi quyện lại.
-	Trộn bột: Trong một tô khác, rây bột mì, baking soda, và muối. Sau đó, từ từ thêm hỗn hợp bột khô vào hỗn hợp bơ và trộn đều.
-	Thêm chocolate chips và topping: Cho chocolate chips (và các loại hạt, nho khô, cranberry khô nếu dùng) vào hỗn hợp bột, trộn đều.
Bước 2: Tạo Hình và Nướng Bánh
-	Làm nóng lò nướng: Làm nóng lò ở 175°C.
-	Tạo hình bánh: Dùng muỗng hoặc tay, múc hỗn hợp bột và nặn thành các viên nhỏ, đặt lên khay nướng có lót giấy nến, cách nhau khoảng 5cm để bánh có không gian nở.
-	Nướng bánh: Nướng bánh trong lò khoảng 10-12 phút hoặc cho đến khi rìa bánh có màu vàng nâu. Bánh sẽ hơi mềm khi mới lấy ra, nhưng sẽ cứng lại khi nguội.
Bước 3: Làm Nguội 
Sau khi nướng, để bánh trên khay khoảng 5 phút rồi chuyển ra rack để bánh nguội hoàn toàn.',
 11, 40), 
 ('Bước 1: Nhào bột, nghỉ bột
Trộn sữa tươi với nước cốt chanh, để lên men trong 10-15 phút
Hòa tan men với đường và nước ấm, để men nở trong 5-10 phút
Thêm nửa lượng bột mì, đường, bơ đun chảy, sữa đã lên men, muối và 1 lòng đỏ trứng. Trộn đều
Thêm nửa bột mì còn lại, nhào trong 10-15 phút cho bột mịn và đàn hồi. Ủ bột trong 1 giờ
Bước 2: Cán bơ lạt, ủ bột lần 1
Cán bơ lạt thành mỏng, để lạnh trong 30 phút. Cán bột mỏng và để vào ngăn mát tủ lạnh 15 phút
Bước 3: Cán bột, gấp và ủ lần 2
Cán mỏng bột, đặt bơ lạt vào một bên, gấp lại và ủ trong tủ lạnh 30 phút
Bước 4: Cán bột, gấp và ủ lần 3
Cán bột theo chiều dài, gấp đôi lại và ủ trong tủ lạnh thêm 30 phút. Lặp lại quá trình cán và ủ thêm 6-7 giờ
Bước 5: Tạo hình bánh sừng trâu
Cán mỏng bột, cắt thành 12 miếng tam giác, rồi cuộn lại và uốn cong hai đầu
Bước 6: Nướng bánh Croissant
Đặt bánh lên khay nướng, nướng ở 170°C trong 7 phút, giảm xuống 150°C và nướng thêm 8-13 phút. Tổng thời gian nướng từ 15-20 phút',
  12, 540), 
 ('Bước 1: Làm hỗn hợp lòng đỏ trứng
-	Cho bơ vào lò vi sóng từ 40 – 50 giây để bơ tan chảy hoàn toàn. Nếu không có lò vi sóng, bạn có thể làm tan chảy bơ bằng cách đun trong chảo.
-	Tách lòng đỏ và lòng trắng trứng gà ra hai âu riêng. Tiếp theo, đổ 55 gram được vào âu lòng đỏ, đánh thật đều tay rồi cho tiếp 100 gram bơ đã đun chảy vào, tiếp tục đánh lên để các nguyên liệu hòa quyện vào nhau thành một hỗn hợp đồng nhất.
Bước 2: Làm hỗn hợp bột bánh Waffle
-	Cho lượng đường còn lại vào âu lòng trắng, đánh bông lên. Sau đó đổ hỗn hợp lòng trắng vào âu hỗn hợp lòng đỏ, trộn đều từ dưới lên trên đến khi hỗn hợp mịn màng, có màu vàng nhạt bắt mắt.
-	Rây bột qua một lần để bột thật mịn rồi cho vào hỗn hợp lòng đỏ cùng một chút muối và vani, trộn đều để hỗn hợp nhuyễn mịn và không bị vón cục.
Bước 3:  Nướng
Nướng trong khoảng 5 phút hoặc đợi bánh chuyển sang màu vàng nâu thì lấy ra khỏi khuôn. Dùng dao cắt bỏ phần thừa xung quanh, xếp bánh ra đĩa. Tiếp tục lặp lại thao tác nướng bánh đến khi hết phần bột đã chuẩn bị', 
 13, 30),  
 ('Bước 1: Tạo phần nhân kem
Đập trứng, tách lòng đỏ và đánh đều đến khi chuyển màu vàng nhạt. Rây bột ngô vào hỗn hợp trứng và trộn đều.
Đun sữa ở nhiệt độ 45-50°C, sau đó cho từ từ vào hỗn hợp trứng, khuấy đều để tránh vón cục.
Khi hỗn hợp hòa quyện, thêm vài giọt vani và đổ ra bát.
Khi nhân kem nguội bớt, cho bơ cắt nhỏ vào trộn đều cho đến khi bơ tan hoàn toàn. Cất kem vào tủ lạnh để nhân kem nguội hoàn toàn
Bước 2: Tiến hành làm phần bột bánh
-	Rây bột mì để loại bỏ cục bột.
-	Đun sữa, bơ, đường, muối và 80ml nước sạch trong nồi cho đến khi bơ tan chảy.
-	Nhấc nồi ra khỏi bếp, cho bột mì vào và trộn đều, sau đó đun thêm 1-2 phút cho đến khi bột không còn dính vào nồi.
-	Cho trứng vào từ từ, vừa cho trứng vừa trộn đều bằng phới đánh trứng. Bột sẽ có dạng hơi lỏng, mùi thơm và màu vàng đẹp.
Bước 3: Thực hiện tạo hình cho bánh Eclair
-	Bột bánh Eclair khá mềm và có phần hơi lỏng nên không thể tạo hình bằng cách nặn hay sử dụng luôn bánh sẵn có. Cách làm bánh Eclair chuẩn Pháp từ hương vị cho đến hình dáng thì bánh sẽ có hình thuôn dài nhỏ nhắn.

-	Cho phần kem đã làm vào túi bắt kem, rồi tiến hành bắt từng dải bột dài tầm 10cm lên khay nướng. Hãy lớp một lớp giấy nến xuống dưới khay nếu không muốn bánh bị dính lên khay.
Bước 4: Nướng bánh Eclair 
-	Đầu tiên, hãy làm nóng lò ở 200 độ C trong 10 phút trước khi cho bánh vào nướng để bánh chín đều và giòn hơn.
-	Cho khay bánh vào tiến hành nướng trong 20 phút',
  14, 45),  
 ('Bước 1: Trộn các nguyên liệu ướt
Trộn đều hỗn hợp gồm 200ml sữa tươi không đường, 170g bơ lạt, 80ml mật ong, 4 quả trứng, 1 muỗng tinh chất vani lại với nhau.
Bước 2: Ủ bột lên men
-	Trộn đều tất cả bột mì với muối rồi cho gói men vào và tiếp tục trộn đều( chỉ trộn 1 chiều để nếu không con men sẽ chết)
-	Đổ hỗn hợp ướt vào và khuấy đều.
-	Bọc kín tô hỗn hợp lại và ủ 2-3 tiếng. Sau đó bỏ vào ngăn mát tủ lạnh và ủ thêm 12 tiếng.
Bước 3: Cán bột và tạo hình 
-	Cho bột rà bàn, phủ lên mặt bột 1 lớp bột mì và cán mỏng với độ dày khoảng 1cm.
-	Sau đó bạn dùng một khuôn hình tròn cắt bột, rồi dùng tiếp khuôn tròn nhỏ hơn ấn vào giữa miếng bột.
-	Chuẩn bị khay nướng có lót giấy lên trên, xếp bánh lên lấy vải che lại ủ khoảng 20-30 phút.
Bước 4: Nướng bánh
Làm nóng là nướng tới nhiệt độ 180 độ C.
Quét 1 lớp bơ lên mặt bánh sau đó cho vào lò nướng tầm 15 phút.
Bước 5: Trang trí bánh
-	Đun chảy chocolate trắng, đen đã chuẩn bị.
-	Tranh thủ lúc bánh còn nóng nhúng vào hỗn hợp chocolate trắng hoặc đen.', 
 15, 900);
-- Tạo dữ liệu cho bảng RecipeDetail
-- Bánh pizza
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 400, 1),     -- 400g Bột mì
  (9, 200, 1),     -- 200g Men
  (34, 10, 1),     -- 10g Phô mai (assuming phô mai has warehouse_id 31)
  (26, 200, 1),    -- 200g Tôm
  (27, 200, 1),    -- 200g Nghêu
  (29, 5, 1),      -- 5g Tỏi
  (30, 5, 1),      -- 5g Hành
  (2, 20, 1),      -- 20g Đường
  (32, 800, 1),    -- 800g Cà chua
  (33, 10, 1),     -- 10g Tương cà
  (22, 5, 1),      -- 5g Mật ong
  (33, 20, 1),     -- 20g Dầu ô liu (assuming dầu ô liu has warehouse_id 25)
  (28, 5, 1),      -- 5g Ớt chuông
  (33, 90, 1),     -- 90ml Tương cà ketchup (same warehouse_id as tương cà)
  (24, 1, 1);      -- 1g Muối
-- Bánh egg tag
 INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 400, 2),     -- 400g Bột mì đa dụng
  (4, 200, 2),     -- 200g Bơ thực vật loại hơi mặn
  (6, 2, 2),       -- 2 lòng đỏ Trứng gà 
  (6, 3, 2),       -- 3 quả Trứng gà
  (5, 60, 2),      -- 60ml Sữa đặc
  (3, 200, 2),     -- 200ml Sữa tươi không đường
  (23, 5, 2),      -- 5g Tinh chất vani
  (2, 10, 2);      -- 10g Đường

-- Bánh muffin
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 300, 3),      -- 300g Bột mì đa dụng
  (7, 10, 3),       -- 10g Bột nở
  (23, 10, 3),      -- 10g Chiết xuất vani
  (6, 2, 3),        -- 2 quả Trứng gà
  (3, 150, 3),      -- 150g Sữa tươi
  (8, 50, 3),       -- 50g Bơ nhạt
  (25, 40, 3),      -- 40g Dầu ăn
  (24, 1, 3),       -- 1 nhúm Muối tinh (1g for approximation)
  (15, 10, 3);      -- 10g Nho khô
-- Pizza bông lan
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (6, 12, 4),       -- 12 quả Trứng muối
  (6, 3, 4),        -- 3 quả Trứng gà
  (1, 50, 4),       -- 50g Bột mì đa dụng
  (10, 20, 4),      -- 20g Bột bắp
  (3, 40, 4),       -- 40g Sữa tươi không đường
  (31, 10, 4),       --  Phô mai
  (25, 25, 4),      -- 25g Dầu ăn
  (8, 20, 4),       -- 20g Bơ lạt (unsalted butter)
  (2, 70, 4),       -- 70g Đường
  (23, 1, 4),       -- 1 ống Vani (assuming 1 tube ~ 1g)
  (24, 0.5, 4),     -- ½ muỗng cà phê Muối (0.5g approximation)
  (26, 0.5, 4);     -- ½ miếng Chanh (assuming 0.5g or adjust as needed
-- Pizza bronies
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 75, 5),       -- 75g Bột mì đa dụng
  (8, 150, 5),      -- 150g Bơ lạt (unsalted butter)
  (11, 250, 5),     -- 250g Socola đen
  (6, 4, 5),        -- 4 quả Trứng gà
  (12, 35, 5),      -- 35g Bột cacao
  (13, 10, 5),      -- 10g Bơ đậu phộng
  (2, 200, 5),      -- 200g Đường nâu
  (23, 5, 5),       -- 5g Tinh chất vani
  (24, 2, 5);       -- 2g Muối
-- bánh Chuối
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (14, 900, 6),    -- 900g Chuối
  (1, 300, 6),     -- 300g Bột mì số 11
  (6, 135, 6),     -- 135g Trứng gà 
  (3, 150, 6),     -- 150g Sữa tươi không đường
  (15, 10, 6),     -- Một ít Nho khô
  (2, 250, 6),     -- 250g Đường cát trắng
  (23, 4, 6),      -- 3-5g Vani nước 
  (8, 50, 6),      -- 50g Bơ lạt 
  (25, 50, 6),     -- 50g Dầu ăn
  (18, 5, 6);      -- 5g Baking soda
-- bánh sukem
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (3, 200, 7),     -- 200ml Sữa tươi
  (1, 100, 7),     -- 100g Bột mì đa dụng
  (8, 90, 7),      -- 90g Bơ lạt
  (6, 3, 7),       -- 3 quả Trứng gà
  (2, 35, 7),      -- 35g Đường
  (10, 20, 7),     -- 20g Bột bắp
  (8, 10, 7),      -- 10g Bơ lạt 
  (23, 2.5, 7),    -- 1/2 muỗng cà phê Vani 
  (24, 0.5, 7);    -- 1 chút Muối (0.5g as an approximation)

  --bánh cupcake
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 80, 8),       -- 80g Bột mì đa dụng
  (7, 3.3, 8),      -- ⅔ thìa cà phê Bột nở
  (3, 60, 8),       -- 60ml Sữa tươi không đường
  (6, 1, 8),        -- 1 quả Trứng gà to
  (24, 1, 8),       -- 1 thìa cà phê Nước cốt chanh 
  (24, 0.5, 8),     -- Muối trắng 
  (8, 55, 8),       -- 55g Bơ nhạt
  (2, 50, 8),       -- 50g Đường trắng
  (23, 5, 8);       -- 1 thìa cà phê Vani (approx. 5g)
-- bánh táo
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (20, 100, 9),      -- 3 quả Táo tươi 
  (1, 220, 9),     -- 220g Bột mì số  
  (18, 4.5, 9),    -- 4.5g Bột baking powder
  (6, 3, 9),       -- 3 quả Trứng gà
  (3, 90, 9),      -- 90ml Sữa tươi
  (8, 60, 9),      -- 60g Bơ lạt
  (25, 60, 9),     -- 60g Dầu ăn
  (2, 90, 9),      -- 90g Đường nâu
  (23, 5, 9);      -- Tinh chất vani (approx. 5g)
-- bánh macaron
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (17, 120, 10),    -- 120g Bột hạnh nhân
  (2, 200, 10),     -- 200g Đường bột
  (6, 90, 10),      -- 90g Lòng trắng trứng (approx. 3 eggs)
  (2, 50, 10),      -- 50g Đường cát
  (23, 2.5, 10),    -- 1/2 muỗng cà phê Tinh chất vani (approx. 2.5g)
  (30, 0, 10),      -- Màu thực phẩm (typically, you would have a custom entry for this)
  (22, 150, 10);    -- 150g Kem tươi (whipping cream)
-- bánh cookies
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 200, 11),     -- 200g Bột mì đa dụng
  (8, 115, 11),     -- 115g Bơ lạt
  (6, 1, 11),       -- 1 quả Trứng gà
  (18, 0.25, 11),   -- 0.25g Bột baking soda (approx. 1/4 tsp)
  (11, 100, 11),    -- 100g Socola cắt nhỏ
  (17, 50, 11),     -- 50g Hạt hạnh nhân (or hạt điều, hạt óc chó)
  (19, 0.5, 11),    -- 0.5g Bột quế
  (15, 50, 11),     -- 50g Nho khô (or cranberry khô)
  (2, 100, 11),     -- 100g Đường nâu
  (2, 50, 11),      -- 50g Đường trắng
  (24, 1.5, 11),    -- 1.5g Muối
  (23, 5, 11);      -- 5g Tinh chất vani
-- bánh sừng bò
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (9, 13.5, 12),    -- 13.5g Men nở khô
  (3, 500, 12),     -- 500ml Sữa tươi
  (8, 56, 12),      -- 56g Bơ đun chảy
  (1, 680, 12),     -- 680g Bột mì đa dụng
  (6, 50, 12),      -- 50g Trứng gà (approximately 1-2 eggs)
  (8, 454, 12),     -- 454g Bơ lạt
  (23, 20, 12),     -- 20ml Nước cốt chanh
  (23, 20, 12),     -- 20g Nước cốt chanh (same ingredient, different unit)
  (24, 10, 12),     -- 10g Muối
  (2, 50, 12);      -- 50g Đường trắng
-- bánh waffle
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 140, 13),     -- 140g Bột làm bánh 
  (6, 3, 13),       -- 3 quả Trứng gà
  (8, 120, 13),     -- 120g Bơ
  (23, 5, 13),      -- 5g Vani
  (24, 0.5, 13),    -- 0.5g Muối
  (2, 110, 13),     -- 110g Đường cát trắng
  (2, 5, 13);       -- 5g Đường bột
-- bánh eclair
  INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 100, 14),     -- 100g Bột mì
  (8, 70, 14),      -- 70g Bơ lạt
  (3, 280, 14),     -- 280ml Sữa tươi
  (6, 4, 14),       -- 4 quả Trứng gà
  (22, 150, 14),    -- 150g Kem tươi
  (10, 12, 14),     -- 12g Bột ngô (cornstarch)
  (2, 45, 14),      -- 45g Đường
  (24, 0.5, 14),    -- 0.5g Muối
  (23, 2, 14);      -- 2g Hương vị vani
-- bánh donut
INSERT INTO RecipeDetail (warehouse_id, quantity, recipe_id) VALUES
  (1, 530, 15),     -- 530g Bột mì
  (12, 40, 15),     -- 40g Bột cacao
  (8, 170, 15),     -- 170g Bơ lạt
  (2, 560, 15),     -- 560g Đường bột
  (9, 128, 15),     -- 128g Men
  (21, 80, 15),     -- 80g Mật ong
  (6, 200, 15),     -- 4 quả Trứng gà (approx. 200g)
  (3, 275, 15),     -- 275g Sữa tươi không đường
  (23, 5, 15),      -- 5g Tinh chất vani
  (24, 1, 15);      -- 1g Muối
  
-- Tạo dữ liệu cho bảng Order
INSERT INTO "Order" (total_amount, order_status, order_date) VALUES
  (60000, 'PENDING', NOW()),
  (45000, 'COMPLETED', NOW()),
  (30000, 'CANCELED', NOW());

-- Tạo dữ liệu cho bảng OrderDetail
INSERT INTO "OrderDetail" (order_id, product_id, product_quantity) VALUES
  (1, 1, 10),
  (2, 3, 12),  
  (3, 4, 10); 

-- Tạo dữ liệu cho bảng Transaction
INSERT INTO "Transaction" (payment_method, status, amount, order_id) VALUES
  ('BANK_TRANSFER', 'SUCCESS', 60000, 1),
  ('E_WALLET', 'SUCCESS', 45000, 2);
