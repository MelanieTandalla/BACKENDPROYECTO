const {Router} = require('express');
const router = Router();

const {getDisability, getDisabilityById, createDisability, deleteDisability, updateDisability} = require('../controllers/disability.controller');

const {getDoctors, getDoctorsById, deleteDoctor, createDoctor, updateDoctor}= require('../controllers/doctor.controller');

const {getPatient, getPatientById, deletePatient, createPatient, updatePatient}= require('../controllers/patient.controller');

const {getAllergies,getAllergiesById,createAllergies,updateAllergies,deleteAllergies}= require('../controllers/allergies.controller');

const {getSpecialities, getSpecialitiesById, createSpeciality, updateSpeciality, deleteSpeciality}=require('../controllers/speciality.controller');

const {getMedicalApointment,getMedicalApointmentById, createMedicalApointment, updateMedicalApointment,deleteMedicalApointment}=require('../controllers/medical_apointment.controller');

const {getMedicalAssignment,getMedicalAssignmentById,createMedicalAssignment,updateMedicalAssignment,deleteMedicalAssignment}=require('../controllers/medical_assignment.controller');

const{   getConsultorio, getConsultorioById, createConsultorio, updateConsultorio, deleteConsultorio}= require('../controllers/consultorio.controller');
//Discapacidades listar
router.get('/api/disabilities', getDisability);
router.get('/api/disabilities/:id', getDisabilityById);

//Especialidades listar
router.get('/api/specialities', getSpecialities);
router.get('/api/specialities/:id',getSpecialitiesById);

//Doctores listar
router.get('/api/doctors', getDoctors);
router.get('/api/doctors/:id', getDoctorsById);

//Pacientes listar
router.get('/api/patients',getPatient);
router.get('/api/patients/:id', getPatientById);

//Alergias listar
router.get('/api/allergies',getAllergies);
router.get('/api/allergies/:id',getAllergiesById);

//Citas medicas listar
router.get('/api/medical-apointments',getMedicalApointment);
router.get('/api/medical-apointments/:id',getMedicalApointmentById);

//Asignacion Medica listar
router.get('/api/medical-assignments',getMedicalAssignment);
router.get('/api/medical-assignments/:id',getMedicalAssignmentById);

//Consultorio
router.get('/api/consultorio',getConsultorio);
router.get('/api/consultorio/:id',getConsultorioById);

//Crear
router.post('/api/disabilities', createDisability);
router.post('/api/doctors', createDoctor);
router.post('/api/patients',createPatient);
router.post('/api/allergies',createAllergies);
router.post('/api/specialities',createSpeciality);
router.post('/api/medical-apointments',createMedicalApointment);
router.post('/api/medical-assignments',createMedicalAssignment);
router.post('/api/consultorio',createConsultorio);


//update
router.put('/api/disabilities/:id',updateDisability);
router.put('/api/doctors/:id',updateDoctor);
router.put('/api/patients/:id',updatePatient);
router.put('/api/allergies/:id',updateAllergies);
router.put('/api/specialities/:id',updateSpeciality);
router.put('/api/medical-apointments/:id',updateMedicalApointment);
router.put('/api/medical-assignments/:id',updateMedicalAssignment); 
router.put('/api/consultorio/:id',updateConsultorio); 


//delete
router.delete('/api/disabilities/:id', deleteDisability);
router.delete('/api/doctors/:id', deleteDoctor);
router.delete('/api/patients/:id', deletePatient);
router.delete('/api/allergies/:id', deleteAllergies);
router.delete('/api/specialities/:id', deleteSpeciality);
router.delete('/api/medical-apointments/:id',deleteMedicalApointment);
router.delete('/api/medical-assignments/:id',deleteMedicalAssignment);
router.delete('/api/consultorio/:id',deleteConsultorio);

module.exports = router;
