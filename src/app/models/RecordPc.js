import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class RocordPc extends Model {
    static init(sequelize) {
        super.init(
            {
                num_ocorrencia: Sequelize.STRING,
                tipo_ocorrencia: Sequelize.STRING,
                delegacia: Sequelize.STRING,
                tipo_infracao: Sequelize.STRING,
                participacao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'record_pcs',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default RocordPc;
