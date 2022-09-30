module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('weapons', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            numero_registro: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            tipo_armamento: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            marca: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            modelo: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            calibre: {
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
        await queryInterface.dropTable('weapons');
    },
};
