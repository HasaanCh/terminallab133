const mongoose = require("mongoose");

const Schema=mongoose.Schema;


const notesScehma=new Schema({
  city:{type:String},
  date:{type:String},
  teama:{type:String},
  teamb:{type:String},
},
{
    timestamps:true
});

const Notes = mongoose.model('MatchData',notesScehma);

module.exports=Notes;