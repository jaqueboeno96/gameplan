import {  useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './jogos-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

function Jogos(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [jogos, setJogos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJogos(){
            await api.get(`/games/${id}`,{
                params:{
                    api_key: '5a27dc9fbc9a4cdabc281f89c0268f3e',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                console.log(response.data);
                setJogos(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('JOGO NÃO ENCONTRADO')
                navigate('/', { replace: true})
                return;
            })
        }

        loadJogos();

        return () => {
            console.log('componente foi desmontado')
        }
    }, [id, navigate])

    function salvarJogos(){
        const minhaLista = localStorage.getItem('@gameplan');

        let jogosSalvos = JSON.parse(minhaLista) || [];

        const hasJogos = jogosSalvos.some ( (jogosSalvos) => jogosSalvos.id === jogos.id)

        if(hasJogos){
            toast.warning('Esse jogo já esta na lista!')
            return;
        }

        jogosSalvos.push(jogos);
        localStorage.setItem('@gameplan', JSON.stringify(jogosSalvos));
        toast.success('Jogo salvo com sucesso!')
    }

    if(loading){
        return(
            <div className='jogos-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='jogos-info'>
            <h1>{jogos.name}</h1>
            <img src={jogos.background_image} alt={jogos.name}/>

            <h3>Descrição</h3>
            <span>{jogos.description_raw}</span>

            <strong>Avaliação: {jogos.rating}</strong>

            <div className='area-buttons'>
                <button onClick={salvarJogos}>Salvar</button>
                <button>
                  <a target='blank' rel='external' href={jogos.website}>
                    Ver mais
                  </a>
                </button>
            </div>
        </div>
    )
}

export default Jogos;