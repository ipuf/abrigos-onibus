<script>
  import { createEventDispatcher } from 'svelte'
  import Buttons from '../components/Buttons.svelte'
  
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
		justify-content: space-around;
		align-items: center;
		margin: auto;
		width: 75%;
	}
	h2 {
		font-size: 1em;
		font-weight: normal;
		color: gray;
		margin-top: 8px;
		margin-bottom: 2px;
		align-self: start;
	}
	input[type="number"], input[type="text"] {
		font-size: 1em;
		align-self: stretch;
    height: 60px;
		border: 1px solid lightgray;
		border-radius: 2px;
	}
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h2>Nome da rua:</h2>
  <input type="text" bind:value={rua} placeholder="Rua" required>
  
  <h2>Número do ponto:</h2>
  <input type="number" bind:value={numero_pt} placeholder="Número do ponto" required>
  
  <Buttons/>
</form>
