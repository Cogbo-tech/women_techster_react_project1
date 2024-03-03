
import './LandingPageHeader.css'
import './HeroPage.css'
import './ButtonHero.css'
// import { Component } from 'react';
// import { super } from '@babel/types';



export const LandingPageHeader = () => {
    return (
        <header className="header">
            <div className="logo">Logo
                <img ></img>
            </div>
            <div className="menu">
                <li><a href='#/'>Premium</a></li>
                <li><a href='#/'>Support</a></li>
                <li><a href='#/'>Download</a></li>
                <li>|</li>
                <li><a href='#/'>sign up</a></li>
                <li><a href='#/'>log in</a></li>
            </div>

        </header>
    )
}
/*
export class LandingPageHeader extends Component{
    constructor(){
        super()
    }
    render(){
<header className="header">
            <div className="logo">Logo
                <img ></img>
            </div>
            <div className="menu">
                <li><a href='#/'>Premium</a></li>
                <li><a href='#/'>Support</a></li>
                <li><a href='#/'>Download</a></li>
                <li>|</li>
                <li><a href='#/'>sign up</a></li>
                <li><a href='#/'>log in</a></li>
            </div>

        </header>
    
    }
// }*/