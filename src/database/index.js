import Sequelize from 'sequelize';

import User from '../app/models/User';
import Promotoria from '../app/models/Promotoria';
import RequestTypes from '../app/models/RequestTypes';
import FilePhoto from '../app/models/FilePhoto';
import FileSignature from '../app/models/FileSignature';
import PhysicalPerson from '../app/models/PhysicalPerson';
import Identity from '../app/models/Identity';
import Address from '../app/models/AddressPf';
import Contact from '../app/models/Contact';
import Vehicle from '../app/models/Vehicle';
import Rais from '../app/models/Rais';
import Company from '../app/models/Company';
import RecordPc from '../app/models/RecordPc';
import CourtQuery from '../app/models/CourtQuery';
import Weapon from '../app/models/Weapon';
import Infopen from '../app/models/infopen';
import Visitor from '../app/models/Visitors';

import databaseConfig from '../config/database';

const models = [
    User,
    Promotoria,
    RequestTypes,
    FilePhoto,
    FileSignature,
    PhysicalPerson,
    Identity,
    Address,
    Contact,
    Vehicle,
    Rais,
    Company,
    RecordPc,
    CourtQuery,
    Weapon,
    Infopen,
    Visitor,
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
