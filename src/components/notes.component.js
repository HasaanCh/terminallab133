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





    componentDidMount() {
            axios.get('http://127.0.0.1:5000/notes/').then(response =>{
            this.setState({match:response.data});
            console.log(response.data)
        }).catch((error)=>console.log(error));
    }


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