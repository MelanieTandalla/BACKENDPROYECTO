const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getMedicalAssignment = async(req, res) => {
    const response=await pool.query('SELECT * FROM asignacionCitaMedica');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getMedicalAssignmentById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM asignacionCitaMedica WHERE id_asignacion_cita_medica = $1',[id]);
    res.json(response.rows);
};
const createMedicalAssignment = async(req, res) => {
    const {
        id_cita_medica,
	    id_consultorio
    }=req.body;
   const response= await pool.query('INSERT INTO asignacionCitaMedica(id_cita_medica,id_consultorio ) VALUES($1,$2)',[
        id_cita_medica,
        id_consultorio
    ]);
   console.log(response);
    res.json({
        message:'¡La asignación medica se ha creado satisfactoriamente!',
        body:{
            asignacionCitaMedica: {
                id_cita_medica,
                id_consultorio
            }
        }
    })
};
const updateMedicalAssignment = async(req, res) => {
    const id=req.params.id; 
    const { 
        id_cita_medica,
        id_consultorio
    }=req.body;
    const response = await pool.query('UPDATE asignacionCitaMedica SET id_cita_medica=$1,id_consultorio =$2 WHERE id_asignacion_cita_medica = $3',[
        id_cita_medica,
	    id_consultorio,
        id
    ]) 
    console.log(response);
    res.json('Asignacion Medica Actualizada correctamente');
};
const deleteMedicalAssignment = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM asignacionCitaMedica WHERE id_asignacion_cita_medica = $1',[id]);
    res.json(`Asignacion medica con id: ${id} eliminada correctamente`);
};

module.exports = {
    getMedicalAssignment,
    getMedicalAssignmentById,
    createMedicalAssignment,
    updateMedicalAssignment,
    deleteMedicalAssignment
}