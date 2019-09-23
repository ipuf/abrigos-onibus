<script>
  let existe = 1 // 1 = existe, 0 = não existe
  let modeloSelecionado
  let modelos = ['a', 'b', 'c', 'd', 'e', 'f']
  let calcerta = 1
  let qualidade
  let largura_maior
  let largura_menor
</script>

<h1>
  2. ABRIGO
</h1>

<label>
	<input type=radio bind:group={existe} value={1}>
	Sim
</label>
<label>
	<input type=radio bind:group={existe} value={0}>
	Não
</label>

<p>modelo</p>
<select bind:value={modeloSelecionado}>
{#each modelos as modelo}
    <option value={modelo}>
        {'modelo: ' + modelo}
    </option>
{/each}
</select>


<p>qualidade</p>
<label>
	<input type=radio bind:group={qualidade} value={'ok'}>
	Não necessita de reforma
</label> 
<label>
	<input type=radio bind:group={qualidade} value={'reforma'}>
	Necessita de reforma
</label>
<label>
	<input type=radio bind:group={qualidade} value={'troca'}>
	Necessita de troca completa
</label>

<label>
	<input type=radio bind:group={calcerta} value={1}>
	Sim
</label>
<label>
	<input type=radio bind:group={calcerta} value={0}>
	Não
</label>

<p>dimensão</p>
<input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
<input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>