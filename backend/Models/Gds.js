const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
        name:String,
        employeeID:Number,
        dateOfBirth:Date,
        email:String,
        phoneNumber:Number,
        alternateNumber:Number,
        whatsappNumber:Number,

        dateOfJoining:Date,
        dateOfRetirement:Date,
        cadre:String,
        payScale:String,
        basicPay:Number,
        transferTaken:Number,
    
    
    
        circle:String,
        region:String,
        division:String,
        subDivision:String,
        subOffice:String,
        officeName:String,
        officeID:Number,
        listOfOffices:Array,
    
    
        emergencyLeave:Number,
        paidLeave:Number,
        lwa:Number,
        
    
    
})

const Gds=new mongoose.model('Gds',Myschema)

module.exports=Gds;
