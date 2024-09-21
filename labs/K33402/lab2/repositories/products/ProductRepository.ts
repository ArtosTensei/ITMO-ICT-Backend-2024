import { Op } from "sequelize";
import { Product } from "../../models/products/Product";
import Tag from "../../models/tags/Tag";
class ProductRepository {
  async getAll() {
    return Product.findAll();
  }

  async getById(id: number) {
    return Product.findByPk(id);
  }

  async create(productData: any) {
    return Product.create(productData);
  }

  async update(id: number, productData: any) {
    const product = await Product.findByPk(id);
    if (product) {
      return product.update(productData);
    }
    return null;
  }

  async delete(id: number) {
    const product = await Product.findByPk(id);
    if (product) {
      return product.destroy();
    }
    return null;
  }

  async getByTags(tagIds: number[]) {
    return Product.findAll({
      include: [
        {
          model: Tag,
          where: {
            id: {
              [Op.in]: tagIds,
            },
          },
          through: { attributes: [] },
        },
      ],
    });
  }
}

export default new ProductRepository();
