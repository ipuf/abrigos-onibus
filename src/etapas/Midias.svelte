<script>
  import { onMount, createEventDispatcher } from "svelte";
  import Switch from "../components/Switch.svelte";
  import Checkswitch from "../components/Checkswitch.svelte";
  import Buttons from "../components/Buttons.svelte";

  const dispatch = createEventDispatcher();

  let dimensao;
  let latUm = { tem_midia: false, faces: [] };
  let latDois = { tem_midia: false, faces: [] };
  let fundos = { tem_midia: false, faces: [] };

  let gpslog = "";
  let localizacao = [];

  $: formObj = {
    etapa: "midia",
    body: {
      latUm: latUm,
      latDois: latDois,
      fundos: fundos,
      dimensao: dimensao
    },
    coords: "coords",
    localizacao: localizacao
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert(
        "Este navegador não suporta o serviço de localização, por favor utilize outro navegador."
      );
    }
  }

  function showPosition(position) {
    localizacao.push(position.coords.latitude, position.coords.longitude);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        gpslog = "User denied the request for Geolocation.";
        alert("Por favor, habilite seu GPS.");
        document.location.reload(true);
      case error.POSITION_UNAVAILABLE:
        gpslog = "Location information is unavailable.";
        alert("Por favor, habilite seu GPS.");
        document.location.reload(true);
      case error.TIMEOUT:
        gpslog = "The request to get user location timed out.";
        alert(
          "Conexão de internet instável. Aguarde um minuto e tente novamente."
        );
        document.location.reload(true);
      case error.UNKNOWN_ERROR:
        gpslog = "An unknown error occurred.";
        alert("Erro desconhecido. Aguarde um minuto e tente novamente.");
        document.location.reload(true);
    }
  }

  function backPage() {
    dispatch("back", {});
  }

  function sendForm() {
    console.log("latum =>", latUm);
    dispatch("send", formObj);
  }

  onMount(() => getLocation());
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
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: gray;
  }
  p {
    text-align: center;
    margin: auto;
  }
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h2>Lateral 1:</h2>
  <Switch>
    <label slot="good">
      <input type="radio" bind:group={latUm.tem_midia} value={true} />
      <p>Possui midia</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={latUm.tem_midia} value={false} />
      <p>Não possui midia</p>
    </label>
  </Switch>

  {#if latUm.tem_midia}
    <h2>Faces com mídia (Lateral 1):</h2>
    <Checkswitch>
      <button
        slot="one"
        type="button"
        on:click={() => (latUm.faces[0] === 0 ? (latUm.faces[0] = 1) : (latUm.faces[0] = 0))}>
        Dentro
      </button>
      <button
        slot="two"
        type="button"
        on:click={() => (latUm.faces[1] === 0 ? (latUm.faces[1] = 1) : (latUm.faces[1] = 0))}>
        Fora
      </button>
    </Checkswitch>
  {/if}

  <h2>Lateral 2:</h2>
  <Switch>
    <label slot="good">
      <input type="radio" bind:group={latDois.tem_midia} value={true} />
      <p>Possui midia</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={latDois.tem_midia} value={false} />
      <p>Não possui midia</p>
    </label>
  </Switch>

  {#if latDois.tem_midia}
    <h2>Faces com mídia (Lateral 2):</h2>
    <Checkswitch>
      <button
        slot="one"
        type="button"
        on:click={() => (latDois.faces[0] === 0 ? (latDois.faces[0] = 1) : (latDois.faces[0] = 0))}>
        Dentro
      </button>
      <button
        slot="two"
        type="button"
        on:click={() => (latDois.faces[1] === 0 ? (latDois.faces[1] = 1) : (latDois.faces[1] = 0))}>
        Fora
      </button>
    </Checkswitch>
  {/if}

  <h2>Fundos:</h2>
  <Switch>
    <label slot="good">
      <input type="radio" bind:group={fundos.tem_midia} value={true} />
      <p>Possui midia</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={fundos.tem_midia} value={false} />
      <p>Não possui midia</p>
    </label>
  </Switch>

  {#if fundos.tem_midia}
    <h2>Faces com mídia (Fundos):</h2>
    <Checkswitch>
      <button
        slot="one"
        type="button"
        on:click={() => (fundos.faces[0] === 0 ? (fundos.faces[0] = 1) : (fundos.faces[0] = 0))}>
        Dentro
      </button>
      <button
        slot="two"
        type="button"
        on:click={() => (fundos.faces[1] === 0 ? (fundos.faces[1] = 1) : (fundos.faces[1] = 0))}>
        Fora
      </button>
    </Checkswitch>
  {/if}

  <h2>Dimensão da mídia de fundos (tipo):</h2>
  <Switch estados={3}>
    <label slot="good">
      <input type="radio" bind:group={dimensao} value={'retrato'} />
      <p>Retrato</p>
    </label>
    <label slot="medium">
      <input type="radio" bind:group={dimensao} value={'box'} />
      <p>Box</p>
    </label>
    <label slot="bad">
      <input type="radio" bind:group={dimensao} value={''} />
      <p>Não há</p>
    </label>
  </Switch>

  <Buttons on:click={backPage} />
</form>
