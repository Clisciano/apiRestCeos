import RecordPc from '../models/RecordPc.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class RecordPcController {
    async store(req, res) {
        const {
            id,
            num_ocorrencia,
            tipo_ocorrencia,
            delegacia,
            tipo_infracao,
            participacao,
            person_pf_id,
        } = await RecordPc.create(req.body);

        return res.json({
            id,
            num_ocorrencia,
            tipo_ocorrencia,
            delegacia,
            tipo_infracao,
            participacao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const recordPcs = await RecordPc.findAll({
            attributes: [
                'id',
                'num_ocorrencia',
                'tipo_ocorrencia',
                'delegacia',
                'tipo_infracao',
                'participacao',
            ],
            where: { person_pf_id: id },
        });

        return res.json(recordPcs);
    }

    async index(req, res) {
        const recordPcs = await RecordPc.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(recordPcs);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            num_ocorrencia,
            tipo_ocorrencia,
            delegacia,
            tipo_infracao,
            participacao,
        } = req.body;

        const recordPcExists = await RecordPc.findOne({
            where: { id },
        });

        if (!recordPcExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await recordPcExists.update({
            num_ocorrencia,
            tipo_ocorrencia,
            delegacia,
            tipo_infracao,
            participacao,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await RecordPc.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new RecordPcController();
