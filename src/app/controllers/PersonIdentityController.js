// import PhysicalPerson from '../models/PhysicalPerson';
import Identity from '../models/Identity.js';

class PersonIdentityController {
    async show(req, res) {
        const { id } = req.params;

        const person = await Identity.findAll({
            attributes: ['id', 'identidade', 'orgao_expedidor'],
            where: { person_pf_id: id },

            // include: [
            //     {
            //         model: Identity,
            //         attributes: ['identidade'],
            //     },
            // ],
        });

        return res.json(person);
    }
}

export default new PersonIdentityController();
