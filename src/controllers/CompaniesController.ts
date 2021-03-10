import { Response, Request } from 'express';
import { getConnection } from 'typeorm';
import jsonwebtoken from 'jsonwebtoken';

import Address from '../repositories/entities/Address';
import Company from '../repositories/entities/Company';
import environment from '../configs/environment';

class CompaniesController {
  async create(request: Request, response: Response) {
    try {
      const {
        number,
        district,
        street,
        city,
        state,
        name,
        email,
        password,
        contact
      } = request.body;

      await getConnection().transaction(async transactionalEntityManager => {
        
        // saving address
        const address = new Address();
        address.city = city;
        address.district = district;
        address.street = street;
        address.state = state;
        address.number = number;

        // making changes on database
        const addr = await transactionalEntityManager.save(address);
        
        // new company register
        const company = new Company();
        
        company.name = name;
        company.email = email;
        company.password = password;
        company.contact = contact;
        company.address = addr;
        
        // saving company on database
        await transactionalEntityManager.save(company);
        return response.status(200).json(company);
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error!'
      });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const company = await Company.findOne({ email, password });
      if (company) {
        return res.status(200).json({
          signed: true,
          token: jsonwebtoken.sign({ id: company.id, permission: 'company' }, environment.jwt_secret)
        });
      } else {
        return res.status(403).json({
          signed: false
        });
      }
    } catch (err) {
      return res.status(400).json({
        signed: false,
        message: err.message || 'Unexpected error'
      });
    }
  }
};

export default new CompaniesController();