<script>
	import Switch from '../inputs/Switch.svelte'

	let existe = 1 // 1 = existe, 0 = não existe
	let modeloSelecionado
	let modelos = ['a', 'b', 'c', 'd', 'e', 'f']
	let qualidade
	let largura_maior
	let largura_menor
</script>



<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
		width: 75%;
	}
	input[type="radio"] {
		display: none;
	}
	input[type="number"] {
		align-self: end;
		height: 100px;
		width: 100%;
		margin: auto;
	}
	label {
		display: flex;
		width: 100%;
		height: 100%;
	}
	p {
		font-size: 1.2em;
		text-align: center;
		margin: auto;
	}
</style>


<form class="container">
	<h1>
	2. ABRIGO
	</h1>

	<label>O abrigo existe?</label>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={existe} value={1}>
			<p>Sim</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={existe} value={0}>
			<p>Não</p>
		</label>
	</Switch>

	<label>Modelo</label>
		<select bind:value={modeloSelecionado}>
		{#each modelos as modelo}
			<option value={modelo}>
				{'modelo: ' + modelo}
			</option>
		{/each}
	</select>

	<label>Qualidade</label>
	<Switch estados={3}>
		<label slot="good">
			<input type="radio" bind:group={qualidade} value={'boa'}>
			<p>Boa</p>
		</label> 
		<label slot="medium">
			<input type="radio" bind:group={qualidade} value={'media'}>
			<p>Média</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={qualidade} value={'ruim'}>
			<p>Ruim</p>
		</label>
	</Switch>


	<label>Dimensão</label>
	<input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
	<input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>

</form>