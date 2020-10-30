import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import HomeMain from '../../Elements/HomeMain/HomeMain';

class Home extends Component{

    state = {
        articles: [],
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        // loading
    }
    
    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}`;
        this.fetchArticles(endpoint)
        
    }

    fetchArticles = (endpoint) =>{
        fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    
            console.log(result.articles);
            console.log(result.articles[0].author);
            this.setState({
                articles: [...this.state.articles, ...result.articles],
                loading: false
            });
            
            // console.log(this.state.articles[0].author)
        })
        .catch(error=>console.log('Error: ', error));
    }

    render (){ 
        {this.state.articles.map((elements, o)=>{
            console.log(elements.urlToImage)
        })}

        return (

            // {state.articles}
            // <div>Home</div>
            <div className="0000">
                test
                {this.state.articles.map((elements, i)=>{
                    // return <HomeMain 
                    // clickable ={ true }
                    // image = {elements.urlToImage}/>
                    // <h1>{JSON.stringify(elements.author)}</h1>
                })}
                <HomeMain/>
            </div>
        )
    }
}

export default Home;