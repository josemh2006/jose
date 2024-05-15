const Router= require ('express');
const router= Router();


router.get('/', (req, res) =>{

	/*res.send('Hola JOSE MENDOZA 2024'); */
	res.render('index'); 

})



module.exports= router;