<script>
	import { createEventDispatcher } from 'svelte'
	import Switch from '../components/Switch.svelte'
	import Buttons from '../components/Buttons.svelte'

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
			fundos, fundos,
			dimensao: dimensao
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
	input[type="radio"] {
		font-size: 1em;
    opacity: 0;
    height: 1px;
		margin: 0;
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


<form action="javascript:void(0);" on:submit={sendForm}>

	<button on:click={getLocation} type="button">
		Localizacao
	</button>

	<h2>Lado 1</h2>
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
		<h2>Lado 1: Face</h2>
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

	<h2>Lado Dois</h2>
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
		<h2>Lado 1: Face</h2>
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

	<h2>Fundos</h2>
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
		<h2>Lado 1: Face</h2>
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

	<h2>Dimensão</h2>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={dimensao} value={'retrato'}>
			<p>Retrato</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={dimensao} value={'box'}>
			<p>Box</p>
		</label>
	</Switch>

	<Buttons/>
</form>