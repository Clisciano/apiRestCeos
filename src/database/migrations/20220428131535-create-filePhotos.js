module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('file_photos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            path: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
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
        await queryInterface.dropTable('file_photos');
    },
};
