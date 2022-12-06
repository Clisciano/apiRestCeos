import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson.js';

class FileSignature extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                path: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        ////http://localhost:3001
                        // return `http://134.209.74.174/filesignature/${this.path}`;
                        return `http://localhost:3001/filesignature/${this.path}`;
                    },
                },
            },
            {
                tableName: 'file_signatures',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default FileSignature;
