import { useState } from 'react';
//import api from '../../services/api';
import './cadastro.css';

function CadastroJogo() {
  const [jogo, setJogo] = useState({
    nome: '',
    imagem: '',
    descricao: '',
    genero: '',
    desenvolvedora: '',
    lancamento: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setJogo({ ...jogo, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      //const response = await api.post('/cadastrar', jogo); 
      //console.log(response.data);
      setJogo({
        nome: '',
        imagem: '',
        descricao: '',
        genero: '',
        desenvolvedora: '',
        lancamento: '',
      });
      alert('Jogo cadastrado com sucesso!');
    } catch (error) {
      console.log(error.response);
      alert('Erro ao cadastrar jogo!');
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do Jogo</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={jogo.nome}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="imagem">URL da Imagem</label>
        <input
          type="url"
          id="imagem"
          name="imagem"
          value={jogo.imagem}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={jogo.descricao}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="lancamento">Data de Lançamento</label>
        <input
          type="date"
          id="lancamento"
          name="lancamento"
          value={jogo.lancamento}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="desenvolvedora">Desenvolvedora</label>
        <input
          type="text"
          id="desenvolvedora"
          name="desenvolvedora"
          value={jogo.desenvolvedora}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="genero">Gênero</label>
        <select
          id="genero"
          name="genero"
          value={jogo.genero}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione o gênero</option>
          <option value="ação">Ação</option>
          <option value="aventura">Aventura</option>
          <option value="esportes">Esportes</option>
          <option value="estratégia">Estratégia</option>
          <option value="simulação">Simulação</option>
          <option value="RPG">RPG</option>
          <option value="terror">Terror</option>
          <option value="outros">Outros</option>
        </select>
        
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroJogo;
