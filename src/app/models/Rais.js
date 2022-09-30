import Sequelize, { Model } from 'sequelize';
import PhysicalPerson from './PhysicalPerson';

class Rais extends Model {
    static init(sequelize) {
        super.init(
            {
                empresa_orgao: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                tipo_vinculo: Sequelize.STRING,
                admissao: Sequelize.STRING,
                situacao: Sequelize.STRING,
                person_pf_id: Sequelize.INTEGER,
            },
            {
                tableName: 'rais',
                sequelize,
            }
        );

        return this;
    }

    static associate() {
        this.belongsTo(PhysicalPerson, { foreignKey: 'person_pf_id' });
    }
}

export default Rais;
