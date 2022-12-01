<script>
  // import { dev } from '$app/environment';
  import * as prismic from "@prismicio/helpers";
  export let data;
  const { documents } = data;
  //   console.log(documents);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<a href="/about">Try another layout</a>

<table class="box-container">
  {#each documents as document}
    <tr>
      <article class="cards-content">
        <h2>{@html prismic.asText(document.data.title)}</h2>
        <article>
          {@html prismic.asHTML(document.data.content)}
        </article>
      </article>
    </tr>
  {/each}
</table>

<style>
  :root {
    --purples: rgb(165, 118, 244);
  }

  .box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 28rem;
    gap: 1.5em;
    padding: 3em;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin-bottom: 1em;
  }
  /* scrollbar */
  .box-container::-webkit-scrollbar {
    width: 50px;
  }
  .box-container::-webkit-scrollbar-thumb {
    background-color: var(--blue);
  }
  .box-container::-webkit-scrollbar-track {
    background-color: var(--purples);
  }
  .box-container::-webkit-scrollbar-button {
    width: 10em;
  }

  .cards-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20em;
    height: 20em;
    padding: 1em;
    border-radius: var(--radius);
    background-color: var(--purples);
    color: var(--blue);
  }
  h2 {
    padding: 1em;
  }
  .cards-content > article {
    padding: 1em;
  }
  a{
    color: var(--blue);
    font-size:1.2em;
    background-color: var(--purples);
    padding: .8rem;
    border-radius: var(--radius);
    text-decoration: none;
  }
  a:hover{
    color:white;
    background-color:var(--blue);
  }
</style>
