const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');

const app = new Koa();
const PORT = process.env.PORT || 4000;

db = require('./models');
db.sequelize.sync({force:true})
    .then( () => console.log('models synced!') )
    .catch(err => console.log(err));

app.listen(PORT, ()=> {
    console.log(`server is listening on PORT ${PORT}`);
})