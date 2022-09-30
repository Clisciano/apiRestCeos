import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().email().required(),
            matricula: Yup.number().required(),
            telefone: Yup.number().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const userExists = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { id, nome, email, matricula, telefone } = await User.create(
            req.body
        );

        return res.json({
            id,
            nome,
            email,
            matricula,
            telefone,
        });
    }

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string(),
            email: Yup.string().email(),
            matricula: Yup.number(),
            telefone: Yup.number(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { email, oldPassword } = req.body;
        console.log('Email', email);
        console.log('Password', oldPassword);
        const user = await User.findByPk(req.userId);

        if (email && email !== user.email) {
            const userExists = await User.findOne({ where: { email } });

            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' });
            }
        }

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Password does ' });
        }

        const { id, nome, matricula, telefone } = await user.update(req.body);

        return res.json({
            id,
            nome,
            email,
            matricula,
            telefone,
        });
    }
}

export default new UserController();
