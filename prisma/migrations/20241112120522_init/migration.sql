-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('SUCCESS', 'PENDING', 'FAILED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('BANK_TRANSFER', 'E_WALLET');

-- CreateEnum
CREATE TYPE "ShippingStatus" AS ENUM ('IN_TRANSIT', 'DELIVERED');

-- CreateEnum
CREATE TYPE "ProcessingStatus" AS ENUM ('WAITING', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "OvenStatus" AS ENUM ('AVAILABLE', 'IN_USE');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WareHouse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" INTEGER,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "img_path" TEXT,
    "max_daily_quantity_limit" INTEGER,
    "product_capacity_per_batch" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "complete_time" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeDetail" (
    "id" SERIAL NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "RecipeDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "order_status" "OrderStatus" NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER,
    "product_quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topping" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Topping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTopping" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "topping_id" INTEGER NOT NULL,

    CONSTRAINT "ProductTopping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingInfo" (
    "id" SERIAL NOT NULL,
    "recipient_name" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "ward" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "notes" TEXT,
    "order_id" INTEGER NOT NULL,
    "shipping_status" "ShippingStatus" NOT NULL,

    CONSTRAINT "ShippingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetailProcess" (
    "id" SERIAL NOT NULL,
    "oven_id" INTEGER,
    "order_detail_id" INTEGER NOT NULL,
    "processing_status" "ProcessingStatus" NOT NULL,
    "order_quantity" INTEGER NOT NULL,
    "processing_quantity" INTEGER NOT NULL,
    "processed_quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderDetailProcess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oven" (
    "oven_id" SERIAL NOT NULL,
    "oven_product_capacity_id" INTEGER,
    "status" "OvenStatus" NOT NULL,
    "current_capacity_used" INTEGER NOT NULL,
    "current_baking_type" TEXT,
    "start_time" TIMESTAMP(3),
    "time_remaining" INTEGER,

    CONSTRAINT "Oven_pkey" PRIMARY KEY ("oven_id")
);

-- CreateTable
CREATE TABLE "OrderProductTopping" (
    "id" SERIAL NOT NULL,
    "order_detail_id" INTEGER NOT NULL,
    "topping_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderProductTopping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToProductTopping" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeDetailToWareHouse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_order_id_key" ON "Transaction"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "ShippingInfo_order_id_key" ON "ShippingInfo"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductTopping_AB_unique" ON "_ProductToProductTopping"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductTopping_B_index" ON "_ProductToProductTopping"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeDetailToWareHouse_AB_unique" ON "_RecipeDetailToWareHouse"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeDetailToWareHouse_B_index" ON "_RecipeDetailToWareHouse"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeDetail" ADD CONSTRAINT "RecipeDetail_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTopping" ADD CONSTRAINT "ProductTopping_topping_id_fkey" FOREIGN KEY ("topping_id") REFERENCES "Topping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingInfo" ADD CONSTRAINT "ShippingInfo_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetailProcess" ADD CONSTRAINT "OrderDetailProcess_order_detail_id_fkey" FOREIGN KEY ("order_detail_id") REFERENCES "OrderDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductTopping" ADD CONSTRAINT "OrderProductTopping_order_detail_id_fkey" FOREIGN KEY ("order_detail_id") REFERENCES "OrderDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductTopping" ADD CONSTRAINT "OrderProductTopping_topping_id_fkey" FOREIGN KEY ("topping_id") REFERENCES "Topping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductTopping" ADD CONSTRAINT "_ProductToProductTopping_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToProductTopping" ADD CONSTRAINT "_ProductToProductTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductTopping"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeDetailToWareHouse" ADD CONSTRAINT "_RecipeDetailToWareHouse_A_fkey" FOREIGN KEY ("A") REFERENCES "RecipeDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeDetailToWareHouse" ADD CONSTRAINT "_RecipeDetailToWareHouse_B_fkey" FOREIGN KEY ("B") REFERENCES "WareHouse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
