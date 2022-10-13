import Infopen from '../models/infopen.js';
// import PhysicalPerson from '../models/PhysicalPerson';
import Visitor from '../models/Visitors.js';

class InfopenController {
    async store(req, res) {
        const {
            id,
            numero,
            alcunha,
            capitulacao_penal,
            situacao_custodia,
            local_custodia,
            person_pf_id,
        } = await Infopen.create(req.body);

        return res.json({
            id,
            numero,
            alcunha,
            capitulacao_penal,
            situacao_custodia,
            local_custodia,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const infopen = await Infopen.findOne({
            where: { person_pf_id: id },
            attributes: [
                'id',
                'numero',
                'alcunha',
                'capitulacao_penal',
                'situacao_custodia',
                'local_custodia',
            ],

            include: [
                {
                    model: Visitor,
                    attributes: ['id', 'nome'],
                },
            ],
        });
        console.log('pessoa', id);
        console.log('infopen', infopen);
        // console.log('Array de Visitors', infopen.Visitors);
        if (infopen !== null) {
            const dadosInfopen = {
                id: infopen.id,
                numero: infopen.numero,
                alcunha: infopen.alcunha,
                capitulacao_penal: infopen.capitulacao_penal,
                situacao_custodia: infopen.situacao_custodia,
                local_custodia: infopen.local_custodia,
            };

            // console.log('aqui!', dadosInfopen);

            const dadosVisitors = infopen.Visitors.map((item) => ({
                id: item.id,
                name: item.nome,
            }));

            // console.log('foi', dadosVisitors);
            // return res.json(dadosInfopen, dadosVisitors);
            res.status(200).json({ dadosInfopen, dadosVisitors });
        } else {
            // res.status(200).json('Não existe dados de infopen');
            res.status(200).json(infopen);
        }
    }

    // async show(req, res) {
    //     const { id } = req.params;

    //     const infopen = await Infopen.findAll({
    //         where: { person_pf_id: id },
    //         attributes: [
    //             'id',
    //             'numero',
    //             'alcunha',
    //             'capitulacao_penal',
    //             'situacao_custodia',
    //             'local_custodia',
    //         ],

    //         include: [
    //             {
    //                 model: Visitor,
    //                 attributes: ['id', 'nome'],
    //             },
    //         ],
    //     });

    //     const dadosLadrao1 = {
    //         id: Infopen[0].id,
    //         numero: Infopen[0].numero,
    //         alcunha: Infopen[0].alcunha,
    //         capitulacao_penal: Infopen[0].capitulacao_penal,
    //         situacao_custodia: Infopen[0].situacao_custodia,
    //         local_custodia: Infopen[0].local_custodia,
    //     };
    //     console.log('Teste1', dadosLadrao1);
    //     console.log('Teste', infopen.Visitors);

    //     // const dadosVisitors = infopen.Visitors.map((item) => ({
    //     //     id: item.id,
    //     //     name: item.name,
    //     // }));

    //     return res.json(dadosLadrao1);
    // }

    async index(req, res) {
        // const { id } = req.params;
        const infopen = await Infopen.findAll({
            include: [
                {
                    model: Visitor,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(infopen);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            numero,
            alcunha,
            capitulacao_penal,
            situacao_custodia,
            local_custodia,
        } = req.body;

        const infopenExists = await Infopen.findOne({
            where: { id },
        });

        if (!infopenExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await infopenExists.update({
            numero,
            alcunha,
            capitulacao_penal,
            situacao_custodia,
            local_custodia,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Infopen.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new InfopenController();
