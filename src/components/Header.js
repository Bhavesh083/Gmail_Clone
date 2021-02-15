import React from 'react'
import './styles/Header.css'

function Header() {
    return (
        <div className='hdr'>

            <div className='hd-left'>
                <i class="fas fa-bars"></i>
                <i class="far fa-envelope"></i>
                <span>Gmail</span>
            </div>

            <div className='hd-midle'>
                <i class="fas fa-search"></i>
                <input type='text' placeholder='Search mail'/>
                <i class="fas fa-caret-down"></i>
            </div>

            <div className='hd-right'>
            <i class="fas fa-ellipsis-v"></i>
                <i class="far fa-bell"></i>
                <i class="far fa-user-circle"></i>
            </div>
            
        </div>
    )
}

export default Header
