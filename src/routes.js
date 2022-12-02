import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.mjs';
import multerSignature from './config/multerSignature.js';

import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import PromotoriaController from './app/controllers/PromotoriaController.js';
import ResquestTypesController from './app/controllers/ResquestTypesController.js';
import ResetPasswordController from './app/controllers/ResetPasswordController.js';
import FilePhotoController from './app/controllers/FilePhotoController.js';
import FileSignatureController from './app/controllers/FileSignatureController.js';
import PhysicalPersonController from './app/controllers/PhysicalPersonController.js';
import IdentityController from './app/controllers/IdentityController.js';
import NoteController from './app/controllers/NoteController.js';
import PersonIdentityController from './app/controllers/PersonIdentityController.js';
import AddressPfController from './app/controllers/AddressPfController.js';
import ContactController from './app/controllers/ContactController.js';
import VehicleController from './app/controllers/VehicleController.js';
import RaisController from './app/controllers/RaisController.js';
import CompanyController from './app/controllers/CompanyController.js';
import RecordPcController from './app/controllers/RecordPcController.js';
import CourtQueryController from './app/controllers/CourtQueryController.js';
import WeaponController from './app/controllers/WeaponController.js';
import InfopenController from './app/controllers/InfopenController.js';
import VisitorController from './app/controllers/VisitorController.js';

import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();
const upload = multer(multerConfig);
const signature = multer(multerSignature);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/promotorias', PromotoriaController.store);
routes.post('/phycalpersons', PhysicalPersonController.store);
routes.post('/identitys', IdentityController.store);
routes.post('/notes', NoteController.store);
routes.post('/address', AddressPfController.store);
routes.post('/contacts', ContactController.store);
routes.post('/vehicles', VehicleController.store);
routes.post('/rais', RaisController.store);
routes.post('/companys', CompanyController.store);
routes.post('/recordPcs', RecordPcController.store);
routes.post('/courtQuerys', CourtQueryController.store);
routes.post('/weapons', WeaponController.store);
routes.post('/infopens', InfopenController.store);
routes.post('/visitors', VisitorController.store);
routes.post('/requesttypes', ResquestTypesController.store);
routes.post('/resetpassword', ResetPasswordController.store);
routes.post('/filesPhotos', upload.single('file'), FilePhotoController.store);
routes.post(
    '/filesignature',
    signature.single('file'),
    FileSignatureController.store
);

routes.use(authMiddleware);

routes.put('/changepassword', UserController.update);
routes.put('/promotorias/:id', PromotoriaController.update);
routes.put('/phycalpersons/:id', PhysicalPersonController.update);
routes.put('/identitys/:id', IdentityController.update);
routes.put('/notes/:id', NoteController.update);
routes.put('/address/:id', AddressPfController.update);
routes.put('/contacts/:id', ContactController.update);
routes.put('/vehicles/:id', VehicleController.update);
routes.put('/rais/:id', RaisController.update);
routes.put('/companys/:id', CompanyController.update);
routes.put('/recordPcs/:id', RecordPcController.update);
routes.put('/courtQuerys/:id', CourtQueryController.update);
routes.put('/weapons/:id', WeaponController.update);
routes.put('/infopens/:id', InfopenController.update);
routes.put('/visitors/:id', VisitorController.update);
routes.put('/requesttypes/:id', ResquestTypesController.update);
routes.put('/filePhotos/:id', FilePhotoController.update);

routes.get('/users', UserController.index);
routes.get('/promotorias', PromotoriaController.index);
routes.get('/phycalpersons', PhysicalPersonController.index);
routes.get('/identitys', IdentityController.index);
routes.get('/address', AddressPfController.index);
routes.get('/contacts', ContactController.index);
routes.get('/vehicles', VehicleController.index);
routes.get('/rais', RaisController.index);
routes.get('/companys', CompanyController.index);
routes.get('/recordPcs', RecordPcController.index);
routes.get('/courtQuerys', CourtQueryController.index);
routes.get('/weapons', WeaponController.index);
routes.get('/infopens/:id', InfopenController.index);
routes.get('/visitors', VisitorController.index);
routes.get('/filesPhotos', FilePhotoController.index);
routes.get('/filesignature', FileSignatureController.index);
routes.get('/phycalpersons/:id', PhysicalPersonController.show);
routes.get('/personIdentitys/:id', PersonIdentityController.show);
routes.get('/personNotes/:id', NoteController.show);
routes.get('/identitys/:id', IdentityController.show);
routes.get('/notes/:id', NoteController.show);
routes.get('/personAddress/:id', AddressPfController.show);
routes.get('/personContacts/:id', ContactController.show);
routes.get('/personVehicles/:id', VehicleController.show);
routes.get('/personRais/:id', RaisController.show);
routes.get('/personCompanys/:id', CompanyController.show);
routes.get('/personRecordPcs/:id', RecordPcController.show);
routes.get('/personCourtQuerys/:id', CourtQueryController.show);
routes.get('/personWeapons/:id', WeaponController.show);
routes.get('/personInfopens/:id', InfopenController.show);
routes.get('/personVisitors/:id', VisitorController.show);
routes.get('/filesPhotos/:id', FilePhotoController.show);
routes.get('/filesignature/:id', FileSignatureController.show);
routes.get('/requesttypes', ResquestTypesController.index);

routes.delete('/phycalpersons/:id', PhysicalPersonController.delete);
routes.delete('/filesPhotos/:id', FilePhotoController.delete);
routes.delete('/filesignature/:id', FileSignatureController.delete);
// routes.delete('/filesignature/:id', FileSignatureController.delete);

export default routes;
