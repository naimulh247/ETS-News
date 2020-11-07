import React, {Component} from 'react';
import {API_URL, API_KEY, API_TP_ENT, API_TP_SPORT, API_TP_TECH} from '../../config';
import SearchBar from '../../Elements/SearchBar/SeachBar';
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

    }

    // load up the 3 articles when visiting home page without any seearchs
    componentDidMount(){
        this.setState({loading: true});

        const endpoint = `${API_URL}${API_TP_SPORT}&apiKey=${API_KEY}&pageSize=3`;

        this.fetchTemp(endpoint, '')

        
        
    }


    // parallel api calls? to get 3 articles in each topic
    fetchTemp = (endpoint, query) =>{
        if(query === ''){fetch(endpoint)
        .then(result=>result.json())
        .then(result =>{
    
            this.setState({
                sportArticles: [...this.state.sportArticles, ...result.articles],
            });
            
        })
        .catch(error=>console.log('Sport Error: ', error));

        fetch(`${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&pageSize=3`)
            .then(result=>result.json())
            .then(result =>{
        
                this.setState({
                    techArticles: [...this.state.techArticles, ...result.articles],
                });
            

        }).catch(error=>console.log('Tech Error: ', error));

        fetch(`${API_URL}${API_TP_ENT}&apiKey=${API_KEY}&pageSize=3`)
            .then(result=>result.json())
            .then(result =>{

                this.setState({
                    entArticles: [...this.state.entArticles, ...result.articles],
                    loading: false
                });
            
        })
        
        .catch(error=>console.log('Ent Error: ', error));}

        else{
            console.log('endpoing',endpoint)
            fetch(endpoint)
            .then(result=>result.json())
            .then(result =>{
    
            console.log('sports:',result.articles);
            this.setState({
                sportArticles: [...this.state.sportArticles, ...result.articles],
            });
            
        })
        .catch(error=>console.log('Sport Error: ', error));

        fetch(`${API_URL}${API_TP_TECH}&apiKey=${API_KEY}&pageSize=3&q=${query}`)
        .then(result=>result.json())
        .then(result =>{
    
            console.log(result.articles[0].author);
            this.setState({
                techArticles: [...this.state.techArticles, ...result.articles],
            });
            
        })
        .catch(error=>console.log('tech Error: ', error));

        fetch(`${API_URL}${API_TP_ENT}&apiKey=${API_KEY}&pageSize=3&q=${query}`)
        .then(result=>result.json())
        .then(result =>{
    
            this.setState({
                entArticles: [...this.state.entArticles, ...result.articles],
                loading: false
            });
            
        })
        .catch(error=>console.log('ent Error: ', error));

        
        }
    }

    // searchItem for updating the search term and then call the api
    searchItem = (searchTerm) =>{

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
        

        return (

        <>
            <SearchBar callback={this.searchItem}/>
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
                {/* check if the articels aare present then show them other wise an no articel found message */}
                    {this.state.entArticles.length ?
                    <>
                    <h4><a href="ent">Entertainment <i className="fas fa-film"></i> <i className="fas fa-vide"></i></a></h4>
                    <div className="card-deck" style={{padding: "10px 10px"}}>
                        {this.state.entArticles.map((elements, i)=>{
                            return <HomeGrid title={elements.title} description={elements.description} url={elements.url}
                            image={elements.urlToImage ? elements.urlToImage : './images/ent.jpeg'} author={elements.author} source={elements.source.name}/>
                        })}
                    </div>
                    </>
                    : <h1>Nothing can be found in Entertainment</h1>
                  }

                  {this.state.techArticles.length ?
                  <>
                  <h4><a href="/tech">Technology <i class="fal fa-computer-speaker"></i></a></h4>
                  <div className="card-deck" style={{padding: "10px 10px"}}>
                      {this.state.techArticles.map((elements, i)=>{
                          return <HomeGrid title={elements.title} description={elements.description} url={elements.url}
                          image={elements.urlToImage ? elements.urlToImage : './images/tech.jpg'} author={elements.author} source={elements.source.name}/>
                      })}
                  </div>
                  </>
                  : <h1> Nothing can be found in Technology</h1>
                  }

                  {this.state.sportArticles.length ?
                  <>
                  <h4><a href="sports">Sports</a></h4>
                  <div className="card-deck" style={{padding: "10px 10px"}}>
                      {this.state.sportArticles.map((elements, i)=>{
                          return <HomeGrid title={elements.title} description={elements.description} url={elements.url}
                          image={elements.urlToImage ? elements.urlToImage : './images/sports.jpg'} author={elements.author} source={elements.source.name}/>
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