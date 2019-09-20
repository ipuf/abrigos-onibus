<script>
  let rua
  let numero_pt
</script>

<h1>
  1. LOCALIZAÇÃO
</h1>

<input type="text" bind:value={rua} placeholder="Rua" required>
<input type="number" bind:value={numero_pt} placeholder="Número do ponto" required>
<button on:click>Próxima etapa</button>