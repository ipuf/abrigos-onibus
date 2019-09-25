<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { fly } from 'svelte/transition' 
	import Local from './etapas/Local.svelte'
	import Passeio from './etapas/Passeio.svelte'
	import Abrigo from './etapas/Abrigo.svelte'
	import Midias from './etapas/Midias.svelte'

	let form = {}
	let etapa = 4

	function nextPage (e) {
		form[e.detail.obj.id] = e.detail.obj.body
		console.log(form)
		etapa += 1
	}

	function sendForm (e) {
		nextPage(e)
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
</style>

<!-- <Intro> -->
{#if etapa === 1}
	<div in:fly="{{ x: -500, delay: 600, duration: 600 }}" out:fly="{{ x: 500, duration: 600 }}">
		<Local on:send={nextPage} />
	</div>		
{:else if etapa === 2}
	<div in:fly="{{ x: -500, delay: 300, duration: 600 }}" out:fly="{{ x: 500, duration: 600 }}">
		<Passeio on:send={nextPage}/>
	</div>
{:else if etapa === 3}
	<div in:fly="{{ x: -500, delay: 600, duration: 600 }}" out:fly="{{ x: 500, duration: 600 }}">
		<Abrigo on:send={nextPage} />
	</div>
{:else if etapa === 4}
	<div in:fly="{{ x: -500, delay: 600, duration: 600 }}" out:fly="{{ x: 500, duration: 600 }}">
		<Midias on:send={sendForm} />
	</div>
{/if}