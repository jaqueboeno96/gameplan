import { useEffect, useState } from 'react';
import './salvar.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Salvar(){

    const [jogos, setJogos] = useState([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem('@gameplan');
        setJogos(JSON.parse(minhaLista) || [])
    }, [])

    function excluirJogo(id){
        let filtroJogos = jogos.filter( (item) => {
            return (item.id !== id)
        })

        setJogos(filtroJogos);
        localStorage.setItem('@gameplan', JSON.stringify(filtroJogos))
        toast.success('Jogo removido com sucesso!')
    }

    return(
        <div className='meus-jogos'>
            <h1>Minha lista de jogos</h1>

            {jogos.length === 0 && <span>Você não possui nenhum jogo salvo!</span>}

            <ul>
                {jogos.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.name}</span>

                            <div>
                                <Link to={`/jogos/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => excluirJogo(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Salvar;