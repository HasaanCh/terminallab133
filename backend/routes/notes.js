const router=require('express').Router();
let Note=require('../models/notes.model.js');

// router.route('/').get((req,res)=>
// {
//     Note.find().then(notes =>res.json(notes)).catch(err=>res.status(400).json('Error: '+err));
// });


router.route('/').get((req,res)=>
{
    Note.find().then(notes =>res.json(notes)).catch(err=>res.status(400).json('Error: '+err));
});


router.route('/add').post((req,res)=>
{
    const city=req.body.city;
    const date=req.body.date;
    const teama=req.body.teama;
    const teamb=req.body.teamb;
    
    const newNote= new Note({city,date,teama,teamb});
   
    newNote.save().then(()=>res.json(newNote))
    .catch(err=>res.status(400).json('Error :'+err));

});

router.route('/:id').get((req,res)=>
{
    Note.findById(req.params.id).then(notes=>res.json(notes)).catch(err=>res.status(400).json("Error: "+err));
})


router.route('/:id').delete((req,res)=>
{
    Note.findByIdAndDelete(req.params.id).then(()=>res.json("Record Deleted")).catch(err=>res.status(400).json("Error: "+err));
})  


router.route('/update/:id').post((req,res)=>
{
    Note.findById(req.params.id).then(notes=>
        {
            notes.notedata=req.body.notedata;
            notes.username=req.body.username;
            notes.save().then(()=>res.json("Record Updated")).catch(err=>res.status(400).json('Error:'+err));
        }).catch(err=>res.status(400).json("Error: "+err));
})  



module.exports=router;