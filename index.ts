import express ,{ Request, response, Response }from 'express'
const app = express();
const PORT = 3000;
app.get('/:n',(req:Request,res:Response)=>{
    let sum = 0;
    let param = parseFloat(req.params.n);
    for (let i=0;i<=param;i++){
        sum = sum+i;
    }
    res.json({
        'Sum':sum
    })
    
})
app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`);
});