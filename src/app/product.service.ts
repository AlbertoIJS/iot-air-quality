import apiClient from "@/config/api.client";
import { Product } from "@/app/product.interface";

class ProductService {
  async create(product: Product) {
    return apiClient.post("/products", product);
  }

  async findAll() {
    return apiClient.get("/products");
  }
}

export default new ProductService();
