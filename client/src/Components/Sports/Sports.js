import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import SportsGrid from '../../Elements/SportsGrid/SportsGrid'
import LoadMoreBtn from '../../Elements/LoadMoreBtn/LoadMoreBtn'
import './Sports.css'

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
            console.log('pageCount: ', pageCount, 'resutlCount: ', resultCount, 'totalresults: ',result.totalResults)
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
        console.log('Search Term: ', searchTerm)
        let endpoint ='';

        this.setState({
            sportsArticles:[],
            page:1,
            totalResult:0,
            currentResult:0,
            searchTerm,
            loading:false
        })

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
            <div>
                <SearchBar callback={this.searchItem} />
                {this.state.loading? <h1>Loading...</h1> : null}
                {this.state.sportsArticles.map((elements, i)=>{
                    return <SportsGrid title={elements.title} author={elements.author}/>
                })}
                {(this.state.currentResult <= this.state.totalResult && !this.state.loading)
                ?
                <LoadMoreBtn text='Load More Sports' onClick={this.loadMoreItems}/>
                :null}
            </div>
        )
    }
}

export default Sports