module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('address', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            ano: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            endereco: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            numero: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            complemento: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            bairro: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            fonte_endereco: {
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
        await queryInterface.dropTable('address');
    },
};
