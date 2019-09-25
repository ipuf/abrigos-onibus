<script>
  import { createEventDispatcher } from 'svelte'
  import Switch from '../inputs/Switch.svelte'
  
  const dispatch = createEventDispatcher()
  
  let existe
  let qualidade
  let calcerta
  let largura_maior
  let largura_menor

  $: formObj = {
    id: 'passeio',
    body: {
      existe: existe,
      qualidade: qualidade,
      calcerta: calcerta,
      largura_maior: largura_maior,
      largura_menor: largura_menor
    }
  }

  function sendForm () {
    dispatch('send', {
      obj: formObj
    })
  }
</script>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: auto;
		width: 75%;
	}
	.header { 
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 35px;
		background-color: darkblue;
		margin-bottom: 5px;
	}
	h1 {
    font-size: 1.5em;
		font-weight: normal;
		color: white;
    border: none;
  }
	.counter {
		color: white;
	}
	h2 {
		font-size: 1em;
		font-weight: normal;
		color: gray;
		margin-top: 8px;
		margin-bottom: 2px;
		align-self: start;
	}
	input[type="radio"] {
		font-size: 1em;
    opacity: 0;
    height: 1px;
		margin: 0;
  }
	input[type="number"] {
		font-size: 1em;
		align-self: stretch;
    height: 60px;
		border: 1px solid lightgray;
		border-radius: 2px;
	}
	.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: space-between;
		align-items: center;
    align-content: flex-end;
    width: 100%;
    margin: 10px 0px;
  }
	.next {
		font-size: 1em;
		border-radius: 2px;
		background-color: green;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		transition: all 0.5s;
		cursor: pointer;
		margin-left: 5px;
		width: 60%;
	}
	.next span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	.next span:after {
		content: "\003e";
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	.next:hover span {
		padding-right: 25px;
	}
	.next:hover span:after {
		opacity: 1;
		right: 0;
	}
	.back {
		font-size: 1em;
		border-radius: 2px;
		background-color: green;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		cursor: pointer;
		margin-right: 5px;
		width: 35%;
	}
	label {
		display: flex;
		font-size: 1em;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
	}
	p {
		text-align: center;
		margin: auto;
	}
</style>

<div class="header">	
	<h1>Calçada</h1>
	<span class="counter">2/4</span>
</div>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h2>Calçada existe:</h2>
  <Switch>
    <label slot="good">
      <p>Sim</p>
      <input type="radio" name="existe" bind:group={existe} value={'sim'} required>
    </label>
    <label slot="bad">
      <p>Não</p>
      <input type="radio" name="existe" bind:group={existe} value={'não'} required>
    </label>
  </Switch>

  <h2>Estado da calçada:</h2>
  <Switch estados={3}>
    <label slot="good">
      <p>Bom</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'noref'} required>
    </label>
    <label slot="medium">
      <p>Precisa de reforma</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'ref'} required>
    </label>
    <label slot="bad">
      <p>Não há / arruinada</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'troca'} required>
    </label>
  </Switch>

  <h2>Padrão Calçada Certa:</h2>
  <Switch>
    <label slot="good">
      <p>Sim</p>
      <input type="radio" name="calcerta" bind:group={calcerta} value={'sim'} required>
    </label>
    <label slot="bad">
      <p>Não</p>
      <input type="radio" name="calcerta" bind:group={calcerta} value={'não'} required>
    </label>
  </Switch>

  <h2>Dimensões:</h2>
  <input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
  <input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>  
  
  <div class="buttons">
		<button class="back" type="button"><span>Voltar </span></button>
		<button class="next" type="submit"><span>Próximo </span></button>
	</div>
</form>