import React from "react"
import logo from "../../../assets/img/logo.gif"
import "./Header.css"

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <Link className="header-logo" to="/">
                <img className="header-logo-image" src={logo} alt="Logo" />
            </Link>
            <nav className="nav">
                <div className="nav-title">Меню</div>
                <Link className="nav-link">О компании</Link>
                <Link className="nav-link">Новости</Link>
                <Link className="nav-link">Продукты</Link>
                <Link className="nav-link">Услуги</Link>
                <Link className="nav-link">Клиенты</Link>
                <Link className="nav-link">Партнеры</Link>
                <Link className="nav-link">Статьи</Link>
                <Link className="nav-link">Вакансии</Link>
                <Link className="nav-link">Поддержка</Link>
            </nav>
        </header>
    )
}
