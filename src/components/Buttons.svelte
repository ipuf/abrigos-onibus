<style>
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

<div class="buttons">
  <button class="back" type="button"><span>Voltar </span></button>
  <button class="next" type="submit"><span>Próximo </span></button>
</div>