const Router = require('koa-router');
const router = new Router();
const {} = require('../controllers');

//Create routes here. 
router.post('/companies', CompanyController.create);
router.get('/companies', CompanyController.find);
router.get('/companies/:id', CompanyController.findOne);
router.delete('/companies/:id', CompanyController.destroy);
router.put('/companies/:id', CompanyController.update);

module.exports = router;