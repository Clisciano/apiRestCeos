import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class CourtQuery extends Model {
    static init(sequelize) {
        super.init(
            {
                num_processo: Sequelize.STRING,
                capitulacao_penal: Sequelize.STRING,
                vara_responsavel: Sequelize.STRING,
                status_processo: Sequelize.STRING,
                participacao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'court_querys',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default CourtQuery;
