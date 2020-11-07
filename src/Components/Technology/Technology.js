import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_TECH} from '../../config';
import LoadMoreBtn from '../../Elements/LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import TechnologyGrid from '../../Elements/TechnologyGrid/TechnologyGrid'



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



            endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&page=${this.state.page}`;
            console.log("page count: ", this.state.page, "currentResult: ", this.state.currentResult)


        this.fetchTech(endpoint)
    }
    fetchTech = (endpoint) =>{
        fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    

            console.log(result.articles[0].author);
            console.log()
            let pageCount = this.state.page + 1;
            let resultCount  = this.state.currentResult +20;
            this.setState({
                techArticles: [...this.state.techArticles, ...result.articles],
                totalResult: result.totalResults,
                currentResult: resultCount,
                page: pageCount,
                loading: false
            });
            

        })
        .catch(error=>console.log('Error: ', error));
    }

    searchItem = (searchTerm) =>{
        console.log("SearchTerm: ",searchTerm)
        let endpoint = ''

        this.setState({
            techArticles:[],
            loading: true,
            page:1,
            totalResult: 0,
            currentResult:0,
            searchTerm
        })
        if(searchTerm ===''){
            endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}`;
        }
        else{
            endpoint = `${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&q=${searchTerm}`;
        }
        this.fetchTech(endpoint)
    }




    render(){


        return(

        <>
            <SearchBar callback={this.searchItem}/>
            
            <div className="card-deck">
                {this.state.loading ? <div class="container">
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
                {this.state.techArticles.map((elements, i)=>{
                    return <TechnologyGrid 
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

export default Technology