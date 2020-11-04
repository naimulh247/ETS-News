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
            <div>
            <div className="search-icon">
                <span className="fas fa-search"></span>
            </div>
            <div className="cancel-icon">
                <span className="fas fa-times"></span>
            </div>
            <div className="form">
                <input type="search" className="search-data" placeholder="Search" required onChange={this.doSearch} value={this.state.value}/>
                <button type="submit" className="fas fa-search"></button>
            {/* </form> */}</div>
            </div>
        )
    }
}
export default SearchBar;