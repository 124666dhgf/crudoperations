/*var express = require('express');
const { Sequelize,DataTypes} = require('sequelize');
var router = express.Router();

const sequelize=new Sequelize('customer','root','password',{host:'localhost',dialect:'mysql'});


async function add()
{
try
{
    await sequelize.authenticate();
    console.log("connected successfully.....");
}
catch(error)
{
    console.error("unable to connect!!!!!!!");
}
}
add();
module.exports = router;*/


















var express = require('express');
const{Sequelize,DataTypes}=require('sequelize');
var router = express.Router();
const sequelize = new Sequelize('employee', 'root', 'My21sql@#par', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  
  async function add()
  {
  try 
  {
    await sequelize.authenticate();
    console.log("Connected successfully.......");
  }
  catch (error)
  {
    console.error("Unable to connect!!!!!");
  }
  }
  add();
 
router.get('/' , (req, res) => {
mysqlConnection.query('select * from employeed;', (err, rows, fields) => {
if (!err)
res.send(rows);


//return res.console.log(rows);    
else
console.log(err);
})
} );


//Router to GET specific item detail from the MySQL database
router.get('/:id' , (req, res) => {
mysqlConnection.query('SELECT * from employeed WHERE empid = ?',[req.params.id], (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );


//Create a new user
const jane=await User.create({ deptname:"HR",location:"Trivandrum"});
console.log("Jane's auto-generated ID:",jane.dept_id);


//Update a column value
await User.update({designation:"system engineer"}, {
    where:{
        empid:200
    }
});


//Delete a row from table
await User.destroy({
    where:{

        empid:202
    }
});

module.exports=router;