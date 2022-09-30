import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import multerSignature from './config/multerSignature';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import PromotoriaController from './app/controllers/PromotoriaController';
import ResquestTypesController from './app/controllers/ResquestTypesController';
import ResetPasswordController from './app/controllers/ResetPasswordController';
import FilePhotoController from './app/controllers/FilePhotoController';
import FileSignatureController from './app/controllers/FileSignatureController';
import PhysicalPersonController from './app/controllers/PhysicalPersonController';
import IdentityController from './app/controllers/IdentityController';
import PersonIdentityController from './app/controllers/PersonIdentityController';
import AddressPfController from './app/controllers/AddressPfController';
import ContactController from './app/controllers/ContactController';
import VehicleController from './app/controllers/VehicleController';
import RaisController from './app/controllers/RaisController';
import CompanyController from './app/controllers/CompanyController';
import RecordPcController from './app/controllers/RecordPcController';
import CourtQueryController from './app/controllers/CourtQueryController';
import WeaponController from './app/controllers/WeaponController';
import InfopenController from './app/controllers/InfopenController';
import VisitorController from './app/controllers/VisitorController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);
const signature = multer(multerSignature);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/promotorias', PromotoriaController.store);
routes.post('/phycalpersons', PhysicalPersonController.store);
routes.post('/identitys', IdentityController.store);
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
routes.get('/identitys/:id', IdentityController.show);
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
