import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { ProductsModule } from './modules/products/products.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { RecipeDetailsModule } from './modules/recipe-details/recipe-details.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderDetailsModule } from './modules/order-details/order-details.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { ToppingsModule } from './modules/toppings/toppings.module';
import { ProductToppingsModule } from './modules/product-toppings/product-toppings.module';
import { ShippingInfosModule } from './modules/shipping-infos/shipping-infos.module';
import { OrderDetailProcessesModule } from './modules/order-detail-processes/order-detail-processes.module';
import { OvensModule } from './modules/ovens/ovens.module';
import { OrderProductToppingsModule } from './modules/order-product-toppings/order-product-toppings.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    CategoriesModule,
    WarehousesModule,
    ProductsModule,
    RecipesModule,
    RecipeDetailsModule,
    OrdersModule,
    OrderDetailsModule,
    TransactionsModule,
    ToppingsModule,
    ProductToppingsModule,
    ShippingInfosModule,
    OrderDetailProcessesModule,
    OvensModule,
    OrderProductToppingsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
