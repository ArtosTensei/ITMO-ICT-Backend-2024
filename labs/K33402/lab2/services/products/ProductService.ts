import ProductRepository from "../../repositories/products/ProductRepository";

class ProductService {
  async getAll() {
    return ProductRepository.getAll();
  }

  async getById(id: number) {
    return ProductRepository.getById(id);
  }

  async create(productData: any) {
    return ProductRepository.create(productData);
  }

  async update(id: number, productData: any) {
    return ProductRepository.update(id, productData);
  }

  async delete(id: number) {
    return ProductRepository.delete(id);
  }

  async getByTags(tagIds: number[]) {
    const validTagIds = tagIds.filter((id) => !isNaN(id));
    if (validTagIds.length === 0) {
      throw new Error("No tags provided for filtering");
    }
    return ProductRepository.getByTags(tagIds);
  }
}

export default new ProductService();
