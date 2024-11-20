INSERT INTO Oven (oven_product_capacity_id, status, current_capacity_used, current_baking_type, start_time, time_remaining) VALUES
    (1, 'AVAILABLE', 0, NULL, NULL, NULL),
    (2, 'IN_USE', 2, 'bread', '2024-11-14 09:00:00', 30),
    (3, 'AVAILABLE', 0, NULL, NULL, NULL),
    (4, 'IN_USE', 3, 'cookies', '2024-11-14 10:15:00', 45),
    (5, 'AVAILABLE', 0, NULL, NULL, NULL),
    (6, 'IN_USE', 3, 'pizza', '2024-11-14 11:30:00', 15),
    (7, 'AVAILABLE', 0, NULL, NULL, NULL);
   
-- Tạo dữ liệu cho bảng OrderDetail
INSERT INTO "OrderDetail" (order_id, product_id, product_quantity) VALUES
  (1, 1, 10),
  (2, 3, 12),  
  (3, 4, 10),
  (4, 1, 10),
  (5, 3, 12),  
  (6, 4, 10),
  (7, 1, 10),
  (8, 3, 12),  
  (9, 4, 10),
  (10, 4, 10),

INSERT INTO OrderDetailProcess (oven_id, order_detail_id, processing_status, order_quantity, processing_quantity, processed_quantity) VALUES
    (1, 3, 'WAITING', 5, 0, 0),
    (2, 2, 'IN_PROGRESS', 8, 4, 3),
    (3, 5, 'COMPLETED', 7, 7, 7),
    (4, 6, 'WAITING', 6, 0, 0),
    (5, 4, 'IN_PROGRESS', 9, 6, 5),
    (6, 1, 'COMPLETED', 4, 4, 4),
    (7, 6, 'WAITING', 3, 0, 0),
    (1, 8, 'IN_PROGRESS', 7, 5, 4),
    (2, 9, 'COMPLETED', 8, 8, 8),
    (3, 10, 'WAITING', 2, 0, 0);

-- Insert sample data into OrderProductTopping table
INSERT INTO OrderProductTopping (order_detail_id, topping_id, quantity) VALUES
    (1, 5, 2),
    (2, 12, 1),
    (3, 8, 3),
    (4, 6, 1),
    (5, 15, 2),
    (6, 10, 1),
    (7, 22, 3),
    (8, 11, 2),
    (9, 9, 1),
    (10, 13, 1),
    (2, 7, 2),
    (3, 20, 1),
    (4, 14, 1),
    (5, 19, 2),
    (6, 16, 3),
    (7, 21, 2),
    (8, 18, 1),
    (9, 17, 3),
    (10, 23, 1),
    (1, 3, 2),
    (3, 2, 1),
    (4, 24, 2),
    (5, 25, 1),
    (6, 26, 3),
    (7, 28, 1),
    (8, 30, 2),
    (9, 29, 1),
    (10, 31, 1);
