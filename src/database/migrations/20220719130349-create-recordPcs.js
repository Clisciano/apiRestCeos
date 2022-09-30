module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('record_pcs', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            num_ocorrencia: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            tipo_ocorrencia: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            delegacia: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            tipo_infracao: {
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
        await queryInterface.dropTable('record_pcs');
    },
};
