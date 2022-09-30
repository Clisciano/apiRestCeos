module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('identitys', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            identidade: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            orgao_expedidor: {
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
        await queryInterface.dropTable('identitys');
    },
};
