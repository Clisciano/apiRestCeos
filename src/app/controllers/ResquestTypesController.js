import RequestTypes from '../models/RequestTypes.js';

class RequestTypesController {
    async store(req, res) {
        const { id, descricao } = await RequestTypes.create(req.body);

        return res.json({
            id,
            descricao,
        });
    }

    async index(req, res) {
        const requestTypes = await RequestTypes.findAll();

        return res.json(requestTypes);
    }

    async update(req, res) {
        const { id } = req.params;
        const { descricao } = req.body;

        const requestTypeExists = await RequestTypes.findOne({
            where: { id },
        });

        if (!requestTypeExists) {
            return res
                .status(400)
                .json({ error: 'Request Type already exists.' });
        }

        const response = await requestTypeExists.update({
            descricao,
        });

        return res.json(response);
    }
}

export default new RequestTypesController();
