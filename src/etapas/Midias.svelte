<script>
	import { createEventDispatcher } from 'svelte'
	import Switch from '../inputs/Switch.svelte'

	const dispatch = createEventDispatcher()


	let localizacao = []
	let getFace = (arr, midiaFace) => {arr.push(midiaFace)}
	let dimensao


	let ladoUm = []
	let ladoDois = []
	let fundos = []

	$: formObj = {
		id: 'midia',
		body: {
			localizacao: localizacao,
			ladoUm: ladoUm,
			ladoDois: ladoDois,
			fundos, fundos
		}
	}

	function getLocation(){
		console.log('getLocatio')
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				localizacao.push(position.coords.latitude, position.coords.longitude)
			});
		} else {
			alert("Seu navegador não suporta o serviço de localização");
		}
  	}

	function sendForm () {
		dispatch('send', {
			obj: formObj
		})
		console.log(formObj)
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
	<h1 id="title">3. MIDIAS</h1>

	<button on:click={getLocation} type="button">
		localizacao
	</button>

	<label>Lado 1</label>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={ladoUm[0]} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={ladoUm[0]} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if ladoUm[0] === 1}
		<label>Lado 1: Face</label>
		<Switch>
			<label slot="good">
				<input type="radio" bind:group={ladoUm[1]}  value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="bad">
				<input type="radio" bind:group={ladoUm[1]}  value={'externa'}>
				<p>Fora</p>
			</label>
		</Switch>
	{/if}

	<label>Lado Dois</label>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={ladoDois[0]} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={ladoDois[0]} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if ladoDois[0] === 1}
		<label>Lado 1: Face</label>
		<Switch>
			<label slot="good">
				<input type="radio" bind:group={ladoDois[1]}  value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="bad">
				<input type="radio" bind:group={ladoDois[1]}  value={'externa'}>
				<p>Fora</p>
			</label>
		</Switch>
	{/if}

	<label>Fundos</label>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={fundos[0]} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={fundos[0]} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if fundos[0] === 1}
		<label>Lado 1: Face</label>
		<Switch>
			<label slot="good">
				<input type="radio" bind:group={fundos[1]}  value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="bad">
				<input type="radio" bind:group={fundos[1]}  value={'externa'}>
				<p>Fora</p>
			</label>
		</Switch>
	{/if}

	<input type="submit"  value="Próxima etapa">
</form>