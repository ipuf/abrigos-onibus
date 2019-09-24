<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()

  let rua
  let numero_pt

  $: formObj = {
    id: 'local',
    body: {
      rua: rua,
      numero_pt: numero_pt
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
  input[type="number"] {
    align-self: stretch;
    height: 100px;
  }
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h1 id="title">
    1. LOCAL
  </h1>

  <input type="text" bind:value={rua} placeholder="Rua" required>
  <input type="number" bind:value={numero_pt} placeholder="Número do ponto" required>
  <input type="submit"  value="Próxima etapa">
</form>
