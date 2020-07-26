import React from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Paginas/Home/Home'
import Header from './components/Header/Header'
import Erro from './Paginas/Erro/Erro'
import Filme from'./Paginas/Filme/Filme'

const Routes=()=>{
    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route excat path="/filme/:id" component={Filme}/>
            <Route path="*" component={Erro}/>    
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;