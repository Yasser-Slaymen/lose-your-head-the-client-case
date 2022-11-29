<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte'
	import Hva from '$lib/components/Hva.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import './styles.css';
</script>

<body>
	<Hva/>
	<div class="app">
		<Header/>
		<main>
			<slot />
		</main>
		<Footer/>
	</div>
	<section>	
			<Quote/>
	</section>
	
	
</body>

<style>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color:var(--green);
		border-radius: 1em;
		width: 1080px;

	}
	/* .hva{
		margin-left: 0;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	 */

	@media (min-width: 480px) {
		
	}
</style>