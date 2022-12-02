import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson.js';

class Note extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'notes',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Note;
