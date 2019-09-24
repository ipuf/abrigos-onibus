<script>
	import { fly } from 'svelte/transition' 
	import Local from './etapas/Local.svelte'
	import Passeio from './etapas/Passeio.svelte'
	import Abrigo from './etapas/Abrigo.svelte'
	import Midias from './etapas/Midias.svelte'

	let form = {}
	let etapa = 1

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
		background: #fbfbfb
	}
</style>

<!-- <Intro> -->
{#if etapa === 1}
	<div in:fly="{{ x: -1000, delay: 300, duration: 400 }}" out:fly="{{ x: 1000, duration: 400 }}">
		<Local on:send={nextPage} />
	</div>		
{:else if etapa === 2}
	<div in:fly="{{ x: -1000, delay: 400, duration: 400 }}" out:fly="{{ x: 1000, duration: 400 }}">
		<Passeio on:send={nextPage}/>
	</div>
{:else if etapa === 3}
	<div in:fly="{{ x: -1000, delay: 400, duration: 400 }}" out:fly="{{ x: 1000, duration: 400 }}">
		<Abrigo on:send={nextPage} />
	</div>
{:else if etapa === 4}
	<div in:fly="{{ x: -1000, delay: 400, duration: 400 }}" out:fly="{{ x: 1000, duration: 400 }}">
		<Midias on:send={sendForm} />
	</div>
{/if}