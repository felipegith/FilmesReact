import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            filme: []
        }
        
    }

    componentDidMount(){
        
        let url= 'https://sujeitoprogramador.com/r-api/?api=filmes'
        fetch(url)
        .then((r)=>r.json())
        .then((json)=>{
            this.setState({filme: json})
            console.log(json)
        })
    }
    
    render(){
        return(
            <div className="container">
                <div className="lista-filmes">
                    { this.state.filme.map((mapeando)=>{
                        return(
                            <article key={mapeando.id} className="filme">
                                <strong>{mapeando.nome}</strong>
                                <img src={mapeando.foto} alt="capa"/>
                                <Link to={`/filme/${mapeando.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
}
}
export default Home;
