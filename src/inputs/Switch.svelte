<script>
  export let estados = 2

  let cor

  function toggleState (state) {
    cor = state
  }
</script>

<style>
  .container {
    display: flex;
    width: 100%;
  }
  div {
    padding: 0;
    margin: 10px;
    width: 50%;
    height: 100px;
    color: grey;
    border: 1.5px solid lightgray;
    border-radius: 5px;
	}
  .good {
		background-color: #44a64a;
		color: white;
	}
  .medium {
		background-color: #d18534;
		color: white;
	}
  .bad {
		background-color: #ff3e00;
		color: white;
	}
</style>


<section class="container">
  {#if estados === 2}
    <div class:good="{cor === 'good'}" on:click="{() => toggleState('good')}">
      <slot name="good"></slot>
    </div>
    <div class:bad="{cor === 'bad'}" on:click="{() => toggleState('bad')}">
      <slot name="bad"></slot>
    </div>
  {:else if estados === 3}
    <div class:good="{cor === 'good'}" on:click="{() => toggleState('good')}">
      <slot name="good"></slot>
    </div>
    <div class:medium="{cor === 'medium'}" on:click="{() => toggleState('medium')}">
      <slot name="medium"></slot>
    </div>
    <div class:bad="{cor === 'bad'}" on:click="{() => toggleState('bad')}">
      <slot name="bad"></slot>
    </div>
  {/if}
</section>

