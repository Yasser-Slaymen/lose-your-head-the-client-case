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
   
  <main class="contaner">
	
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
	.contaner{
		 width: 1080px;
		align-items: center;
	}

	.content{
		margin: 3rem;
		background-color: var(--blue);
		color: rgb(229, 234, 239);
		width: 50vw;
		height: 20vh;

	}
   
   </style>
   