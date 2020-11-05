import React, {Component} from 'react';
import '../Header/Header.css'


class SearchBar extends Component {

    state = {
        value:''
    }

    timeout =null;
    doSearch = (event) =>{
        this.setState({value:event.target.value});
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value); // wont work unless if you are not sending the call back function from the home page
        }, 500);
    }
    render (){

        return (
            
            

            <nav>
                <div class="search-icon">
                    <span class="fas fa-search"></span>
                </div>
                <div class="cancel-icon">
                <span class="fas fa-times"></span> 
                </div>
                <form>
                <input type="search" class="search-data" placeholder="Search" required onChange={this.doSearch} value={this.state.value}/>
                <button class="fas fa-search"></button>
                </form>
            </nav>


        )
    }
}
export default SearchBar;