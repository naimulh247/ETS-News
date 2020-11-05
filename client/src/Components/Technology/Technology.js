import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar'



class Technology extends Component{

    state = {
        techArticles:[],
        currentPage:0,
        loading: false,
        totalPages: 0,



    }

    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}`;
        this.fetchTech(endpoint)

    }


    fetchTech = (endpoint) =>{
        fetch(endpoint)
        .then(result => result.json())
        .then(result =>{
            console.log(result.articles)
            this.setState({
                techArticles: [...this.state.techArticles, ...result.articles],
                loading:false
            })
        })
        .catch(err => console.log('Error: ', err))
    }




    render(){


        return(
            <div>
                <SearchBar/>
                {this.state.techArticles.map((elements, i)=>{
                    
                })}
            </div>
        )
    }
}

export default Technology