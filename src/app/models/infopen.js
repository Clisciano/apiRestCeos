import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson.js';

import Visitor from './Visitors.js';

class Infopen extends Model {
    static init(sequelize) {
        super.init(
            {
                numero: Sequelize.STRING,
                alcunha: Sequelize.STRING,
                capitulacao_penal: Sequelize.STRING,
                situacao_custodia: Sequelize.STRING,
                local_custodia: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'infopens',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
        this.hasMany(Visitor, { foreignKey: 'infopen_id' });
    }
}

export default Infopen;
