import React, {Component} from 'react'
import { API_URL, API_TP_ENT, API_KEY } from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import EntertainmentGrid from '../../Elements/EntertainmentGrid/EntertainmentGrid'
import LoadMoreBtn from '../../Elements/LoadMoreBtn/LoadMoreBtn'
class Entertainment extends Component{

    state={
        entArticles: [],
        loading: false,
        currentResult: 0,
        totalResult:0,
        page: 1,
        searchTerm: ''
    }


    componentDidMount(){
        this.setState({loading:true});

        const endpoint = `${API_URL}${API_TP_ENT}&apiKey=${API_KEY}`;
        this.fetchEnt(endpoint);
    }

    fetchEnt = (endpoint) =>{
        fetch(endpoint)
        .then(result => result.json())
        .then(result =>{
            console.log(result.articles)
            
            let pageCount = this.state.page + 1;
            let resultCount  = this.state.currentResult +20;
            this.setState({
                entArticles: [...this.state.entArticles, ...result.articles],
                totalResult: result.totalResults,
                currentResult: resultCount,
                page: pageCount,
                loading: false
            })
        })
        .catch(err => console.log('Fecth Error: ', err));
    }

    searchItem = (searchTerm) =>{
        console.log('Search Term: ', searchTerm)
        let endpoint ='';

        this.setState({
            entArticles:[],
            page:1,
            totalResult:0,
            currentResult:0,
            searchTerm,
            loading:false
        })

        if(searchTerm ===''){
            endpoint = `${API_URL}${API_TP_ENT}&apiKey=${API_KEY}`
        }
        else{
            endpoint = `${API_URL}${API_TP_ENT}&apiKey=${API_KEY}&q=${searchTerm}`
        }

        this.fetchEnt(endpoint);
    }

    loadMoreItems = () =>{
        let endpoint = '';

        endpoint = `${API_URL}${API_TP_ENT}&apiKey=${API_KEY}&page=${this.state.page}`;

        this.fetchEnt(endpoint);
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
              </div> : null}
                {this.state.entArticles.map((elements, i)=>{
                    return <EntertainmentGrid 
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


export default Entertainment