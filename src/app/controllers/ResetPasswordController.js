import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/index.js';

import bcrypt from 'bcryptjs/dist/bcrypt.js';
import randomstring from 'randomstring';
import nodemailer from 'nodemailer';

import User from '../models/User.js';

class ResetPasswordController {
    async store(req, res) {
        const { email } = req.body;

        const userExists = await User.findOne({ where: { email } });
        console.log('user:', userExists);

        if (!userExists) {
            return res.status(400).json({ error: 'User does not exist.' });
        }

        const password = randomstring.generate(7);

        const date = format(new Date(), "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
            locale: ptBR,
        });

        await userExists.update({
            password_hash: bcrypt.hashSync(password.toString(), 8),
        });

        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.mailtrap.io',
        //     port: 2525,
        //     auth: {
        //         user: 'a7de5befbd765c',
        //         pass: 'd2b0c63638091d',
        //     },
        // });

        const transporter = nodemailer.createTransport({
            host: 'activesync.mppa.mp.br',
            port: 993,
            auth: {
                user: 'clisciano@mppa.mp.br',
                pass: 'Mateus.analaura',
            },
        });

        await transporter
            .sendMail({
                from: 'Administrador <75381a8c91-02bbb5@inbox.mailtrap.io>',
                to: email,
                subject: 'Recuperação de Senha',
                html: `<p>${date} <br /> Olá, sua nova senha de acesso é: ${password}</p><br /><a href="http://localhost:3001/#/">Sistema</a>`,
            })
            .catch(() => res.json({ message: 'error' }));

        return res.status(200).json({ email: userExists.email });
    }
}
export default new ResetPasswordController();
