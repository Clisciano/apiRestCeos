import Visitor from '../models/Visitors.js';
// import PhysicalPerson from '../models/PhysicalPerson';
import Infopen from '../models/infopen.js';

class VisitorController {
    async store(req, res) {
        const { id, nome, infopen_id } = await Visitor.create(req.body);

        return res.json({
            id,
            nome,
            infopen_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const visitor = await Visitor.findAll({
            attributes: ['id', 'nome'],
            where: { infopen_id: id },
        });

        return res.json(visitor);
    }

    async index(req, res) {
        const visitor = await Visitor.findAll({
            include: [
                {
                    model: Infopen,
                    attributes: ['id', 'numero'],
                },
            ],
        });

        return res.json(visitor);
    }

    async update(req, res) {
        const { id } = req.params;

        const { nome } = req.body;

        const visitorExists = await Visitor.findOne({
            where: { id },
        });

        if (!visitorExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await visitorExists.update({
            nome,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Visitor.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new VisitorController();
