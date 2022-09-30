module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('vehicles', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            marca: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            modelo: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            ano: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            cor: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            placa: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            jurisdicao: {
                type: Sequelize.STRING(30),
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
        await queryInterface.dropTable('vehicles');
    },
};
