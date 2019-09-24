<script>
	let localizacao = []
	function getLocation(){
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




<label>3. MIDIAS</label>


<button on:click={getLocation}>
	click
</button>


