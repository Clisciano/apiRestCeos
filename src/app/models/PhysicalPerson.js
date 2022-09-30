import Sequelize, { Model } from 'sequelize';
import FilePhoto from './FilePhoto';
import FileSignature from './FileSignature';
import Identity from './Identity';
import Address from './AddressPf';
import Contact from './Contact';
import Vehicle from './Vehicle';
import Rais from './Rais';
import Company from './Company';
import RecordPc from './RecordPc';
import CourtQuery from './CourtQuery';
import Infopen from './infopen';
import User from './User';

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
