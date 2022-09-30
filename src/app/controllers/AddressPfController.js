import Address from '../models/AddressPf';
import PhysicalPerson from '../models/PhysicalPerson';

class AddressController {
    async store(req, res) {
        const {
            id,
            ano,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            fonte_endereco,
            person_pf_id,
        } = await Address.create(req.body);

        return res.json({
            id,
            ano,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            fonte_endereco,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await Address.findAll({
            attributes: [
                'id',
                'ano',
                'cep',
                'endereco',
                'numero',
                'complemento',
                'bairro',
                'cidade',
                'estado',
                'fonte_endereco',
            ],
            where: { person_pf_id: id },
        });

        return res.json(person);
    }

    async index(req, res) {
        const enderecos = await Address.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(enderecos);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            ano,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            fonte_endereco,
        } = req.body;

        const enderecoExists = await Address.findOne({
            where: { id },
        });

        if (!enderecoExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await enderecoExists.update({
            ano,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            fonte_endereco,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Address.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new AddressController();
