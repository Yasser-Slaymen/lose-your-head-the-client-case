<footer>
  <nav>
    <h2>Microsites</h2>
    <p>
      FDND maakt gebruik van microsites. Microsites zijn kleine websites ter
      ondersteuning van een campagne, informatie over een product, dienst of
      voor een ander specifiek doel.
    </p>
    <ul>
      <li><a href="https://fdnd.nl">FDND.nl</a></li>
      <li><a href="https://contact.fdnd.nl">Contact</a></li>
      <li><a href="https://programma.fdnd.nl">Programma</a></li>
      <li><a href="https://skc.fdnd.nl">Studie Keuze Check</a></li>
      <li><a href="https://partners.fdnd.nl">Partners</a></li>
      <li><a href="https://tasks.fdnd.nl">Leertaken</a></li>
      <li><a href="https://styleguide.fdnd.nl">Styleguide</a></li>
    </ul>
  </nav>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width:fit-content; */
    margin-top: 2em;
    margin-bottom: 1rem;
    color: var(--blue);
  }
  footer nav {
    padding: 1rem;
    border: 1px solid var(--blue);
    border-radius: var(--pilled);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 66rem;
  }

  footer > nav > p,
  ul {
    font-size: 1.3rem;
    font-family: "Open-sans", sans-serif;
    font-weight: normal;
    line-height: 1.75;
    margin: 1em;
  }
  footer > nav > ul > li > a {
    color: var(--blue);
    text-decoration-line: underline;
  }
  footer a:hover {
    color: rgb(0, 94, 128);
  }
  footer > nav > ul > li {
    padding: 0.5em;
  }

  footer h2 {
    margin: calc(-1rem - 1px) calc(-1rem - 1px) 2rem 0;
    padding: 0 1rem 0.5rem 1rem;
    position: relative;
    width: fit-content;
    font-size: calc(1.2rem + 1.4vw);
    line-height: calc(1.4rem + 1.3vw);
    color: var(--blue);
    background: var(--green);
    border-left: 1px solid var(--blue);
    border-bottom: 1px solid var(--blue);
    border-bottom-left-radius: var(--rounded);
    border-bottom-right-radius: 0;
    z-index: 2;
  }

  footer h2::before {
    content: "";
    position: absolute;
    top: 53px;
    right: calc(0 * var(--rounded));
    box-shadow: 0 calc(-1 * var(--rounded)) 0 0 var(--blue);
    background-color: transparent;
    width: var(--rounded);
    height: calc(2 * var(--rounded));
    border-top-right-radius: var(--rounded);
    border-top-left-radius: 0;
    border-right: 1px solid var(--blue);
  }
  footer h2::after {
    content: "";
    position: absolute;
    top: 2.9px;
    left: calc(-1.1 * var(--rounded));
    box-shadow: 0 calc(-1 * var(--rounded)) 0 0 var(--blue);
    background-color: transparent;
    width: var(--rounded);
    height: calc(2 * var(--rounded));
    border-top-right-radius: var(--rounded);
    border-top-left-radius: 0;
    border-right: 1px solid var(--blue);
  }

  footer ul {
    margin-left: 5em;
    padding-left: 2em;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
</style>
