<script>
	let localizacao = 0

	$: novoLocal = localizacao
	
	function getLocation() {
        if (navigator.geolocation) {
            localizacao = navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

</script>


<button on:click={getLocation}>
	click
</button>

<br>
<p>
	{novoLocal}
</p>