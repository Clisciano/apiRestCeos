import Weapon from '../models/Weapon';
import PhysicalPerson from '../models/PhysicalPerson';

class WeaponController {
    async store(req, res) {
        const {
            id,
            numero_registro,
            tipo_armamento,
            marca,
            modelo,
            calibre,
            person_pf_id,
        } = await Weapon.create(req.body);

        return res.json({
            id,
            numero_registro,
            tipo_armamento,
            marca,
            modelo,
            calibre,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const weapons = await Weapon.findAll({
            attributes: [
                'id',
                'numero_registro',
                'tipo_armamento',
                'marca',
                'modelo',
                'calibre',
            ],
            where: { person_pf_id: id },
        });

        return res.json(weapons);
    }

    async index(req, res) {
        const weapons = await Weapon.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(weapons);
    }

    async update(req, res) {
        const { id } = req.params;

        const { numero_registro, tipo_armamento, marca, modelo, calibre } =
            req.body;

        const weaponsExists = await Weapon.findOne({
            where: { id },
        });

        if (!weaponsExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await weaponsExists.update({
            numero_registro,
            tipo_armamento,
            marca,
            modelo,
            calibre,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Weapon.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new WeaponController();
