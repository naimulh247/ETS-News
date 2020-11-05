import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import LoadMoreBtn from '../../Elements/LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import TechnologyGrid from '../../Elements/TechnologyGrid/TechnologyGrid'
// import LoadMoreBtn  from '../../Elements/LoadMoreBtn/LoadMoreBtn'


class Technology extends Component{

    state = {
        techArticles:[],
        currentResult:0,
        loading: false,
        totalResult: 0,
        page: 1,
        searchTerm: ''

    }

    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}`;
        this.fetchTech(endpoint)

    }

    loadMoreItems = () =>{
        let endpoint =''

        // if(searchTerm === ''){
            // {this.state.currentResult + 20}
            endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&page=${this.state.page}`;
            console.log(this.state.page, this.state.currentResult)
        // }

        this.fetchTech(endpoint)
    }
    fetchTech = (endpoint) =>{
        fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    
            console.log(result.articles);
            console.log(result.totalResults);
            console.log(result.articles[0].author);
            let pageCount = this.state.page + 1;
            let resultCount  = this.state.currentResult +20;
            this.setState({
                techArticles: [...this.state.techArticles, ...result.articles],
                totalResult: result.totalResults,
                currentResult: resultCount,
                page: pageCount,
                loading: false
            });
            
            // console.log(this.state.articles[0].author)
        })
        .catch(error=>console.log('Error: ', error));
    }




    render(){
        // console.log(this.state.techArticles[0].title)

        return(
        // <h1>{this.state.techArticles.title}</h1>
            <div>
                {this.state.loading ? <h1>Loading...</h1> : null}
                {this.state.techArticles.map((elements, i)=>{
                    return <TechnologyGrid title={elements.title} author={elements.author}/>
                })};
                {(this.state.currentResult <= this.state.totalResult && !this.state.loading) ?
                    <LoadMoreBtn text= "Load More" onClick = {this.loadMoreItems}/> 
                    : null
                }
            </div>
        )
    }
}

export default Technology