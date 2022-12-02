import Note from '../models/Note.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class NoteController {
    async store(req, res) {
        const { id, descricao, person_pf_id } =
            await Note.create(req.body);

        return res.json({
            id,
            descricao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await PhysicalPerson.findOne({
            attributes: ['nome'],
            where: { id },
            include: [
                {
                    model: Note,
                    where: { person_pf_id: id },
                    attributes: ['id', 'descricao'],
                },
            ],
        });

        return res.json(person);
    }

    async index(req, res) {
        const note = await Note.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(note);
    }

    async update(req, res) {
        const { id } = req.params;

        const { descricao } = req.body;

        const noteExists = await Note.findOne({
            where: { id },
        });

        if (!noteExists) {
            return res
                .status(400)
                .json({ error: 'observation already exists.' });
        }

        const response = await noteExists.update({
            descricao,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Note.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new NoteController();
