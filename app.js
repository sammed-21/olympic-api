const express= require('express')
require('./db/conn');
const app = express();
const port=process.env.PORT || 4000;
const router=new express.Router();
const MensRanking = require('./models/menSchama')
app.use(express.json())

app.post('/mens',async (req, res) => {
    try {
     
         const runnerMens= new MensRanking(req.body)
       const run=await runnerMens.save();
       console.log(req.body);
       res.send(run);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get('/mens',async (req, res) => {
    try {
       
     const getAthelete=  await MensRanking.find().sort({ranking:1});
     console.log(getAthelete);
     res.send(getAthelete);
        
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/mens/:id',async (req, res) => {
    const id = req.params.id;
    const getAtheleteById = await MensRanking.findById(id);
     console.log(getAtheleteById)
    if(!getAtheleteById){
       return res.status(404).send(error);
    }
    else{

        res.send(getAtheleteById);
    }
})
 app.patch('/mens/:id',async (req, res)=>{
     
     try {
         const _id = req.params.id
         const updateByid=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
         res.send(updateByid)
         console.log(updateByid);
             
         } catch (error) {
             res.status(400).send(error)
            }
        })
app.delete('/mens/:id',async (req, res)=>{
    try {
        const id=req.params.id;
        const deletemen=await MensRanking.findByIdAndDelete(id);
     if(!id){
         res.status(400).send()
     }
     else{

         res.send(deletemen)
     }
     
       

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
        
    }
})
app.listen(port, (err, res) => {
    console.log(`server is on at ${port}`);
})