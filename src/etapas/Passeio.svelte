<script>
  let existe = 1 // 1 = existe, 0 = não existe
  let qualidade = 'ok'
  let calcerta = 1
  let largura_maior
  let largura_menor
</script>

<h1>
  2. CALÇADA
</h1>

<label>
	<input type=radio bind:group={existe} value={1}>
	Sim
</label>
<label>
	<input type=radio bind:group={existe} value={0}>
	Não
</label>

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

<input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
<input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>