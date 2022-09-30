module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('visitors', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },

            infopen_id: {
                type: Sequelize.INTEGER,
                references: { model: 'infopens', key: 'id' },
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
        await queryInterface.dropTable('visitors');
    },
};
