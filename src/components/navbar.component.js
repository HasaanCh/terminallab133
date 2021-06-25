import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import { signout } from '../helpers/auth';
import { authenticate, isAuth,getCookie } from '../helpers/auth';



export default class Navbar extends Component
{

    render()
    {
        return(
        <header className="main-header">
            <div className="inner-header">
            <div className="left-logo">
                    <h3>
                        <Link to="/" className="logo-link">PSL APP</Link>
                        </h3>
                </div>
            
                <div className="right-header">
                    <div className="items">
                    {isAuth() ? null:<div className="profile item-header">
                                <Link to="/login" className="notes-link">Login</Link>
                    </div> }
                    
                    <div className="profile item-header">
                            <button
                        onClick={() => {
                            signout(() => {
                                var win = window.open('/',"_self");
                                win.focus();
                            });
                        }}
                        >Logout
                            </button>
                    </div>
                   
                    </div>
                </div>
            </div>
               
        </header>
        )
        
    }


}