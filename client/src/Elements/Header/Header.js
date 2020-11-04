import React, {Component} from 'react';
import SearchBar from '../SearchBar/SeachBar'
import './Header.css'




class Header extends Component  {


    componentDidMount() {
        
        const menuBtn = document.querySelector(".menu-icon span");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const items = document.querySelector(".nav-items");
        const form = document.querySelector(".form");
        menuBtn.onclick = () => {
            items.classList.add("active");
            menuBtn.classList.add("hide");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        };
        cancelBtn.onclick = () => {
            items.classList.remove("active");
            menuBtn.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
            cancelBtn.style.color = "#ff3d00";
        };
        searchBtn.onclick = () => {
            form.classList.add("active");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        };

    }

    render () {
    return ( 

        
        <nav>
            <div className="menu-icon">
                <span className="fas fa-bars"></span>
            </div>
            <div className="logo">ETS News</div>
            <div className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Science</a></li>
            </div>
        </nav>
        // </>
    )
    }
}

export default Header;