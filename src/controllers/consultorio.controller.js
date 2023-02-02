const {Pool}= require('pg');
const pool=new Pool({
    host:'localhost',
    user:'admin',
    password:'123',
    database:'Citas-Medicas',
    port:5432,
})
const getConsultorio = async(req, res) => {
    const response=await pool.query('SELECT * FROM consultorio');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
const getConsultorioById = async(req, res) => {
    const id=req.params.id;
    const response =await pool.query('SELECT * FROM consultorio WHERE id_consultorio = $1',[id]);
    res.json(response.rows);
};
const createConsultorio = async(req, res) => {
    const {
        nombre_consultorio,
        referencia
    }=req.body;
   const response= await pool.query('INSERT INTO asignacionCitaMedica(nombre_consultorio, referencia) VALUES($1,$2)',[
        nombre_consultorio,
        referencia
    ]);
   console.log(response);
    res.json({
        message:'¡El consultorio se ha creado satisfactoriamente!',
        body:{
            asignacionCitaMedica: {
                nombre_consultorio,
                referencia
            }
        }
    })
};
const updateConsultorio= async(req, res) => {
    const id=req.params.id; 
    const { 
        nombre_consultorio,
        referencia
    }=req.body;
    const response = await pool.query('UPDATE consultorio SET nombre_consultorio=$1,referencia =$2 WHERE id_consultorio = $3',[
        nombre_consultorio,
        referencia,
        id
    ]) 
    console.log(response);
    res.json('Consultorio Actualizado correctamente');
};
const deleteConsultorio = async(req, res) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM consultorio WHERE id_consultorio = $1',[id]);
    res.json(`Consultorio con id: ${id} eliminado correctamente`);
};

module.exports = {
    getConsultorio,
    getConsultorioById,
    createConsultorio,
    updateConsultorio,
    deleteConsultorio
}