import { Response, Request } from 'express'
import Company from '../repositories/entities/Company';
import Product from '../repositories/entities/Product'

class ProductsController {
  async create(req : Request, res : Response) {
    try {
      const { title, description, price, amount } = req.body;
      
      if (title && price && amount) {
        const { id, permission } = req.body.token_data;

        const product = new Product();
        const company = await Company.findOne({ id });
        
        if (company && permission === 'company') {
          product.title = title;
          product.description = description;
          product.price = price;
          product.amount = amount;
          product.company = company;

          await product.save();
          return res.status(200).json(product);
        } else {
          return res.status(400).json({
            message: 'Invalid company token | Company not exists.'
          });
        }
      }

      return res.status(400).json({
        message: 'Invalid request'
      });

    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error!' });
    }
  }
  async list() {

  }
};

export default new ProductsController();