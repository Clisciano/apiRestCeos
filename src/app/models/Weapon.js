import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class Weapon extends Model {
    static init(sequelize) {
        super.init(
            {
                numero_registro: Sequelize.STRING,
                tipo_armamento: Sequelize.STRING,
                marca: Sequelize.STRING,
                modelo: Sequelize.STRING,
                calibre: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'weapons',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Weapon;
