const express=require('express');
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));  //bodyParser.urlencoded is used for get data from a HTML form.

/*

Calculator
app.get('/',function(req,res)
{
    res.sendFile(__dirname+ "/calculator.html");
})

app.post('/',function(req,res)
{
    let num1=Number(req.body.num1)
    let num2=Number(req.body.num2)

    res.send(`The Value is ${num1+num2}.`);
})


*/

// BMI Calculator

app.get('/bmicalculator',function(req,res)
{
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator',function(req,res)
{
    let height=parseFloat(req.body.height);
    let weight=parseFloat(req.body.weight);
    let bmi=(weight/height*height);

    res.send(`The BMI of this Person is ${bmi}`);
})



app.listen(3000,function(req,res)
{
    console.log('Server has started on Port 3000');
})