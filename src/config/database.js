// BD SQL SERVER
const config = {
    dialect: 'mssql',
    database: 'ctlab',
    username: 'sa',
    password: 'mppa2022',
    host: 'localhost',
    port: 1433,
    logging: true,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: '',
    },
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

//module.exports = config;
export default  config;

// BD postgres
// export default  {
//     dialect: 'postgres',
//     host: 'ceus.postgres.uhserver.com',
//     username: 'clisciano',
//     password: '@Dmin681',
//     database: 'ceus',
//     define: {
//         timestamps: true,
//         underscored: true,
//         underscoredAll: true,
//     },
// };

// module.exports = config;
