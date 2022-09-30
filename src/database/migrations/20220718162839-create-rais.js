module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rais', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            empresa_orgao: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            cnpj: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            tipo_vinculo: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            admissao: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            situacao: {
                type: Sequelize.STRING(30),
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
        await queryInterface.dropTable('rais');
    },
};
