<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { slide, fade } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	import Header from './components/Header.svelte'
	import Local from './etapas/Local.svelte'
	import Passeio from './etapas/Passeio.svelte'
	import Abrigo from './etapas/Abrigo.svelte'
	import Midias from './etapas/Midias.svelte'

	let form = {}
	let etapa = 0
	let titulos = ['Local','Calçada','Ponto','Propaganda']

	$: atual = titulos[etapa]

	function nextPage (e) {
		form[e.detail.obj.id] = e.detail.obj.body
		console.log(form)
		setTimeout(() => etapa += 1, 300)
	}

	function sendForm (e) {
		form[e.detail.obj.id] = e.detail.obj.body
		alert('form finalizado')
	}
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: #F7F7F7;
		font-family: 'Roboto', sans-serif
	}
	div {
		height: 100%;
		width: 100%;
	}
</style>

<Header {atual} {etapa}/>

<!-- <Intro> -->
{#if etapa === 0}
	<div transition:slide="{{ easing: quintOut }}">
		<Local on:send={nextPage} />
	</div>		
{:else if etapa === 1}
	<div transition:slide="{{ easing: quintOut }}">
		<Passeio on:send={nextPage}/>
	</div>
{:else if etapa === 2}
	<div transition:slide="{{ easing: quintOut }}">
		<Abrigo on:send={nextPage} />
	</div>
{:else if etapa === 3}
	<div transition:slide="{{ easing: quintOut }}">
		<Midias on:send={sendForm} />
	</div>
{/if}