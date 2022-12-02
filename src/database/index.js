import Sequelize from 'sequelize';

import User from '../app/models/User.js';
import Promotoria from '../app/models/Promotoria.js';
import RequestTypes from '../app/models/RequestTypes.js';
import FilePhoto from '../app/models/FilePhoto.js';
import FileSignature from '../app/models/FileSignature.js';
import PhysicalPerson from '../app/models/PhysicalPerson.js';
import Identity from '../app/models/Identity.js';
import Note from '../app/models/Note.js';
import Address from '../app/models/AddressPf.js';
import Contact from '../app/models/Contact.js';
import Vehicle from '../app/models/Vehicle.js';
import Rais from '../app/models/Rais.js';
import Company from '../app/models/Company.js';
import RecordPc from '../app/models/RecordPc.js';
import CourtQuery from '../app/models/CourtQuery.js';
import Weapon from '../app/models/Weapon.js';
import Infopen from '../app/models/infopen.js';
import Visitor from '../app/models/Visitors.js';

import databaseConfig from '../config/database.js';

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
    Note,
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
