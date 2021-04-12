<script lang="ts">
	let count = 0;

	const increment = (): void => {
		count += 1;
	};
</script>

<button on:click={increment}>
	Clicks: {count}
</button>

<style lang="scss">
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: rgba(55, 65, 81, 1);
		background-color: rgba(251, 191, 36, 1);
		border-radius: 2em;
		outline: none;
		width: 200px;
		height: 60px;
		font-variant-numeric: tabular-nums;
	}
</style>
