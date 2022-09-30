module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('physical_persons', {
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
            cpf: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            situacao: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            nascimento: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            naturalidade: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            titulo_eleitor: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            pis: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },

            cnh: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            mae: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            pai: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            conjuge: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            file_photo_id: {
                type: Sequelize.INTEGER,
                references: { model: 'file_photos', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
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
        await queryInterface.dropTable('physical_persons');
    },
};
