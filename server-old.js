const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-parser');
const Router = require('koa-router');
const router = new Router();
const PORT = process.env.PORT || 4000;
const _ = require('lodash');

app.use(bodyParser());

// app.use(async (ctx, next) => {
//     console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
//     return await next();
// })

// app.use(async (ctx, next) => {
//     console.log(`2nd middleware`);
//     return await next();
// })

// app.use(async ctx => {
//     ctx.body = 'hello werld';
//     console.log('so word')
// })

const posts = [
    { 
        "id": '1',
        "name": "nodejs developer",
        "content": 'stuffs' 
    },
    { 
        "id": '2',
        "name": "sailsjs developer",
        "content": 'stuffs' 
    },
    { 
        "id": '3',
        "name": "sailsjs developer",
        "content": 'stuffs' 
    }  
];

router.get('/', (ctx) => {
    ctx.body = 'welcome to koa application';
});

router.get('/posts', (ctx) => {
    ctx.body = posts; 
});


router.post('/posts ', (ctx) => {
    console.log(ctx.request.body); 
    let  { id, name, content } = ctx.request.body;
    if(!id){ ctx.throw(400,'id is a required field') }
    if(!name){ ctx.throw(400,'id is a required field')}
    if(!content){ ctx.throw(400,'id is a required field')}

    posts.push({ id, name, content });
    ctx.body = posts;
});

router.get('/post/:id', (ctx) => {
   ctx.body = posts.find( (post) => { post.id === ctx.params.id });
})

router.delete('/post/:id', (ctx) => {
    ctx.body = _.remove(posts, (p) => {p.id == ctx.params.id}); 
})


//PUT 
router.put('/post/:id', ctx => {
    let {id, name, content } = ctx.request.body;

    const index = posts.findIndex( post => post.id === ctx.params.id);
    if(id){posts[index].id = id}
    if(name){ posts[index].name = name}
    if(content){posts[index].content = content}

    ctx.body = posts;
})

app.use(router.routes());

// Run Web Server
app.listen(PORT,()=>{
	console.log(`Server listening on port ${PORT}.`);
}); 