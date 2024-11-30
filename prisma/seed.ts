import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Categories
  await prisma.category.createMany({
    data: [{ name: 'Bánh ngọt' }, { name: 'Bánh mặn' }],
  });

  // Seed WareHouse
  await prisma.wareHouse.createMany({
    data: [
      { name: 'Bột mì', quantity: 100.0, unit: 'kg' },
      { name: 'Đường', quantity: 50.0, unit: 'kg' },
      { name: 'Sữa tươi', quantity: 100.0, unit: 'l' },
      { name: 'Bơ thực vật', quantity: 20.0, unit: 'kg' },
      { name: 'Sữa đặc', quantity: 50.0, unit: 'l' },
      { name: 'Trứng gà', quantity: 1000.0, unit: 'quả' },
      { name: 'Bột nở', quantity: 50.0, unit: 'kg' },
      { name: 'Bơ nhạt', quantity: 20.0, unit: 'kg' },
      { name: 'Men', quantity: 20.0, unit: 'kg' },
      { name: 'Bột bắp', quantity: 30.0, unit: 'kg' },
      { name: 'Socola đen', quantity: 100.0, unit: 'kg' },
      { name: 'Bột cacao', quantity: 10.0, unit: 'kg' },
      { name: 'Bơ đậu phộng', quantity: 10.0, unit: 'kg' },
      { name: 'Chuối', quantity: 20.0, unit: 'kg' },
      { name: 'Nho khô', quantity: 10.0, unit: 'kg' },
      { name: 'Táo tươi', quantity: 20.0, unit: 'kg' },
      { name: 'Bột baking powder', quantity: 10.0, unit: 'kg' },
      { name: 'Cà phê', quantity: 5.0, unit: 'kg' },
      { name: 'Kem tươi', quantity: 100.0, unit: 'kg' },
      { name: 'Mật ong', quantity: 100.0, unit: 'kg' },
      { name: 'Tinh chất vani', quantity: 5.0, unit: 'kg' },
      { name: 'Muối', quantity: 50.0, unit: 'kg' },
      { name: 'Chanh', quantity: 1.0, unit: 'kg' },
      { name: 'Dầu ăn', quantity: 100.0, unit: 'l' },
      { name: 'Tôm', quantity: 20.0, unit: 'kg' },
      { name: 'Nghêu', quantity: 10.0, unit: 'kg' },
      { name: 'Ớt chuông', quantity: 10.0, unit: 'kg' },
      { name: 'Tỏi', quantity: 3.0, unit: 'kg' },
      { name: 'Hành', quantity: 2.0, unit: 'kg' },
      { name: 'Cà chua', quantity: 10.0, unit: 'kg' },
      { name: 'Tương cà', quantity: 3.0, unit: 'kg' },
      { name: 'Dầu oliu', quantity: 3.0, unit: 'kg' },
      { name: 'Phô mai', quantity: 3.0, unit: 'kg' },
    ],
  });
  // Seed Products
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
        name: 'Bánh tag trứng',
        category_id: 1,
        price: 30000,
        description: 'Bánh tag trứng thơm ngon',
        img_path: '/imgs/bakery-images/eggtagb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
      },
      {
        name: 'Bánh muffin',
        category_id: 1,
        price: 20000,
        description: 'Bánh muffin thơm ngon',
        img_path: '/imgs/bakery-images/muffinb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
      },
      {
        name: 'Bánh bông lan trứng muối',
        category_id: 2,
        price: 150000,
        description: 'Bánh bông lan trứng muối thơm ngon',
        img_path: '/imgs/bakery-images/saltedb.png',
        max_daily_quantity_limit: 10,
        product_capacity_per_batch: 4,
      },
      {
        name: 'Bánh brownies',
        category_id: 1,
        price: 50000,
        description: 'Bánh brownies thơm ngon',
        img_path: '/imgs/bakery-images/browniesb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
      },
      {
        name: 'Bánh chuối',
        category_id: 1,
        price: 80000,
        description: 'Bánh chuối thơm ngon',
        img_path: '/imgs/bakery-images/bananapieb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 12,
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
      {
        name: 'Bánh waffle',
        category_id: 1,
        price: 50000,
        description: 'Bánh waffle thơm ngon',
        img_path: '/imgs/bakery-images/waffleb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 6,
      },
      {
        name: 'Bánh eclair',
        category_id: 1,
        price: 20000,
        description: 'Bánh eclair thơm ngon',
        img_path: '/imgs/bakery-images/eclairb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 24,
      },
      {
        name: 'Bánh donut',
        category_id: 1,
        price: 30000,
        description: 'Bánh mì nướng bơ tỏi thơm lừng',
        img_path: '/imgs/bakery-images/donutb.png',
        max_daily_quantity_limit: 50,
        product_capacity_per_batch: 5,
      },
    ],
  });

  await prisma.recipe.createMany({
    data: [
      {
        name: `Bước 1: Làm sốt cà chua
1. Luộc cà chua trong 5 phút sau đó lột vỏ, băm nhỏ hành tây tỏi,
2. Phi hành tỏi, cho cà chua, đường muối, tương cà rồi khuấy đều cho đến khi sệt lại trong khoảng 10p
Bước 2: Làm đế pizza
1. Cho nước, men, mật ong, dầu oliu, rây hết bột mì và nhào tất cả, ủ trong 2 tiếng
2. Nặn thành hình tròn bán kính 9, 7, 12 tương đương nhỏ vừa lớn
Bước 3: Cho đế vào lò nướng nhiệt độ 230 -250, quét sốt cà chua và cho tất cả nhân vào và nướng trong 10p`,
        product_id: 1,
        complete_time: 180,
      },
      {
        name: `Bước 1: Làm phần vỏ bánh
1. Cho bột mì, bơ thực vật nhào mịn và để trong ngăn đá tủ lạnh khoảng 15 phút. Cho nốt chỗ bột mì còn lại vào trộn đều cùng đường, lòng đỏ trứng gà và 150ml nước.
2. Nhào bột thật mịn rồi cán mỏng miếng bột thành hình chữ nhật, lấy phần bột trong tủ lạnh cho vào chính giữa miếng bột, cán nhẹ nhàng. Gấp bột làm 3 rồi bọc màng bọc thực phẩm cho vào ngăn đá 15 phút.
3. Bột sau khi đã nghỉ khoảng 15 phút trong tủ lạnh, đem cán mỏng rồi gấp lại làm 3, cho vào ngăn đá tủ lạnh 15 phút. Lặp đi lặp lại khoảng 4-5 lần để được lớp vỏ bánh nhiều lớp rất đẹp.
4. Lần cán bột cuối cùng bạn chỉ làm mỏng khoảng 3mm rồi dùng khuôn cắt tạo thành những miếng tròn và lót bột vào khuôn nướng.
Bước 2: Làm nhân bánh
1. Cho sữa đặc và sữa tươi không đường khuấy đều cho sữa đặc tan rồi cho vào lò vi sóng quay trong khoảng 3 phút.
2. Đánh tan trứng, cho thêm một chút vani đánh cùng cho thơm, đổ trứng vào bát sữa nóng, khuấy nhanh và đều tay.
Bước 3: Nướng bánh
1. Bật lò nướng ở nhiệt độ 200 độ C trong khoảng 10 phút cho lò nóng đều. Từ từ rót phần nhân trứng sữa vào từng khuôn bánh rồi đặt khay vào lò nướng.
2. Nướng bánh khoảng 20 phút khi thấy vỏ bánh chín vàng đều. Cuối cùng lấy bánh bày ra đĩa và trang trí.`,
        product_id: 2,
        complete_time: 120,
      },
      {
        name: `1. Bật nóng lò nướng. Cho khay thiếc muffin có lót sẵn cốc giấy vào
2. Bơ nhạt đun cách thủy cho tan chảy, để nguội.
3. Rây bột mì, bột nở, muối vào chung một bát. Trộn đều chúng.
4. Đập trứng gà, sữa tươi, vani, dầu ăn vào chung một bát. Đánh cho tan đều.
5. Thêm từ từ bơ đã nguội vào hỗn hợp. Trộn đều cho hòa quyện.
6. Thêm từ từ bột khô vào hỗn hợp ướt. Lúc này, thêm nho khô vào trộn đều nhé.
Chia bột vào từng khuôn. Đem nướng ở 180 độ trong 20 phút`,
        product_id: 3,
        complete_time: 70,
      },
      {
        name: `Bước 1: Làm sốt kem
1. Đun sữa tươi với bơ cho tan, tiếp theo cho đường vào khuấy đều.
2. Đun nhỏ lửa, thêm vanilla rồi khuấy đều cho đến khi sốt sệt lại.
Bước 2: Làm vỏ bánh
1. Trộn bột mì với bột nở và đường, thêm bơ vào trộn đều cho bột có dạng hạt vụn.
2. Thêm sữa vào từ từ, trộn đều cho đến khi bột trở nên mềm mịn.
Bước 3: Nướng bánh
1. Dùng khuôn bánh tart để nặn bột vào khuôn.
2. Nướng ở nhiệt độ 180 độ C trong khoảng 15-20 phút cho đến khi vỏ bánh vàng đều.
Bước 4: Hoàn thành
1. Đổ sốt kem vào trong vỏ bánh và trang trí với trái cây tươi.`,
        product_id: 4,
        complete_time: 90,
      },
      {
        name: `Bước 1: Làm vỏ bánh
1. Trộn bột mì, đường, bột nở vào một bát lớn, sau đó thêm bơ vào và nhào cho đến khi bột thành một khối đồng nhất.
2. Dùng tay ấn bột thành hình tròn rồi cho vào khuôn, tạo thành lớp vỏ mỏng đều.
Bước 2: Làm nhân bánh
1. Trộn kem phô mai, đường và trứng cho đến khi hỗn hợp mịn.
2. Cho hỗn hợp vào trong khuôn đã lót vỏ bánh.
Bước 3: Nướng bánh
1. Đặt bánh vào lò nướng ở nhiệt độ 180 độ C trong khoảng 25-30 phút.
2. Sau khi bánh chín, để nguội trong khuôn rồi bỏ ra đĩa và thưởng thức.`,
        product_id: 5,
        complete_time: 70,
      },
      {
        name: `Bước 1: Làm phần vỏ bánh
1. Trộn bột mì, muối, bơ và nước vào một bát lớn để tạo thành khối bột mềm mịn.
2. Lăn bột thành một miếng dày khoảng 1 cm rồi dùng khuôn cắt thành các miếng hình vuông nhỏ.
Bước 2: Làm nhân bánh
1. Trộn hạt dẻ, bột cacao và đường vào một bát khác.
2. Đổ nhân vào mỗi miếng bột đã cắt sẵn, gập đôi và ép mép lại cho chắc.
Bước 3: Nướng bánh
1. Đặt các miếng bánh vào khay nướng, nướng ở nhiệt độ 180 độ C trong 15 phút cho đến khi vỏ bánh vàng giòn.
Bước 4: Hoàn thành
1. Lấy bánh ra ngoài, để nguội và thưởng thức.`,
        product_id: 6,
        complete_time: 50,
      },
      {
        name: `Bước 1: Làm phần vỏ bánh
1. Trộn bột mì, đường, bơ và muối vào một bát.
2. Thêm nước lạnh vào, nhào bột thành khối dẻo, bọc kín và để trong tủ lạnh 30 phút.
Bước 2: Làm nhân bánh
1. Đánh trứng với sữa tươi và đường cho đến khi hỗn hợp mịn.
2. Thêm vani và hạt nhục đậu khấu vào trộn đều.
Bước 3: Nướng bánh
1. Đổ nhân vào phần vỏ bánh đã lót khuôn.
2. Nướng ở nhiệt độ 180 độ C trong khoảng 30-40 phút cho đến khi phần nhân hơi vàng và vỏ bánh giòn.`,
        product_id: 7,
        complete_time: 90,
      },
      {
        name: `Bước 1: Làm sốt bơ tỏi
1. Đun bơ trong một chảo lớn, thêm tỏi vào phi thơm.
2. Cho gia vị như muối, tiêu, chanh vào đảo đều, để sốt sệt lại.
Bước 2: Nướng hải sản
1. Nguyên liệu hải sản (tôm, mực) rửa sạch, chẻ nhỏ.
2. Nướng trên vỉ nướng hoặc lò vi sóng ở nhiệt độ 180 độ C trong khoảng 10-15 phút.
Bước 3: Hoàn thành
1. Xếp hải sản lên đĩa, rưới sốt bơ tỏi lên trên và thưởng thức.`,
        product_id: 8,
        complete_time: 40,
      },
      {
        name: `Bước 1: Chuẩn bị phần bột mì
1. Trộn bột mì với muối, thêm nước từ từ cho đến khi bột mịn.
2. Cán bột mỏng ra, sau đó cắt thành các miếng vuông hoặc tròn.
Bước 2: Làm nhân bánh
1. Trộn thịt xay với gia vị, thêm hành và tỏi băm nhỏ vào trộn đều.
2. Đặt nhân vào giữa miếng bột rồi gập lại, dùng tay nặn chặt mép bánh.
Bước 3: Nướng bánh
1. Nướng bánh ở nhiệt độ 180 độ C trong khoảng 20 phút cho đến khi vỏ bánh vàng đều.
Bước 4: Hoàn thành
1. Lấy bánh ra ngoài, để nguội và thưởng thức.`,
        product_id: 9,
        complete_time: 60,
      },
      {
        name: `Bước 1: Làm sốt cà chua
1. Đun cà chua tươi hoặc xay nhuyễn cùng với hành tỏi, thêm gia vị như muối, đường và tiêu vào.
2. Đun cho đến khi sốt sệt lại.
Bước 2: Nướng bánh
1. Lót vỏ bánh pizza vào khuôn, quét một lớp dầu oliu.
2. Đổ sốt cà chua lên vỏ bánh rồi rải phô mai và các nguyên liệu tùy thích lên trên.
3. Nướng bánh ở nhiệt độ 230 độ C trong khoảng 15-20 phút cho đến khi phô mai tan chảy và bánh vàng đều.`,
        product_id: 10,
        complete_time: 80,
      },
      {
        name: `Bước 1: Trộn Hỗn Hợp Bột
-	Đánh bơ và đường: Cho bơ, đường nâu và đường trắng vào tô, đánh đều cho đến khi hỗn hợp nhuyễn mịn và có màu nhạt.
-	Thêm trứng và vani: Cho trứng và tinh chất vani vào hỗn hợp bơ, tiếp tục đánh đều cho đến khi quyện lại.
-	Trộn bột: Trong một tô khác, rây bột mì, baking soda, và muối. Sau đó, từ từ thêm hỗn hợp bột khô vào hỗn hợp bơ và trộn đều.
-	Thêm chocolate chips và topping: Cho chocolate chips (và các loại hạt, nho khô, cranberry khô nếu dùng) vào hỗn hợp bột, trộn đều.
Bước 2: Tạo Hình và Nướng Bánh
-	Làm nóng lò nướng: Làm nóng lò ở 175°C.
-	Tạo hình bánh: Dùng muỗng hoặc tay, múc hỗn hợp bột và nặn thành các viên nhỏ, đặt lên khay nướng có lót giấy nến, cách nhau khoảng 5cm để bánh có không gian nở.
-	Nướng bánh: Nướng bánh trong lò khoảng 10-12 phút hoặc cho đến khi rìa bánh có màu vàng nâu. Bánh sẽ hơi mềm khi mới lấy ra, nhưng sẽ cứng lại khi nguội.
Bước 3: Làm Nguội 
Sau khi nướng, để bánh trên khay khoảng 5 phút rồi chuyển ra rack để bánh nguội hoàn toàn.`,
        product_id: 11,
        complete_time: 40,
      },
      {
        name: `ước 1: Nhào bột, nghỉ bột
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
Đặt bánh lên khay nướng, nướng ở 170°C trong 7 phút, giảm xuống 150°C và nướng thêm 8-13 phút. Tổng thời gian nướng từ 15-20 phút`,
        product_id: 12,
        complete_time: 540,
      },
      {
        name: `Bước 1: Làm hỗn hợp lòng đỏ trứng
-	Cho bơ vào lò vi sóng từ 40 – 50 giây để bơ tan chảy hoàn toàn. Nếu không có lò vi sóng, bạn có thể làm tan chảy bơ bằng cách đun trong chảo.
-	Tách lòng đỏ và lòng trắng trứng gà ra hai âu riêng. Tiếp theo, đổ 55 gram được vào âu lòng đỏ, đánh thật đều tay rồi cho tiếp 100 gram bơ đã đun chảy vào, tiếp tục đánh lên để các nguyên liệu hòa quyện vào nhau thành một hỗn hợp đồng nhất.
Bước 2: Làm hỗn hợp bột bánh Waffle
-	Cho lượng đường còn lại vào âu lòng trắng, đánh bông lên. Sau đó đổ hỗn hợp lòng trắng vào âu hỗn hợp lòng đỏ, trộn đều từ dưới lên trên đến khi hỗn hợp mịn màng, có màu vàng nhạt bắt mắt.
-	Rây bột qua một lần để bột thật mịn rồi cho vào hỗn hợp lòng đỏ cùng một chút muối và vani, trộn đều để hỗn hợp nhuyễn mịn và không bị vón cục.
Bước 3:  Nướng
Nướng trong khoảng 5 phút hoặc đợi bánh chuyển sang màu vàng nâu thì lấy ra khỏi khuôn. Dùng dao cắt bỏ phần thừa xung quanh, xếp bánh ra đĩa. Tiếp tục lặp lại thao tác nướng bánh đến khi hết phần bột đã chuẩn bị`,
        product_id: 13,
        complete_time: 30,
      },
      {
        name: `Bước 1: Tạo phần nhân kem
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
-	Cho khay bánh vào tiến hành nướng trong 20 phút`,
        product_id: 14,
        complete_time: 45,
      },
      {
        name: `Bước 1: Trộn các nguyên liệu ướt
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
-	Tranh thủ lúc bánh còn nóng nhúng vào hỗn hợp chocolate trắng hoặc đen.`,
        product_id: 15,
        complete_time: 900,
      },
    ],
  });
  const existingWarehouses = await prisma.wareHouse.findMany({
    select: { id: true },
  });
  const existingWarehouseIds = new Set(existingWarehouses.map((w) => w.id));
  await prisma.recipeDetail.createMany({
    data: [
      { warehouse_id: 1, quantity: 400, recipe_id: 1 },
      { warehouse_id: 9, quantity: 200, recipe_id: 1 },
      { warehouse_id: 34, quantity: 10, recipe_id: 1 },
      { warehouse_id: 26, quantity: 200, recipe_id: 1 },
      { warehouse_id: 27, quantity: 200, recipe_id: 1 },
      { warehouse_id: 29, quantity: 5, recipe_id: 1 },
      { warehouse_id: 30, quantity: 5, recipe_id: 1 },
      { warehouse_id: 2, quantity: 20, recipe_id: 1 },
      { warehouse_id: 32, quantity: 800, recipe_id: 1 },
      { warehouse_id: 33, quantity: 10, recipe_id: 1 },
      { warehouse_id: 22, quantity: 5, recipe_id: 1 },
      { warehouse_id: 33, quantity: 20, recipe_id: 1 },
      { warehouse_id: 28, quantity: 5, recipe_id: 1 },
      { warehouse_id: 33, quantity: 90, recipe_id: 1 },
      { warehouse_id: 24, quantity: 1, recipe_id: 1 },
      { warehouse_id: 1, quantity: 400, recipe_id: 2 },
      { warehouse_id: 4, quantity: 200, recipe_id: 2 },
      { warehouse_id: 6, quantity: 2, recipe_id: 2 },
      { warehouse_id: 6, quantity: 3, recipe_id: 2 },
      { warehouse_id: 5, quantity: 60, recipe_id: 2 },
      { warehouse_id: 3, quantity: 200, recipe_id: 2 },
      { warehouse_id: 23, quantity: 5, recipe_id: 2 },
      { warehouse_id: 2, quantity: 10, recipe_id: 2 },
      { warehouse_id: 1, quantity: 300, recipe_id: 3 },
      { warehouse_id: 7, quantity: 10, recipe_id: 3 },
      { warehouse_id: 23, quantity: 10, recipe_id: 3 },
      { warehouse_id: 6, quantity: 2, recipe_id: 3 },
      { warehouse_id: 3, quantity: 150, recipe_id: 3 },
      { warehouse_id: 8, quantity: 50, recipe_id: 3 },
      { warehouse_id: 25, quantity: 40, recipe_id: 3 },
      { warehouse_id: 24, quantity: 1, recipe_id: 3 },
      { warehouse_id: 15, quantity: 10, recipe_id: 3 },
      { warehouse_id: 6, quantity: 12, recipe_id: 4 },
      { warehouse_id: 6, quantity: 3, recipe_id: 4 },
      { warehouse_id: 1, quantity: 50, recipe_id: 4 },
      { warehouse_id: 10, quantity: 20, recipe_id: 4 },
      { warehouse_id: 3, quantity: 40, recipe_id: 4 },
      { warehouse_id: 31, quantity: 10, recipe_id: 4 },
      { warehouse_id: 25, quantity: 25, recipe_id: 4 },
      { warehouse_id: 8, quantity: 20, recipe_id: 4 },
      { warehouse_id: 2, quantity: 70, recipe_id: 4 },
      { warehouse_id: 23, quantity: 1, recipe_id: 4 },
      { warehouse_id: 24, quantity: 0.5, recipe_id: 4 },
      { warehouse_id: 26, quantity: 0.5, recipe_id: 4 },
      { warehouse_id: 1, quantity: 75, recipe_id: 5 },
      { warehouse_id: 8, quantity: 150, recipe_id: 5 },
      { warehouse_id: 11, quantity: 250, recipe_id: 5 },
      { warehouse_id: 6, quantity: 4, recipe_id: 5 },
      { warehouse_id: 12, quantity: 35, recipe_id: 5 },
      { warehouse_id: 13, quantity: 10, recipe_id: 5 },
      { warehouse_id: 2, quantity: 200, recipe_id: 5 },
      { warehouse_id: 23, quantity: 5, recipe_id: 5 },
      { warehouse_id: 24, quantity: 2, recipe_id: 5 },
      { warehouse_id: 14, quantity: 900, recipe_id: 6 },
      { warehouse_id: 1, quantity: 300, recipe_id: 6 },
      { warehouse_id: 6, quantity: 135, recipe_id: 6 },
      { warehouse_id: 3, quantity: 150, recipe_id: 6 },
      { warehouse_id: 15, quantity: 10, recipe_id: 6 },
      { warehouse_id: 2, quantity: 250, recipe_id: 6 },
      { warehouse_id: 23, quantity: 4, recipe_id: 6 },
      { warehouse_id: 8, quantity: 50, recipe_id: 6 },
      { warehouse_id: 25, quantity: 50, recipe_id: 6 },
      { warehouse_id: 18, quantity: 5, recipe_id: 6 },
      { warehouse_id: 3, quantity: 200, recipe_id: 7 },
      { warehouse_id: 1, quantity: 100, recipe_id: 7 },
      { warehouse_id: 8, quantity: 90, recipe_id: 7 },
      { warehouse_id: 6, quantity: 3, recipe_id: 7 },
      { warehouse_id: 2, quantity: 35, recipe_id: 7 },
      { warehouse_id: 10, quantity: 20, recipe_id: 7 },
      { warehouse_id: 8, quantity: 10, recipe_id: 7 },
      { warehouse_id: 23, quantity: 2.5, recipe_id: 7 },
      { warehouse_id: 24, quantity: 0.5, recipe_id: 7 },
      { warehouse_id: 1, quantity: 80, recipe_id: 8 },
      { warehouse_id: 7, quantity: 3.3, recipe_id: 8 },
      { warehouse_id: 3, quantity: 60, recipe_id: 8 },
      { warehouse_id: 6, quantity: 1, recipe_id: 8 },
      { warehouse_id: 24, quantity: 1, recipe_id: 8 },
      { warehouse_id: 24, quantity: 0.5, recipe_id: 8 },
      { warehouse_id: 8, quantity: 55, recipe_id: 8 },
      { warehouse_id: 2, quantity: 50, recipe_id: 8 },
      { warehouse_id: 23, quantity: 5, recipe_id: 8 },
      { warehouse_id: 20, quantity: 100, recipe_id: 9 },
      { warehouse_id: 1, quantity: 220, recipe_id: 9 },
      { warehouse_id: 18, quantity: 4.5, recipe_id: 9 },
      { warehouse_id: 6, quantity: 3, recipe_id: 9 },
      { warehouse_id: 3, quantity: 90, recipe_id: 9 },
      { warehouse_id: 8, quantity: 60, recipe_id: 9 },
      { warehouse_id: 25, quantity: 60, recipe_id: 9 },
      { warehouse_id: 2, quantity: 90, recipe_id: 9 },
      { warehouse_id: 23, quantity: 5, recipe_id: 9 },
      { warehouse_id: 17, quantity: 120, recipe_id: 10 },
      { warehouse_id: 2, quantity: 200, recipe_id: 10 },
      { warehouse_id: 6, quantity: 90, recipe_id: 10 },
      { warehouse_id: 2, quantity: 50, recipe_id: 10 },
      { warehouse_id: 23, quantity: 2.5, recipe_id: 10 },
      { warehouse_id: 30, quantity: 0, recipe_id: 10 },
      { warehouse_id: 22, quantity: 150, recipe_id: 10 },
      { warehouse_id: 1, quantity: 200, recipe_id: 11 },
      { warehouse_id: 8, quantity: 115, recipe_id: 11 },
      { warehouse_id: 6, quantity: 1, recipe_id: 11 },
      { warehouse_id: 18, quantity: 0.25, recipe_id: 11 },
      { warehouse_id: 11, quantity: 100, recipe_id: 11 },
      { warehouse_id: 17, quantity: 50, recipe_id: 11 },
      { warehouse_id: 19, quantity: 0.5, recipe_id: 11 },
      { warehouse_id: 15, quantity: 50, recipe_id: 11 },
      { warehouse_id: 2, quantity: 100, recipe_id: 11 },
      { warehouse_id: 2, quantity: 50, recipe_id: 11 },
      { warehouse_id: 24, quantity: 1.5, recipe_id: 11 },
      { warehouse_id: 23, quantity: 5, recipe_id: 11 },
      { warehouse_id: 9, quantity: 13.5, recipe_id: 12 },
      { warehouse_id: 3, quantity: 500, recipe_id: 12 },
      { warehouse_id: 8, quantity: 56, recipe_id: 12 },
      { warehouse_id: 1, quantity: 680, recipe_id: 12 },
      { warehouse_id: 6, quantity: 50, recipe_id: 12 },
      { warehouse_id: 8, quantity: 454, recipe_id: 12 },
      { warehouse_id: 23, quantity: 20, recipe_id: 12 },
      { warehouse_id: 23, quantity: 20, recipe_id: 12 },
      { warehouse_id: 24, quantity: 10, recipe_id: 12 },
      { warehouse_id: 2, quantity: 50, recipe_id: 12 },
      { warehouse_id: 1, quantity: 140, recipe_id: 13 },
      { warehouse_id: 6, quantity: 3, recipe_id: 13 },
      { warehouse_id: 8, quantity: 120, recipe_id: 13 },
      { warehouse_id: 23, quantity: 5, recipe_id: 13 },
      { warehouse_id: 24, quantity: 0.5, recipe_id: 13 },
      { warehouse_id: 2, quantity: 110, recipe_id: 13 },
      { warehouse_id: 2, quantity: 5, recipe_id: 13 },
      { warehouse_id: 1, quantity: 100, recipe_id: 14 },
      { warehouse_id: 8, quantity: 70, recipe_id: 14 },
      { warehouse_id: 3, quantity: 280, recipe_id: 14 },
      { warehouse_id: 6, quantity: 4, recipe_id: 14 },
      { warehouse_id: 22, quantity: 150, recipe_id: 14 },
      { warehouse_id: 10, quantity: 12, recipe_id: 14 },
      { warehouse_id: 2, quantity: 45, recipe_id: 14 },
      { warehouse_id: 24, quantity: 0.5, recipe_id: 14 },
      { warehouse_id: 23, quantity: 2, recipe_id: 14 },
      { warehouse_id: 1, quantity: 530, recipe_id: 15 },
      { warehouse_id: 12, quantity: 40, recipe_id: 15 },
      { warehouse_id: 8, quantity: 170, recipe_id: 15 },
      { warehouse_id: 2, quantity: 560, recipe_id: 15 },
      { warehouse_id: 9, quantity: 128, recipe_id: 15 },
      { warehouse_id: 21, quantity: 80, recipe_id: 15 },
      { warehouse_id: 6, quantity: 200, recipe_id: 15 },
      { warehouse_id: 3, quantity: 275, recipe_id: 15 },
      { warehouse_id: 23, quantity: 5, recipe_id: 15 },
      { warehouse_id: 24, quantity: 1, recipe_id: 15 },
    ].filter((rd) => existingWarehouseIds.has(rd.warehouse_id)),
  });
  await prisma.order.createMany({
    data: [
      {
        total_amount: 60000,
        order_status: 'PENDING',
        order_date: new Date(),
      },
      {
        total_amount: 45000,
        order_status: 'COMPLETED',
        order_date: new Date(),
      },
      {
        total_amount: 30000,
        order_status: 'CANCELED',
        order_date: new Date(),
      },
    ],
  });
  await prisma.orderDetail.createMany({
    data: [
      {
        order_id: 1,
        product_id: 1,
        product_quantity: 10,
      },
      {
        order_id: 2,
        product_id: 3,
        product_quantity: 12,
      },
      {
        order_id: 3,
        product_id: 4,
        product_quantity: 10,
      },
    ],
  });
  await prisma.transaction.createMany({
    data: [
      {
        payment_method: 'BANK_TRANSFER',
        status: 'SUCCESS',
        amount: 60000,
        order_id: 1,
      },
      {
        payment_method: 'E_WALLET',
        status: 'SUCCESS',
        amount: 45000,
        order_id: 2,
      },
    ],
  });
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
  await prisma.productTopping.createMany({
    data: [
      { product_id: 1, topping_id: 4 },
      { product_id: 1, topping_id: 20 },
      { product_id: 1, topping_id: 21 },
      { product_id: 1, topping_id: 22 },
      { product_id: 1, topping_id: 24 },
      { product_id: 1, topping_id: 25 },
      { product_id: 2, topping_id: 1 },
      { product_id: 2, topping_id: 3 },
      { product_id: 2, topping_id: 5 },
      { product_id: 2, topping_id: 6 },
      { product_id: 2, topping_id: 7 },
      { product_id: 2, topping_id: 12 },
      { product_id: 2, topping_id: 16 },
      { product_id: 2, topping_id: 17 },
      { product_id: 2, topping_id: 18 },
      { product_id: 2, topping_id: 19 },
      { product_id: 2, topping_id: 27 },
      { product_id: 2, topping_id: 28 },
      { product_id: 2, topping_id: 30 },
      { product_id: 2, topping_id: 32 },
      { product_id: 2, topping_id: 34 },
      { product_id: 3, topping_id: 1 },
      { product_id: 3, topping_id: 5 },
      { product_id: 3, topping_id: 6 },
      { product_id: 3, topping_id: 7 },
      { product_id: 3, topping_id: 10 },
      { product_id: 3, topping_id: 11 },
      { product_id: 3, topping_id: 12 },
      { product_id: 3, topping_id: 15 },
      { product_id: 3, topping_id: 16 },
      { product_id: 3, topping_id: 19 },
      { product_id: 3, topping_id: 26 },
      { product_id: 3, topping_id: 27 },
      { product_id: 3, topping_id: 29 },
      { product_id: 3, topping_id: 30 },
      { product_id: 3, topping_id: 31 },
      { product_id: 3, topping_id: 33 },
      { product_id: 3, topping_id: 34 },
      { product_id: 4, topping_id: 4 },
      { product_id: 4, topping_id: 9 },
      { product_id: 4, topping_id: 10 },
      { product_id: 5, topping_id: 1 },
      { product_id: 5, topping_id: 2 },
      { product_id: 5, topping_id: 3 },
      { product_id: 5, topping_id: 5 },
      { product_id: 5, topping_id: 6 },
      { product_id: 5, topping_id: 7 },
      { product_id: 5, topping_id: 11 },
      { product_id: 5, topping_id: 12 },
      { product_id: 5, topping_id: 13 },
      { product_id: 5, topping_id: 14 },
      { product_id: 5, topping_id: 15 },
      { product_id: 5, topping_id: 16 },
      { product_id: 5, topping_id: 18 },
      { product_id: 5, topping_id: 19 },
      { product_id: 5, topping_id: 26 },
      { product_id: 5, topping_id: 27 },
      { product_id: 5, topping_id: 28 },
      { product_id: 5, topping_id: 29 },
      { product_id: 5, topping_id: 31 },
      { product_id: 5, topping_id: 32 },
      { product_id: 5, topping_id: 33 },
      { product_id: 5, topping_id: 34 },
      { product_id: 6, topping_id: 1 },
      { product_id: 6, topping_id: 2 },
      { product_id: 6, topping_id: 10 },
      { product_id: 6, topping_id: 16 },
      { product_id: 6, topping_id: 20 },
      { product_id: 6, topping_id: 27 },
      { product_id: 7, topping_id: 8 },
      { product_id: 7, topping_id: 18 },
      { product_id: 7, topping_id: 19 },
      { product_id: 7, topping_id: 25 },
      { product_id: 7, topping_id: 31 },
      { product_id: 8, topping_id: 5 },
      { product_id: 8, topping_id: 9 },
      { product_id: 8, topping_id: 12 },
      { product_id: 8, topping_id: 13 },
      { product_id: 8, topping_id: 18 },
      { product_id: 8, topping_id: 24 },
      { product_id: 9, topping_id: 17 },
      { product_id: 9, topping_id: 20 },
      { product_id: 9, topping_id: 23 },
      { product_id: 9, topping_id: 26 },
      { product_id: 9, topping_id: 29 },
      { product_id: 10, topping_id: 3 },
      { product_id: 10, topping_id: 7 },
      { product_id: 10, topping_id: 13 },
      { product_id: 10, topping_id: 14 },
      { product_id: 10, topping_id: 32 },
      { product_id: 11, topping_id: 4 },
      { product_id: 11, topping_id: 6 },
      { product_id: 11, topping_id: 18 },
      { product_id: 11, topping_id: 22 },
      { product_id: 11, topping_id: 30 },
      { product_id: 12, topping_id: 2 },
      { product_id: 12, topping_id: 11 },
      { product_id: 12, topping_id: 21 },
      { product_id: 12, topping_id: 28 },
      { product_id: 13, topping_id: 8 },
      { product_id: 13, topping_id: 12 },
      { product_id: 13, topping_id: 19 },
      { product_id: 13, topping_id: 25 },
      { product_id: 13, topping_id: 33 },
      { product_id: 14, topping_id: 3 },
      { product_id: 14, topping_id: 10 },
      { product_id: 14, topping_id: 15 },
      { product_id: 14, topping_id: 17 },
      { product_id: 14, topping_id: 30 },
      { product_id: 15, topping_id: 5 },
      { product_id: 15, topping_id: 12 },
      { product_id: 15, topping_id: 26 },
      { product_id: 15, topping_id: 29 },
      { product_id: 15, topping_id: 34 },
    ],
  });

  // const orderProductToppingData = [
  //   { order_detail_id: 1, topping_id: 5, quantity: 2 },
  //   { order_detail_id: 2, topping_id: 12, quantity: 1 },
  //   { order_detail_id: 3, topping_id: 8, quantity: 3 },
  //   { order_detail_id: 4, topping_id: 6, quantity: 1 },
  //   { order_detail_id: 5, topping_id: 15, quantity: 2 },
  //   { order_detail_id: 6, topping_id: 10, quantity: 1 },
  //   { order_detail_id: 7, topping_id: 22, quantity: 3 },
  //   { order_detail_id: 8, topping_id: 11, quantity: 2 },
  //   { order_detail_id: 9, topping_id: 9, quantity: 1 },
  //   { order_detail_id: 10, topping_id: 13, quantity: 1 },
  //   { order_detail_id: 2, topping_id: 7, quantity: 2 },
  //   { order_detail_id: 3, topping_id: 20, quantity: 1 },
  //   { order_detail_id: 4, topping_id: 14, quantity: 1 },
  //   { order_detail_id: 5, topping_id: 19, quantity: 2 },
  //   { order_detail_id: 6, topping_id: 16, quantity: 3 },
  //   { order_detail_id: 7, topping_id: 21, quantity: 2 },
  //   { order_detail_id: 8, topping_id: 18, quantity: 1 },
  //   { order_detail_id: 9, topping_id: 17, quantity: 3 },
  //   { order_detail_id: 10, topping_id: 23, quantity: 1 },
  //   { order_detail_id: 1, topping_id: 3, quantity: 2 },
  //   { order_detail_id: 3, topping_id: 2, quantity: 1 },
  //   { order_detail_id: 4, topping_id: 24, quantity: 2 },
  //   { order_detail_id: 5, topping_id: 25, quantity: 1 },
  //   { order_detail_id: 6, topping_id: 26, quantity: 3 },
  //   { order_detail_id: 7, topping_id: 28, quantity: 1 },
  //   { order_detail_id: 8, topping_id: 30, quantity: 2 },
  //   { order_detail_id: 9, topping_id: 29, quantity: 1 },
  //   { order_detail_id: 10, topping_id: 31, quantity: 1 }
  // ];

  await prisma.orderProductTopping.createMany({
    data: [],
  });
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

  // const shippingInfoData = [
  //   {
  //     recipient_name: 'Nguyễn Văn Vũ',
  //     street_address: '123 Đường Lê Lợi',
  //     district: 'Quận 1',
  //     ward: 'Phường Bến Nghé',
  //     phone_number: '0901234567',
  //     notes: 'Giao hàng trong giờ hành chính',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Trần Thị Bự',
  //     street_address: '456 Đường Nguyễn Huệ',
  //     district: 'Quận 1',
  //     ward: 'Phường Bến Thành',
  //     phone_number: '0902345678',
  //     notes: 'Giao sau 5 giờ chiều',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Lê Văn Cao',
  //     street_address: '789 Đường Trường Chinh',
  //     district: 'Quận Tân Bình',
  //     ward: 'Phường 15',
  //     phone_number: '0903456789',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Phạm Thị Diệp',
  //     street_address: '135 Đường Hoàng Hoa Thám',
  //     district: 'Quận Bình Thạnh',
  //     ward: 'Phường 7',
  //     phone_number: '0904567890',
  //     notes: 'Giao hàng trong buổi sáng',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Đỗ Minh Em',
  //     street_address: '246 Đường Cách Mạng Tháng 8',
  //     district: 'Quận 3',
  //     ward: 'Phường 11',
  //     phone_number: '0905678901',
  //     notes: 'Giao trong giờ hành chính',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Bùi Văn Pha',
  //     street_address: '357 Đường Điện Biên Phủ',
  //     district: 'Quận Bình Thạnh',
  //     ward: 'Phường 25',
  //     phone_number: '0906789012',
  //     notes: 'Không gọi khi giao hàng',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Vũ Thị Gióng',
  //     street_address: '468 Đường Hai Bà Trưng',
  //     district: 'Quận 3',
  //     ward: 'Phường 6',
  //     phone_number: '0907890123',
  //     notes: 'Giao hàng sau 6 giờ chiều',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Ngô Văn Huy',
  //     street_address: '579 Đường Nguyễn Trãi',
  //     district: 'Quận 5',
  //     ward: 'Phường 8',
  //     phone_number: '0908901234',
  //     notes: 'Gọi điện trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Trịnh Thị Ý',
  //     street_address: '680 Đường Võ Văn Kiệt',
  //     district: 'Quận 1',
  //     ward: 'Phường Cô Giang',
  //     phone_number: '0909012345',
  //     notes: 'Giao hàng trong buổi chiều',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Lâm Văn Châu',
  //     street_address: '791 Đường Phan Xích Long',
  //     district: 'Quận Phú Nhuận',
  //     ward: 'Phường 2',
  //     phone_number: '0910123456',
  //     notes: 'Giao trong giờ hành chính',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Đặng Văn Kha',
  //     street_address: '12 Đường Cộng Hòa',
  //     district: 'Quận Tân Bình',
  //     ward: 'Phường 4',
  //     phone_number: '0901123456',
  //     notes: 'Giao buổi sáng',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Nguyễn Thị Lan',
  //     street_address: '34 Đường Nguyễn Văn Trỗi',
  //     district: 'Quận Phú Nhuận',
  //     ward: 'Phường 10',
  //     phone_number: '0902123456',
  //     notes: 'Giao hàng trong giờ hành chính',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Lý Văn Minh',
  //     street_address: '56 Đường Võ Thị Sáu',
  //     district: 'Quận 3',
  //     ward: 'Phường Tân Định',
  //     phone_number: '0903123456',
  //     notes: 'Không gọi khi giao hàng',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Lê Thị Ngọc',
  //     street_address: '78 Đường Nguyễn Kiệm',
  //     district: 'Quận Gò Vấp',
  //     ward: 'Phường 3',
  //     phone_number: '0904123456',
  //     notes: 'Giao trước 5 giờ chiều',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Phan Văn O',
  //     street_address: '90 Đường Lạc Long Quân',
  //     district: 'Quận 11',
  //     ward: 'Phường 5',
  //     phone_number: '0905123456',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Hà Thị Phương',
  //     street_address: '11 Đường Tân Sơn Nhì',
  //     district: 'Quận Tân Phú',
  //     ward: 'Phường 2',
  //     phone_number: '0906123456',
  //     notes: 'Giao trong giờ hành chính',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Bùi Văn Quyết',
  //     street_address: '13 Đường Quang Trung',
  //     district: 'Quận Gò Vấp',
  //     ward: 'Phường 8',
  //     phone_number: '0907123456',
  //     notes: 'Không gọi trước',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Trịnh Văn Rượu',
  //     street_address: '15 Đường Đinh Tiên Hoàng',
  //     district: 'Quận 1',
  //     ward: 'Phường Đa Kao',
  //     phone_number: '0908123456',
  //     notes: 'Giao hàng trong buổi sáng',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Nguyễn Thị Sâm',
  //     street_address: '17 Đường Phạm Văn Đồng',
  //     district: 'Quận Thủ Đức',
  //     ward: 'Phường Linh Đông',
  //     phone_number: '0909123456',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Đoàn Văn Tùng',
  //     street_address: '19 Đường Bình Long',
  //     district: 'Quận Bình Tân',
  //     ward: 'Phường Bình Hưng Hòa',
  //     phone_number: '0910123456',
  //     notes: 'Giao hàng buổi tối',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Phạm Văn Uy',
  //     street_address: '21 Đường Nguyễn Xí',
  //     district: 'Quận Bình Thạnh',
  //     ward: 'Phường 13',
  //     phone_number: '0911123456',
  //     notes: 'Giao hàng vào cuối tuần',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Trần Thị Vũ',
  //     street_address: '23 Đường Điện Biên Phủ',
  //     district: 'Quận Bình Thạnh',
  //     ward: 'Phường 25',
  //     phone_number: '0912123456',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Lê Thị Quyên',
  //     street_address: '25 Đường Hoàng Văn Thụ',
  //     district: 'Quận Tân Bình',
  //     ward: 'Phường 4',
  //     phone_number: '0913123456',
  //     notes: 'Giao hàng trong giờ hành chính',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Lý Văn Xug',
  //     street_address: '27 Đường Cộng Hòa',
  //     district: 'Quận Tân Bình',
  //     ward: 'Phường 12',
  //     phone_number: '0914123456',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Nguyễn Thị Yên',
  //     street_address: '29 Đường Nguyễn Hữu Thọ',
  //     district: 'Quận 7',
  //     ward: 'Phường Tân Hưng',
  //     phone_number: '0915123456',
  //     notes: 'Giao hàng buổi chiều',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Bùi Văn Viết',
  //     street_address: '31 Đường Nguyễn Hữu Thọ',
  //     district: 'Quận 7',
  //     ward: 'Phường Tân Phong',
  //     phone_number: '0916123456',
  //     notes: 'Không gọi trước',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Trần Văn Á',
  //     street_address: '33 Đường Nguyễn Văn Linh',
  //     district: 'Quận 7',
  //     ward: 'Phường Tân Thuận',
  //     phone_number: '0917123456',
  //     notes: 'Giao sau 5 giờ chiều',
  //     shipping_status: 'DELIVERED',
  //   },
  //   {
  //     recipient_name: 'Nguyễn Thị Bưởi',
  //     street_address: '35 Đường Quốc Lộ 1A',
  //     district: 'Quận Bình Tân',
  //     ward: 'Phường An Lạc',
  //     phone_number: '0918123456',
  //     notes: 'Gọi trước khi giao',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Phạm Văn Cao',
  //     street_address: '37 Đường Xa Lộ Hà Nội',
  //     district: 'Quận 9',
  //     ward: 'Phường Hiệp Phú',
  //     phone_number: '0919123456',
  //     notes: 'Giao trong giờ hành chính',
  //     shipping_status: 'IN_TRANSIT',
  //   },
  //   {
  //     recipient_name: 'Lê Thị Dung',
  //     street_address: '39 Đường Mai Chí Thọ',
  //     district: 'Quận 2',
  //     ward: 'Phường Thạnh Mỹ Lợi',
  //     phone_number: '0920123456',
  //     notes: 'Giao hàng buổi sáng',
  //     shipping_status: 'DELIVERED',
  //   },
  // ];

  // await prisma.shippingInfo.createMany({
  //   data: shippingInfoData,
  // });

  // const orderDetailProcessData = [
  //   {
  //     oven_id: 1,
  //     order_detail_id: 3,
  //     processing_status: 'WAITING',
  //     order_quantity: 5,
  //     processing_quantity: 0,
  //     processed_quantity: 0,
  //   },
  //   {
  //     oven_id: 2,
  //     order_detail_id: 2,
  //     processing_status: 'IN_PROGRESS',
  //     order_quantity: 8,
  //     processing_quantity: 4,
  //     processed_quantity: 3,
  //   },
  //   {
  //     oven_id: 3,
  //     order_detail_id: 5,
  //     processing_status: 'COMPLETED',
  //     order_quantity: 7,
  //     processing_quantity: 7,
  //     processed_quantity: 7,
  //   },
  //   {
  //     oven_id: 4,
  //     order_detail_id: 6,
  //     processing_status: 'WAITING',
  //     order_quantity: 6,
  //     processing_quantity: 0,
  //     processed_quantity: 0,
  //   },
  //   {
  //     oven_id: 5,
  //     order_detail_id: 4,
  //     processing_status: 'IN_PROGRESS',
  //     order_quantity: 9,
  //     processing_quantity: 6,
  //     processed_quantity: 5,
  //   },
  //   {
  //     oven_id: 6,
  //     order_detail_id: 1,
  //     processing_status: 'COMPLETED',
  //     order_quantity: 4,
  //     processing_quantity: 4,
  //     processed_quantity: 4,
  //   },
  //   {
  //     oven_id: 7,
  //     order_detail_id: 6,
  //     processing_status: 'WAITING',
  //     order_quantity: 3,
  //     processing_quantity: 0,
  //     processed_quantity: 0,
  //   },
  //   {
  //     oven_id: 1,
  //     order_detail_id: 8,
  //     processing_status: 'IN_PROGRESS',
  //     order_quantity: 7,
  //     processing_quantity: 5,
  //     processed_quantity: 4,
  //   },
  //   {
  //     oven_id: 2,
  //     order_detail_id: 9,
  //     processing_status: 'COMPLETED',
  //     order_quantity: 8,
  //     processing_quantity: 8,
  //     processed_quantity: 8,
  //   },
  //   {
  //     oven_id: 3,
  //     order_detail_id: 10,
  //     processing_status: 'WAITING',
  //     order_quantity: 2,
  //     processing_quantity: 0,
  //     processed_quantity: 0,
  //   },
  // ];

  // await prisma.orderDetailProcess.createMany({
  //   data: orderDetailProcessData,
  // });

  await prisma.userAccount.createMany({
    data: [],
  });
}

main()
  .then(async () => {
    console.log('Database seeded successfully!');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Error seeding database:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
