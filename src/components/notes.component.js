import React,{Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuth,getCookie } from '../helpers/auth';



export default class NoteList extends Component
{

    constructor(props)
    {
        super(props);

        // this.deleteNote=this.deleteNote.bind(this);

        this.state={
            match:[]
        };
    }



    // showModal(id){
    //         var dataa=this.state.notes.filter(item=>
    //         {
    //             return item._id===id;
    //         })
    //         console.log("---------------")
    //         console.log(dataa);
            
    //         this.setState({notedata:dataa[0].notedata})
    //         this.setState({noteid:dataa[0]._id})
    //         this.setState({noteuser:dataa[0].username})
    //         this.setState({noteclass:"shown"});
    //         this.setState({isblur:"blurred"})
    //     }
 
    
    // hideModal = () => {
    //     this.setState({noteclass:"hidden"});
    //     // this.componentDidMount();
    //     this.setState({isblur:""})
    // };


    componentDidMount() {
            axios.get('http://127.0.0.1:5000/notes/').then(response =>{
            this.setState({match:response.data});
            console.log(response.data)
        }).catch((error)=>console.log(error));
    }

    // addnew()
    // {

    //     var newnote=axios.post('http://127.0.0.1:5000/notes/add/', {
    //                     "username": this.state.noteuser,
    //                     "notedata": "Hello I am new",
    //                     "email":this.state.email
    //                     }).then(function(userID) {
    //                         return userID;
    //                     });
        
    //                     const printAddress = () => {
    //                         newnote.then(async a => {
    //                         console.log(a.data._id);
    //                         console.log(this.state.email);

    //                         axios.get('http://127.0.0.1:5000/notes/email/'+this.state.email).then(response =>{
    //                             this.setState({notes:response.data}),this.showModal(a.data._id);}).catch((error)=>console.log(error));
    //                         });
                       
    //                     }
                        
    //                     printAddress();

    // }


    // deleteNote(id)
    // {
    //     this.hideModal();
    //     axios.delete('http://127.0.0.1:5000/notes/'+id).then(res=> console.log(res.data));
    //     this.setState({
    //         notes:this.state.notes.filter(el=>el._id !== id)
    //     })
    // }

    notesList()
    {
        return this.state.match.map(currentnote =>{
            return (
            <div className="hellothere">
               <div className="singlematch">

                   <div className="singlerecord">
                   <strong>City: </strong> {currentnote.city}<br/>
                   </div>

                   <div className="singlerecord">
                   <strong>Team A: </strong>{currentnote.teama}<br/>
                   </div>

                   <div className="singlerecord">
                   <strong>Team B: </strong>{currentnote.teamb}<br/>
                   </div>

                   <div className="singlerecord">
                   <strong>Date: </strong>{currentnote.date}
                   </div>
                </div>
                </div>

            
            )
        })
    }

    myChangeHandler =  (event) => {
            this.setState({  notedata: event.target.value });
            axios.post('http://127.0.0.1:5000/notes/update/'+this.state.noteid, {
            "username": this.state.noteuser,
            "notedata": event.target.value
            }).then(()=>{this.componentDidMount()})
     }


    //  <Redirect to='/login' />



    render()
    {
        return(

       <div className="main-wrapper" >
             {isAuth() ?  <div className="add-button-wrapper">
                    <Link to="/addmatch" className="glow-on-hover">+</Link>
            </div>: null }
             
             
           <h3>Match List</h3>
           <div className="notes-list">
               {this.notesList()}
            </div>

            {/* <OutsideClickHandler onOutsideClick={() => { this.hideModal() }} >

                <div className={"noteModal "+this.state.noteclass}>
                    <div className="noteclose">
                        <button className="close-button" onClick={this.hideModal}>X</button>
                    </div>
                        <textarea className="notes-input-field" onChange={this.myChangeHandler} type="text"  value={this.state.notedata} />
                       <img className="delete-button" onClick={(param)=>this.deleteNote(this.state.noteid)} src={deleteimage}/>
                    
                </div>
            </OutsideClickHandler> */}
           
           
           
       </div>
              
        
           
        )
        
    }


}