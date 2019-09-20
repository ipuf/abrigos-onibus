<script>
  import Switch from '../inputs/Switch.svelte'
  let existe
  let qualidade
  let calcerta
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
    2. CALÇADA
  </h1>

  <Switch>
    <label slot="good">
      <input type="radio" name="existe" bind:group={existe} value={'sim'} required>
      <p>Sim</p>
    </label>
    <label slot="bad">
      <input type="radio" name="existe" bind:group={existe} value={'não'}>
      <p>Não</p>
    </label>
  </Switch>

  <Switch estados={3}>
    <label slot="good">
      <input type="radio" bind:group={qualidade} value={'noref'}>
      <p>Não necessita de reformas</p>
    </label>
    <label slot="medium">
      <input type="radio" bind:group={qualidade} value={'ref'}>
      <p>Necessita de reformas</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={qualidade} value={'troca'}>
      <p>Necessita de troca</p>
    </label>
  </Switch>

  <Switch>
    <label slot="good">
      <input type="radio" bind:group={calcerta} value={'sim'}>
      <p>Sim</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={calcerta} value={'não'}>
      <p>Não</p>
    </label>
  </Switch>

  <input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" required>
  <input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" required>
  
  <input type="submit" on:click={() => alert('clicked')}>
</form>