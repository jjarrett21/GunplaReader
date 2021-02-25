<script>
  import Router from 'svelte-spa-router';
  import Login from './routes/Login.svelte';

  const routes = {
    '/': Login,
  };
</script>

<Router {routes} />

<style global lang="postcss">
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;

  body {
    /* background-image: linear-gradient(224deg, #adadad 0%, #21232e 100%); */
    background-color: #21232e;
    color: whitesmoke;
    padding: 0;
  }

  :global(a.active) {
    color: '#b1b2b3' !important;
  }
</style>
