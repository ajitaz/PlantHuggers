import React, { Component } from 'react';
import { Overview } from '../Overview/overview.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { User } from '../User/user.component';
import './board.component.css';

export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            content: ''

        }
    }

componentDidUpdate(){
    console.log('state changed >>',this.state)
}


    handleClick = (e) => {
        const { name } = e.target;

        this.state.content = name
        console.log(this.state.content);
    }

    render() {
        let display;
        switch (this.content) {
            case 'overview':
                display = <Overview />
                break;
            case 'user':
                display = <User />
                break;

            default:
                display = <User />
                break;
        }
        return (
            <>
                <Sidebar />
                <div className="main-content">
                    <header>
                        <div className="welcome">
                            <p>Welcome, Ramesh</p>
                        </div>
                        <div className="social-icons">
                            <i className="fas fa-sign-out-alt"></i><span>Logout</span>
                        </div>
                    </header>
                    {display}

                </div>
            </>
        )
    }
}