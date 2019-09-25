<script>
	let localizacao = []
	function getLocation () {
		console.log('getLocatio')
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position.coords.latitude, position.coords.longitude);
				localizacao.push(position.coords.latitude, position.coords.longitude)
			});
		} else {
			alert("I'm sorry, but geolocation services are not supported by your browser.");
		}
  }
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
	.header { 
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 35px;
		background-color: darkblue;
		margin-bottom: 5px;
	}
	h1 {
    font-size: 1.5em;
		font-weight: normal;
		color: white;
    border: none;
  }
	.counter {
		color: white;
	}
	.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: space-between;
		align-items: center;
    align-content: flex-end;
    width: 100%;
    margin: 10px 0px;
  }
	.next {
		font-size: 1em;
		border-radius: 2px;
		background-color: green;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		transition: all 0.5s;
		cursor: pointer;
		margin-left: 5px;
		width: 60%;
	}
	.next span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	.next span:after {
		content: "\003e";
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	.next:hover span {
		padding-right: 25px;
	}
	.next:hover span:after {
		opacity: 1;
		right: 0;
	}
	.back {
		font-size: 1em;
		border-radius: 2px;
		background-color: green;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		cursor: pointer;
		margin-right: 5px;
		width: 35%;
	}
</style>

<div class="header">	
	<h1>Mídias</h1>
	<span class="counter">4/4</span>
</div>

<form  action="javascript:void(0);" on:submit>
	<button on:click={getLocation}>
		click
	</button>

	<div class="buttons">
		<button class="back" type="button"><span>Voltar </span></button>
		<button class="next" type="submit"><span>Próximo </span></button>
	</div>
</form>

