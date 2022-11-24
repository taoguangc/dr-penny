<script>
  import '../app.postcss'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>
<main class="min-h-screen">
  <Header />
  <slot />
  <Footer />
</main>

