<script>
	import { dev } from '$app/environment';
    import * as prismic from '@prismicio/helpers';
	export let data;
  const {documents} = data
//   console.log(documents);
	
   </script>
   
   <svelte:head>
	   <title>Home</title>
	   <meta name="description" content="Svelte demo app" />
   </svelte:head>
   
   <section class="box-container">
	{#each documents as document}		
	        
				<article class="cards-content">

					<h2>{@html prismic.asText(document.data.title)}</h2>
					<article>
							{@html prismic.asHTML(document.data.content)}
					</article>

				</article>
				
			

	{/each}

   </section>
	
   
   <style>
	
	.box-container{
		display:flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center; 
		 width: 1080px;
		 height: 40rem;
		 gap: 2em;
		 padding: 2em;
		 overflow-y:hidden;
		 overflow-x: scroll;
		 scroll-behavior: smooth;

	}

	.cards-content{
		width: 20em;
		height: 25em;
		padding: 1em;
		margin: 1rem;
		border-radius: var(--radius);
		background-color:var(--blue);
		color: var(--green);
	}
	h2{
		padding: 1em;
	}
	.cards-content>article{
		padding: 1em;
	}
   
   </style>
   