import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class Company extends Model {
    static init(sequelize) {
        super.init(
            {
                nome_empresarial: Sequelize.STRING,
                nome_fantasia: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                capital_social: Sequelize.STRING,
                cnae: Sequelize.STRING,
                endereco: Sequelize.STRING,
                qsa_atual: Sequelize.STRING,
                qsa_anterior: Sequelize.STRING,
                contador: Sequelize.STRING,
                situacao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'companys',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Company;
