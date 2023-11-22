'use client';
import {useState} from 'react';
export default function Footer () {
    return(
        <footer className='footer'>
            <div className='footer-link'>
                <a href="">Meta</a>
                <a href="">Информация</a>
                <a href="">Блог</a>
                <a href="">Вакансии</a>
                <a href="">Помощь</a>
                <a href="">API</a>
                <a href="">Конфиденциальность</a>
                <a href="">Условия</a>
                <a href="">Места</a>
                <a href="">Instagram Lite</a>
                <a href="">Threads</a>
                <a href="">Загрузка контактов и лица, не являющиеся пользователями</a>
                <a href="">Meta Verified</a>
            </div>
            <div className='copyright'>
                <select>
                    <option value="English" key="">English</option>
                </select>
                <p>© 2023 Instagram from Meta</p>
            </div>
        </footer>
    )
}