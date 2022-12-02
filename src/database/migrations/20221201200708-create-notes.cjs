module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('notes', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            descricao: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('notes');
    },
};
