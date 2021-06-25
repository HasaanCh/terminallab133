import React,{Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuth,getCookie } from '../helpers/auth';

export default class AddMatch extends Component
{

    constructor(props)
    {
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={
            teama:"",
            teamb:"",
            city:"",
            date:"",
            notenotification:"",
            shownotification:"hidden"
        };
    }


    onChange=(e)=>
    {
       if(e.target.name==="city")
       {
        this.setState({city:e.target.value});
       }

       if(e.target.name==="date")
       {
        this.setState({date:e.target.value});
       }
        
    }

    handleSubmit(e)
    {
        console.log(e);
        e.preventDefault();

        var teamaa=e.target[0].value;
        var teambb=e.target[1].value;
        var cityy=e.target[2].value;
        var datee=e.target[3].value;

        console.log(teamaa);
        console.log(teambb);
        console.log(cityy);
        console.log(datee);

        if(teamaa !== "" && teambb !== "" && cityy!=="" && datee!=="")
        {
            if(teamaa === teambb)
            {
                this.setState({shownotification:"shown"});
                this.setState({notenotification:"Team must be different"});
            }
            else
            {
                axios.post(`http://localhost:5000/notes/add`,{
                    city:cityy,
                    date:datee,
                    teama:teamaa,
                    teamb:teambb
                }).then(res=>{
                   this.setState({shownotification:"shown"});
                   this.setState({notenotification:"Match Added Successfully"});
                   this.setState({teama:""});
                   this.setState({teamb:""});
                   this.setState({city:""});
                   this.setState({date:""});
                   console.log(res);
                }).catch(error=>console.log(error))
                // this.setState({shownotification:"shown"});
                // this.setState({notenotification:"Verification Complete"});
            }
        }
        else
        {
            this.setState({shownotification:"shown"});
            this.setState({notenotification:"Please Fill all the fields"});
        }


       
    }



render()
{
    return(
        
        <div className="form-wrapper">
             {isAuth() ? null:<Redirect to='/'/> }
           
             <form
                className='mx-auto max-w-xs relative '
                onSubmit={this.handleSubmit}
              >
                  <label for="citya">Choose City A:</label>
                <select name="citya" id="citya">
                <option value="Karachi Kings">Karachi Kings</option>
                <option value="Multan Sultans">Multan Sultans</option>
                <option value="Peshawar Zalmi">Peshawar Zalmi</option>
                <option value="Lahore Qalanders">Lahore Qalanders</option>
                <option value="Islamabad United">Islamabad United</option>
                <option value="Quetta Gladiators">Quetta Gladiators</option>
                </select>

                <label for="cityb">Choose City B:</label>
                <select name="cityb" id="cityb">
                <option value="Karachi Kings">Karachi Kings</option>
                <option value="Multan Sultans">Multan Sultans</option>
                <option value="Peshawar Zalmi">Peshawar Zalmi</option>
                <option value="Lahore Qalanders">Lahore Qalanders</option>
                <option value="Islamabad United">Islamabad United</option>
                <option value="Quetta Gladiators">Quetta Gladiators</option>
                </select>

                <input
                id="city"
                name="city"
                 type='text'
                 placeholder='city'
                 onChange={this.onChange}
                 value={this.state.city}
               />

                <input
                id="date"
                name="date"
                 type='text'
                 placeholder='Date'
                 onChange={this.onChange}
                 value={this.state.date}
               />


                <button
                  type='submit'            >
                  <span className='ml-3'>Add Match</span>
                </button>
                <div className={"notification "+this.state.shownotification}>
                  {this.state.notenotification}
                  
              </div>
              </form>

              
            
            
            </div>
    )
}
}