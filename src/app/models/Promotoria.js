import Sequelize, { Model } from 'sequelize';

class Promotoria extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                cidade: Sequelize.STRING,
                bairro: Sequelize.STRING,
                endereco: Sequelize.STRING,
                cep: Sequelize.INTEGER,
                telefone: Sequelize.INTEGER,
                email: Sequelize.STRING,
            },
            {
                tableName: 'promotorias',
                sequelize,
            }
        );

        return this;
    }
}

export default Promotoria;
