const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employee_id:{
        type: String
    },
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String
    },
    email_address:{
        type: String
    },
    department_Id:{
        type: String
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;