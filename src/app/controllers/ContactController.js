import Contact from '../models/Contact.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class ContactController {
    async store(req, res) {
        const { id, telefone, email, rede_social, person_pf_id } =
            await Contact.create(req.body);

        return res.json({
            id,
            telefone,
            email,
            rede_social,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await Contact.findAll({
            attributes: ['id', 'telefone', 'email', 'rede_social'],
            where: { person_pf_id: id },
        });

        return res.json(person);
    }

    async index(req, res) {
        const Contacts = await Contact.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(Contacts);
    }

    async update(req, res) {
        const { id } = req.params;

        const { telefone, email, rede_social } = req.body;

        const contactExists = await Contact.findOne({
            where: { id },
        });

        if (!contactExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await contactExists.update({
            telefone,
            email,
            rede_social,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Contact.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new ContactController();
