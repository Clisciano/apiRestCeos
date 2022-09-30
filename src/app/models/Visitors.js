import Sequelize, { Model } from 'sequelize';
// import PhysicalPerson from './PhysicalPerson';
import Infopen from './infopen';

class Visitor extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                infopen_id: Sequelize.INTEGER,
            },
            {
                tableName: 'visitors',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(Infopen, { foreignKey: 'infopen_id' });
    }
}

export default Visitor;
