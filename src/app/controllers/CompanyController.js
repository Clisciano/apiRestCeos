import Company from '../models/Company';
import PhysicalPerson from '../models/PhysicalPerson';

class CompanyController {
    async store(req, res) {
        const {
            id,
            nome_empresarial,
            nome_fantasia,
            cnpj,
            capital_social,
            cnae,
            endereco,
            qsa_atual,
            qsa_anterior,
            contador,
            situacao,
            person_pf_id,
        } = await Company.create(req.body);

        return res.json({
            id,
            nome_empresarial,
            nome_fantasia,
            cnpj,
            capital_social,
            cnae,
            endereco,
            qsa_atual,
            qsa_anterior,
            contador,
            situacao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await Company.findAll({
            attributes: [
                'id',
                'nome_empresarial',
                'nome_fantasia',
                'cnpj',
                'capital_social',
                'cnae',
                'endereco',
                'qsa_atual',
                'qsa_anterior',
                'contador',
                'situacao',
            ],
            where: { person_pf_id: id },
        });

        return res.json(person);
    }

    async index(req, res) {
        const companys = await Company.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(companys);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            nome_empresarial,
            nome_fantasia,
            cnpj,
            capital_social,
            cnae,
            endereco,
            qsa_atual,
            qsa_anterior,
            contador,
            situacao,
        } = req.body;

        const companyExists = await Company.findOne({
            where: { id },
        });

        if (!companyExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await companyExists.update({
            nome_empresarial,
            nome_fantasia,
            cnpj,
            capital_social,
            cnae,
            endereco,
            qsa_atual,
            qsa_anterior,
            contador,
            situacao,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Company.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new CompanyController();
