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
</style>

<div class="header">	
	<h1>Mídia</h1>
	<span class="counter">4/4</span>
</div>

<form action="javascript:void(0);" on:submit={sendForm}>

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

	<label>Dimensão</label>
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

	<div class="buttons">
		<button class="back" type="button"><span>Voltar </span></button>
		<button class="next" type="submit"><span>Próximo </span></button>
	</div>
</form>