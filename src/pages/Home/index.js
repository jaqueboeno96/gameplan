import  { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

//api key: 5a27dc9fbc9a4cdabc281f89c0268f3e
//https://api.rawg.io/api/games
//https://api.rawg.io/api/games?key=5a27dc9fbc9a4cdabc281f89c0268f3e&language=pt-BR

function Home(){

    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadJogos(){
            const response = await api.get('games', {
                params:{
                    api_key: '5a27dc9fbc9a4cdabc281f89c0268f3e',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setJogos(response.data.results.slice(0, 50));
            setLoading(false);

        }
        
        loadJogos();

    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando Jogos...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
          <div className='lista-jogos'>
            {jogos.map((jogo) =>{
                return(
                    <article key={jogo.id}>
                        <strong>{jogo.name}</strong>
                        <img src={jogo.background_image} alt={jogo.name}/>
                        <Link to={`/jogos/${jogo.id}`}>Acessar</Link>
                    </article>
                )
            })}
          </div>
        </div>
    )
}

export default Home;