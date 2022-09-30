module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('court_querys', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            num_processo: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            capitulacao_penal: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            vara_responsavel: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            status_processo: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            participacao: {
                type: Sequelize.STRING(50),
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
        await queryInterface.dropTable('court_querys');
    },
};
