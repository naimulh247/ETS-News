import React, {Component} from 'react';


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
                <div class="menu-icon">
                    <span class="fas fa-bars"></span>
                </div>
                <div class="logo"><a href="/">ETS News</a></div>
                <div class="nav-items">

                    <li><a href="/">Home</a></li>
                    <li><a href="ent">Entertainment</a></li>
                    <li><a href="tech">Technology</a></li>
                    <li><a href="sports">Sports</a></li>

                </div>


                <div class="search-icon">
                    <span class="fas fa-search"></span>
                </div>
                <div class="cancel-icon">
                <span class="fas fa-times"></span> 
                </div>
                <form onSubmit={e => { e.preventDefault(); }}> 
                <input type="search" class="search-data" placeholder="Search" required onChange={this.doSearch} value={this.state.value}/>
                <button class="fas fa-search"></button>
                </form>
            </nav>


        )
    }
}
export default SearchBar;