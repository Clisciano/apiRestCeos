import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                ano: Sequelize.STRING,
                cep: Sequelize.STRING,
                endereco: Sequelize.STRING,
                numero: Sequelize.STRING,
                complemento: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                fonte_endereco: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'address',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Address;
