export default class CompaniesController {
  async create(request: Request, response: Response) {
    try {
      const {
        name,
        email,
        description,
        password,
      } = request.body;
    } catch (err) {

    }
  }
};