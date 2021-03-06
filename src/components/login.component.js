import React,{Component} from 'react';
import { authenticate, isAuth } from '../helpers/auth';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';

export default class Login extends Component
{

    constructor(props)
    {
        super(props);

       this.handleSubmit=this. handleSubmit.bind(this)

        this.state={
            email:"",
            password:"",
            loginshow:"hidden",
            logintext:""
        };
    }

    onChange=(e)=>
    {
       if(e.target.type==="email")
       {
        this.setState({email:e.target.value});
       }

       if(e.target.type==="password")
       {
        this.setState({password:e.target.value});
       }
        
    }



    handleSubmit(e)
    {
        console.log(e);
        e.preventDefault();

        axios.post(`http://localhost:5000/api/login`,{
            email:e.target[0].value,
            password:e.target[1].value
        }).then(res=>{
            authenticate(res);
            var win = window.open('/',"_self");
            win.focus();
            // toast.success(`Hey ${res.data.user.name}, Welcome back!`);
        }).catch(()=>
          {
            this.setState({loginshow:"shown"});
            this.setState({logintext:"Wrong password or email"});
          }
         
        )
    }



    render()
    {
        return(
            
        <div className="form-wrapper">
            {isAuth() ? <Redirect to='/' /> : null}
            <form
                className='mx-auto max-w-xs relative '
                onSubmit={this.handleSubmit}
              >
                <input
                 
                  type='email'
                  placeholder='Email'
                  onChange={this.onChange}
                  value={this.state.email}
                />
                <input
                 
                  type='password'
                  placeholder='Password'
                  onChange={this.onChange}
                  value={this.state.password}
                />
                <button
                  type='submit'            >
                  <span className='ml-3'>Sign In</span>
                </button>
                <div className={this.state.loginshow}>{this.state.logintext}</div>
              </form>
        </div>
        )
    }

}
