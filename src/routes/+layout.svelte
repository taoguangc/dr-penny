<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import { navItems } from '$lib/config'
import { page } from "$app/stores"
import PageTransitions from '$lib/components/PageTransitions.svelte'
</script>
<div class="min-h-screen">
  <Header />
    <PageTransitions url={$page.url.pathname}>
      <slot />
    </PageTransitions>
  <Footer />
</div>

