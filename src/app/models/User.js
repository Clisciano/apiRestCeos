import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import PhysicalPerson from './PhysicalPerson.js';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                matricula: Sequelize.INTEGER,
                email: Sequelize.STRING,
                telefone: Sequelize.INTEGER,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                // user.password_hash = await hash(user.password, 8);
                user.password_hash = bcrypt.hashSync(
                    user.password.toString(),
                    8
                );
            }
        });

        return this;
    }

    async checkPassword(password) {
        return bcrypt.compareSync(password.toString(), this.password_hash);
    }

    static associate() {
        this.belongsTo(PhysicalPerson, {
            foreignKey: 'id',
        });
    }
}

export default User;
