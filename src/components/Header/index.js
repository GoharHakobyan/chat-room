import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Header/header.module.css'


const Header = (props) => {
    return (
        <>
            <div className={s.header}>
                <img src='https://www.designerd.com.br/wp-content/uploads/2016/08/belos-animais-em-forma-de-icones-ilustrados-por-roman-korolev-1.jpg' alt='l' />
                <div className={s.loginBlock}>
                    {props.isAuth?props.login:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
            </div>
            
        </>
    )

}

export default Header