<script>
	import { dev } from '$app/environment';
    import * as prismic from '@prismicio/helpers';
	export let data;
  const {documents} = data
  console.log(documents);
	
   </script>
   
   <svelte:head>
	   <title>Home</title>
	   <meta name="description" content="Svelte demo app" />
   </svelte:head>
   
  <main>
	
	{#each documents as document}		
	        <section class="content">
			

					<h2>{@html prismic.asText(document.data.title)}</h2>
					<article>
					  {@html prismic.asText(document.data.content)}
					</article>
				
			</section>

	{/each}
	
  </main>
   
   <style>
	.content{
		margin: 3rem;
		background-color: blue;

	}
   
   </style>
   