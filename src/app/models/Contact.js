import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                telefone: Sequelize.STRING,
                email: Sequelize.STRING,
                rede_social: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'contacts',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Contact;
