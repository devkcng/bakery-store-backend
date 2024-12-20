import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    try {
      const products = await this.prisma.product.findMany({
        include: {
          category: true, // Lấy thông tin của category
          productToppings: {
            include: {
              topping: true, // Lấy topping thông qua quan hệ productToppings
            },
          },
          recipes: true, // Lấy thông tin công thức liên quan (nếu có)
          orderDetails: true, // Lấy thông tin chi tiết đơn hàng (nếu có)
        },
      });

      // Chuyển đổi dữ liệu thành định dạng bạn muốn trả về (nếu cần)
      const responseData = products.map((product) => ({
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
        category: product.category,
        toppings: product.productToppings.map((productTopping) => ({
          id: productTopping.topping.id,
          name: productTopping.topping.name,
          price: productTopping.topping.price,
        })),
        recipes: product.recipes, // Nếu có thông tin recipes liên quan
        orderDetails: product.orderDetails, // Nếu có thông tin orderDetails liên quan
      }));

      return { message: 'OK', products: responseData };
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: {
          include: {
            products: {
              where: { NOT: { id } }, // Loại bỏ sản phẩm hiện tại khỏi danh sách sản phẩm liên quan
              take: 3, // Giới hạn số lượng sản phẩm liên quan
            },
          },
        },
        productToppings: {
          include: {
            topping: true, // Lấy topping thông qua quan hệ productToppings
          },
        },
      },
    });

    // if (!product) {
    //   throw new NotFoundException(`Product with ID ${id} not found`);
    // }

    // Chuyển đổi dữ liệu thành định dạng mong muốn
    const responseData = {
      product: {
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
      },
      toppings: product.productToppings.map((productTopping) => ({
        id: productTopping.topping.id,
        name: productTopping.topping.name,
        price: productTopping.topping.price,
      })),
      relatedProducts: product.category.products.map((relatedProduct) => ({
        id: relatedProduct.id,
        name: relatedProduct.name,
        price: relatedProduct.price,
        img_path: relatedProduct.img_path,
      })),
    };

    return responseData;
  }

  async findByCat(category_id: number) {
    try {
      if (isNaN(category_id) || category_id <= 0) {
        throw new Error('Invalid Category ID');
      }
      const products = await this.prisma.product.findMany({
        where: { category_id },
        include: {
          category: true, // Lấy thông tin của category
          productToppings: {
            include: {
              topping: true, // Lấy topping thông qua quan hệ productToppings
            },
          },
          recipes: true, // Lấy thông tin công thức liên quan (nếu có)
          orderDetails: true, // Lấy thông tin chi tiết đơn hàng (nếu có)
        },
      });

      // Chuyển đổi dữ liệu thành định dạng bạn muốn trả về (nếu cần)
      const responseData = products.map((product) => ({
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
        category: product.category,
        toppings: product.productToppings.map((productTopping) => ({
          id: productTopping.topping.id,
          name: productTopping.topping.name,
          price: productTopping.topping.price,
        })),
        recipes: product.recipes, // Nếu có thông tin recipes liên quan
        orderDetails: product.orderDetails, // Nếu có thông tin orderDetails liên quan
      }));

      return { message: 'OK', products: responseData };
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  async searchByName(keyword: string) {
    try {
      // Kiểm tra nếu keyword rỗng
      if (!keyword || keyword.trim() === '') {
        throw new Error('Keyword is required');
      }

      // Tìm kiếm sản phẩm theo tên gần giống với từ khóa (không phân biệt chữ hoa/chữ thường)
      const products = await this.prisma.product.findMany({
        where: {
          name: {
            contains: keyword, // Tìm kiếm những sản phẩm có tên chứa keyword
            mode: 'insensitive', // Không phân biệt chữ hoa, chữ thường
          },
        },
        include: {
          category: true, // Lấy thông tin của category
          productToppings: {
            include: {
              topping: true, // Lấy topping thông qua quan hệ productToppings
            },
          },
          recipes: true, // Lấy thông tin công thức liên quan (nếu có)
          orderDetails: true, // Lấy thông tin chi tiết đơn hàng (nếu có)
        },
      });

      // Chuyển đổi dữ liệu thành định dạng bạn muốn trả về (nếu cần)
      const responseData = products.map((product) => ({
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
        category: product.category,
        toppings: product.productToppings.map((productTopping) => ({
          id: productTopping.topping.id,
          name: productTopping.topping.name,
          price: productTopping.topping.price,
        })),
        recipes: product.recipes, // Nếu có thông tin recipes liên quan
        orderDetails: product.orderDetails, // Nếu có thông tin orderDetails liên quan
      }));

      return { message: 'OK', products: responseData };
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }

  async getAllData() {
    const products = await this.prisma.product.findMany({
      include: {
        productToppings: {
          include: {
            topping: true, // Lấy thông tin topping từ bảng Topping
          },
        },
        recipes: {
          include: {
            recipeDetails: {
              include: {
                warehouse: true, // Lấy thông tin nguyên liệu từ bảng WareHouse
              },
            },
          },
        },
        category: true, // Lấy thông tin category nếu có
      },
    });

    // Map dữ liệu để định dạng lại kết quả
    return products.map((product) => ({
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        img_path: product.img_path,
        max_daily_quantity_limit: product.max_daily_quantity_limit,
        product_capacity_per_batch: product.product_capacity_per_batch,
        category: product.category?.name || null, // Lấy tên category nếu có
      },
      toppings: product.productToppings.map((productTopping) => ({
        id: productTopping.topping.id,
        name: productTopping.topping.name,
        price: productTopping.topping.price,
      })),
      recipeDetails: product.recipes.flatMap((recipe) =>
        recipe.recipeDetails.map((detail) => ({
          id: detail.id,
          ingredientName: detail.warehouse.name,
          quantity: detail.quantity,
        })),
      ),
    }));
  }
}
