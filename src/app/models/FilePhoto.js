import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson.js';

class FilePhoto extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        // return `http://134.209.74.174/filesPhotos/${this.path}`;
                        //  return `http://134.209.74.174/filesPhotos/${this.path}`;
                         //http://localhost:3001
                         return `http://localhost:3001/filesPhotos/${this.path}`;
                    },
                },
            },
            {
                tableName: 'file_photos',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, {
            foreignKey: 'id',
        });
    }
}

export default FilePhoto;
