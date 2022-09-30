module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('companys', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome_empresarial: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            nome_fantasia: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            cnpj: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            capital_social: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            cnae: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            endereco: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            qsa_atual: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            qsa_anterior: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            contador: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            situacao: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            person_pf_id: {
                type: Sequelize.INTEGER,
                references: { model: 'physical_persons', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('companys');
    },
};
