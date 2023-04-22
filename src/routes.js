// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Salvar from "./pages/Salvar";
import CadastroJogo from "./pages/CadastroJogo";


import Erro from "./pages/Erro";

import Header from "./components/Header";



function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/jogos/:id' element={<Jogos/> } />
                <Route path='/salvos' element={<Salvar/> } />
                <Route path='/cadastro' element={<CadastroJogo/> } />

                <Route path="*" element={ <Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;