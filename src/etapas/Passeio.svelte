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
    justify-content: center;
    margin: auto;
    width: 75%;
  }
  form > * {
    margin: 10px;
    font-size: 1.2em;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    color: grey;
  }
  #title {
    font-size: 2em;
    border: none;
  }
  input[type="radio"] {
    opacity: 0;
    height: 1%;
  }
  input[type="number"] {
    align-self: stretch;
    height: 100px;
  }
  label {
    display: flex;
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
    height: 99%;
  }
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h1 id="title">
    2. CALÇADA
  </h1>

  <Switch>
    <label slot="good">
      <p>Sim</p>
      <input type="radio" name="existe" bind:group={existe} value={'sim'} required>
    </label>
    <label slot="bad">
      <input type="radio" name="existe" bind:group={existe} value={'não'}>
      <p>Não</p>
    </label>
  </Switch>

  <Switch estados={3}>
    <label slot="good">
      <input type="radio" bind:group={qualidade} value={'noref'} required>
      <p>Não necessita de reformas</p>
    </label>
    <label slot="medium">
      <input type="radio" bind:group={qualidade} value={'ref'}>
      <p>Necessita de reformas</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={qualidade} value={'troca'}>
      <p>Necessita de troca</p>
    </label>
  </Switch>

  <Switch>
    <label slot="good">
      <input type="radio" bind:group={calcerta} value={'sim'} required>
      <p>Sim</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={calcerta} value={'não'}>
      <p>Não</p>
    </label>
  </Switch>

  <input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
  <input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>  
  
  <input type="submit" value="Próxima etapa">
</form>