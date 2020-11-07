import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_SPORT} from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import SportsGrid from '../../Elements/SportsGrid/SportsGrid'
import LoadMoreBtn from '../../Elements/LoadMoreBtn/LoadMoreBtn'


class Sports extends Component{

    state = {
        sportsArticles: [],
        loading: false,
        page:1,
        totalResult: 0,
        currentResult: 0,
        searchTerm: ''
    }

    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_SPORT}&apikey=${API_KEY}`;
        this.fetchSports(endpoint)
    }

    fetchSports = (endpoint) =>{
        fetch(endpoint)
        .then(result => result.json())
        .then(result =>{
            let pageCount = this.state.page +1;
            let resultCount = this.state.currentResult +20;

            this.setState({
                sportsArticles:[...this.state.sportsArticles, ...result.articles],
                totalResult: result.totalResults,
                currentResult: resultCount,
                page: pageCount,
                loading: false
            });

        })
        .catch(err => console.log('Fectch Error: ', err))
    }

    searchItem = (searchTerm) =>{

        let endpoint ='';

        this.setState({
            sportsArticles:[],
            page:1,
            totalResult:0,
            currentResult:0,
            searchTerm,
            loading:false
        })

        // check if the search term is empty or not
        if(searchTerm ===''){
            endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}`
        }
        else{
            endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&q=${searchTerm}`
        }

        this.fetchSports(endpoint);
    }

    loadMoreItems = () =>{
        let endpoint = '';

        endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&page=${this.state.page}`;

        this.fetchSports(endpoint);
    }


    render(){


        return(
            <>
            <SearchBar callback={this.searchItem}/>

            <div className="card-deck">
                {this.state.loading ? 
                <div class="container">
                <div class="loading">
                  <div class="loading__letter">L</div>
                  <div class="loading__letter">o</div>
                  <div class="loading__letter">a</div>
                  <div class="loading__letter">d</div>
                  <div class="loading__letter">i</div>
                  <div class="loading__letter">n</div>
                  <div class="loading__letter">g</div>
                  <div class="loading__letter">.</div>
                  <div class="loading__letter">.</div>
                  <div class="loading__letter">.</div>
                </div>
              </div>
               : null}
                {this.state.sportsArticles.map((elements, i)=>{
                    return <SportsGrid 
                    title={elements.title} author={elements.author? elements.author : "Unknown Author"} description={elements.description ? elements.description : "Unkown Description"}
                     date={elements.publishedAt} url={elements.url} image={elements.urlToImage} source = {elements.source.name ? elements.source.name : "unkown"}
                    />
                })}
                {(this.state.currentResult <= this.state.totalResult && !this.state.loading) ?
                    <LoadMoreBtn text= "Load More" onClick = {this.loadMoreItems}/> 
                    : null
                }
            </div>
        </>
        )
    }
}

export default Sports