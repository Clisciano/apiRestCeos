import Sequelize, { Model } from 'sequelize';
import FilePhoto from './FilePhoto.js';
import FileSignature from './FileSignature.js';
import Identity from './Identity.js';
import Note from './Note.js';
import Address from './AddressPf.js';
import Contact from './Contact.js';
import Vehicle from './Vehicle.js';
import Rais from './Rais.js';
import Company from './Company.js';
import RecordPc from './RecordPc.js';
import CourtQuery from './CourtQuery.js';
import Infopen from './infopen.js';
import User from './User.js';

class PhysicalPerson extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING(50),
                cpf: Sequelize.STRING(11),
                situacao: Sequelize.STRING(10),
                nascimento: Sequelize.STRING(50),
                naturalidade: Sequelize.STRING,
                titulo_eleitor: Sequelize.STRING(11),
                pis: Sequelize.STRING(11),
                cnh: Sequelize.STRING(11),
                mae: Sequelize.STRING(50),
                pai: Sequelize.STRING(50),
                conjuge: Sequelize.STRING(50),
                file_photo_id: Sequelize.INTEGER,
                user_id: Sequelize.INTEGER,
            },
            {
                tableName: 'physical_persons',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(FilePhoto, { foreignKey: 'file_photo_id' });
        this.belongsTo(User, { foreignKey: 'user_id' });
        this.hasMany(Infopen, { foreignKey: 'person_pf_id' });
        this.hasMany(Identity, { foreignKey: 'person_pf_id' });
        this.hasMany(Note, { foreignKey: 'person_pf_id' });
        this.hasMany(Address, { foreignKey: 'person_pf_id' });
        this.hasMany(Contact, { foreignKey: 'person_pf_id' });
        this.hasMany(Vehicle, { foreignKey: 'person_pf_id' });
        this.hasMany(Rais, { foreignKey: 'person_pf_id' });
        this.hasMany(Company, { foreignKey: 'person_pf_id' });
        this.hasMany(RecordPc, { foreignKey: 'person_pf_id' });
        this.hasMany(CourtQuery, { foreignKey: 'person_pf_id' });
        this.hasMany(FileSignature, { foreignKey: 'person_pf_id' });
    }
}

export default PhysicalPerson;
