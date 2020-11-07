import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar'
import HomeMain from '../../Elements/HomeMain/HomeMain';
import HomeGrid from '../../Elements/HomeMain/HomeGrid';


class Home extends Component{

    state = {
        sportArticles: [],
        techArticles: [],
        entArticles:[],
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        // loading
    }

    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&pageSize=3`;

        this.fetchTemp(endpoint, '')

        
        
    }

    
        
    

    fetchArticles = (endpoint) =>{
        fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    
            // console.log(result.articles);
            // console.log(result.articles[0].author);
            this.setState({
                articles: [...result.articles],
                loading: false
            });
            
            // console.log(this.state.articles[0].author)
        })
        .catch(error=>console.log('Error: ', error));
    }


    fetchTemp = (endpoint, query) =>{
        if(query === ''){fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    
            console.log(result.articles);
            console.log(result.articles[0].author);
            this.setState({
                sportArticles: [...this.state.sportArticles, ...result.articles],
            });
            
            // console.log(this.state.articles[0].author)
        })
        .catch(error=>console.log('Sport Error: ', error));

        fetch(`${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&pageSize=3`)
            .then(result=>result.json())
            .then(result =>{
        
                // console.log(result.articles);
                console.log(result.articles[0].author);
                this.setState({
                    techArticles: [...this.state.techArticles, ...result.articles],
                });
            
            // console.log(this.state.articles[0].author)
        }).catch(error=>console.log('Tech Error: ', error));

        fetch(`${API_URL}${API_TP_ENT}&apiKey=${API_KEY}&pageSize=3`)
            .then(result=>result.json())
            .then(result =>{
        
                console.log(result.articles);
                // console.log(result.articles[0].author);
                this.setState({
                    entArticles: [...this.state.entArticles, ...result.articles],
                    loading: false
                });
            
            // console.log(this.state.articles[0].author)
        })
        
        .catch(error=>console.log('Ent Error: ', error));}
    }

    searchItem = (searchTerm) =>{
        console.log(searchTerm)
        let endpoint = '';

        this.setState({
            sportArticles: [],
            techArticles: [],
            entArticles:[],
            loading: true,
            searchTerm
        })

        if(searchTerm === ''){
            endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&pageSize=3`;
            this.fetchTemp(endpoint,'');
        }
        else{
            endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&pageSize=3&q=${searchTerm}`;
            let query = searchTerm;
            this.fetchTemp(endpoint,query);

        }

    }

    render (){ 
        // {this.state.articles.map((elements, o)=>{
        //     console.log(elements.author)
        // })}

        return (

            // {state.articles}
            // <div>Home</div>
        <>
            <SearchBar callback = {this.searchItem}/>


                {/* {this.state.loading ? <h1>Loading<br></br></h1> : <>
                {this.state.sportArticles.length ?  
                <div className="card-deck">
                    {this.state.sportArticles.map((elements, i)=>{

                    return <HomeMain clickable = {elements.urlToImage ? true : false} 
                    cat='sports' image = {elements.urlToImage} author= {elements.author} description = {elements.description} 
                    date = {elements.publishedAt} linkToArticle={elements.url} title={elements.title}>
                    </HomeMain>})}
                </div>
                    : <h1>Nothing can be found in Sports?? Sowwyyy....</h1>
                } */}
                
                
                {/* {this.state.techArticles.length? 
                <div>
                    <h1>Trending in Technology</h1>
                 {this.state.techArticles.map((elements, i)=>{

                    return <HomeMain clickable = {elements.urlToImage ? true : false} 
                    image = {elements.urlToImage} author= {elements.author} description = {elements.description} 
                    date = {elements.publishedAt} linkToArticle={elements.url} title={elements.title}>
                    </HomeMain>})}
                </div> :<h1>Nothing can be found in Technology?? Sowwyyy....</h1>} */}
                {/* {this.state.entArticles.lenght?
                <div>

                <h1>Trending in Entertainment</h1>
                {this.state.entArticles.map((elements, i)=>{

                    return <HomeMain clickable = {elements.urlToImage ? true : false} 
                    image = {elements.urlToImage} author= {elements.author} description = {elements.description} 
                    date = {elements.publishedAt} linkToArticle={elements.url} title={elements.title}>
                    </HomeMain>})}
                </div> :<h1>Nothing can be found in Entertainment?? Sowwyyy....</h1>} */}
                {/* </>} */}

                {this.state.loading 
                ? 
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
                : 
                
                <>
                    {this.state.entArticles.length ?
                    <>
                    <h4>Latest News in Entertainment <i className="fas fa-film"></i> <i className="fas fa-vide"></i></h4>
                    <div className="card-deck" style={{padding: "10px 10px"}}>
                        {this.state.entArticles.map((elements, i)=>{
                            return <HomeGrid title={elements.title}/>
                        })}
                    </div>
                    </>
                    : <h1>Nothing can be found in Entertainment</h1>
                  }

                  {this.state.techArticles.length ?
                  <>
                  <h4>Latest News in Technology </h4>
                  <div className="card-deck" style={{padding: "10px 10px"}}>
                      {this.state.techArticles.map((elements, i)=>{
                          return <HomeGrid title={elements.title}/>
                      })}
                  </div>
                  </>
                  : <h1> Nothing can be found in Technology</h1>
                  }

                  {this.state.sportArticles.length ?
                  <>
                  <h4>Latest News in Sports</h4>
                  <div className="card-deck" style={{padding: "10px 10px"}}>
                      {this.state.sportArticles.map((elements, i)=>{
                          return <HomeGrid title={elements.title}/>
                      })}
                  </div>
                  </>
                  : <h1>Nothing can be found in Sports</h1>
                  }


                </>
            }
        </>
        )
    }
}

export default Home;