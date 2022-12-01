<script>
  import welcome_fallback from "$lib/images/we-love.png";
</script>

<nav>
  <section class="logo">
    <span class="welcome">
      <picture>
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>
  </section>
  <h1>Studiejaar 2022-2023</h1>
  
</nav>

<style>
  img {
    margin-left: -7em;
    height: 4rem;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
  }
</style>
