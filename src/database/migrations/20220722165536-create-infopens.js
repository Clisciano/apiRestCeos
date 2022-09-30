module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('infopens', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            numero: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            alcunha: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            capitulacao_penal: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            situacao_custodia: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            local_custodia: {
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
        await queryInterface.dropTable('infopens');
    },
};
