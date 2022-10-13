import Vehicle from '../models/Vehicle.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class VehicleController {
    async store(req, res) {
        const {
            id,
            marca,
            modelo,
            ano,
            cor,
            placa,
            jurisdicao,
            situacao,
            person_pf_id,
        } = await Vehicle.create(req.body);

        return res.json({
            id,
            marca,
            modelo,
            ano,
            cor,
            placa,
            jurisdicao,
            situacao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const vehicle = await Vehicle.findAll({
            attributes: [
                'id',
                'marca',
                'modelo',
                'ano',
                'cor',
                'placa',
                'jurisdicao',
                'situacao',
            ],
            where: { person_pf_id: id },
        });

        return res.json(vehicle);
    }

    async index(req, res) {
        const vehicles = await Vehicle.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(vehicles);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            marca,
            modelo,
            ano,
            cor,
            placa,
            jurisdicao,
            situacao,
            person_pf_id,
        } = req.body;

        const vehicleExists = await Vehicle.findOne({
            where: { id },
        });

        if (!vehicleExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await vehicleExists.update({
            marca,
            modelo,
            ano,
            cor,
            placa,
            jurisdicao,
            situacao,
            person_pf_id,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Vehicle.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new VehicleController();
