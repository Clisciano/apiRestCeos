import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson.js';

class Vehicle extends Model {
    static init(sequelize) {
        super.init(
            {
                marca: Sequelize.STRING,
                modelo: Sequelize.STRING,
                ano: Sequelize.STRING,
                cor: Sequelize.STRING,
                placa: Sequelize.STRING,
                jurisdicao: Sequelize.STRING,
                situacao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'vehicles',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Vehicle;
