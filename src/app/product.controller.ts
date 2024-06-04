import ProductService from "@/app/product.service";
import { Product, Products } from "@/app/product.interface";

class ProductController {
  async create(req: Request): Promise<Product> {
    const product = await req.json();
    const data = await ProductService.create(product);
    return data.json();
  }

  async getAll(): Promise<Products[]> {
    try {
      const data = await ProductService.findAll();
      return data.json();
    } catch (e) {
      throw e;
    }
  }
}

export default new ProductController();
