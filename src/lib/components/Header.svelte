<script>
import { page } from "$app/stores"

const nav = [
  { title: "首页", path: "/" },
  { title: "个人治愈", path: "/healing" },
  { title: "婚姻修复", path: "/marriage" },
  { title: "免费资料", path: "/info" },
]

let isOpen = false

function toggle() {
  isOpen = !isOpen
}

</script>

<header>
  <div class="container mx-auto flex lg:flex-row justify-between py-4 sm:py-0 relative">
    <img src="/images/logo-penny.svg" alt="Dr.Penny">
    <!--Desktop menu-->
    <nav class="grow hidden md:flex md:flex-row md:pt-5">
      <ul class="grow flex flex-col md:flex-row justify-end md:space-x-4 lg:space-x-8 xl:space-x-24 text-[1.3rem]">
        {#each nav as item}
        <li class="py-3 hover:border-b-4 hover:border-primary {$page.url.pathname === item.path ? "border-b-4 border-primary" : ""}"><a href={item.path}>{item.title}</a></li>
        {/each}
      </ul>
      <div class="grow text-[1.3rem] flex flex-row justify-end items-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" fill="white"/>
          <path d="M8 8H10.2857V10.2857H8V8ZM26.2857 26.2857H28.5714V28.5714H26.2857V26.2857ZM26.2857 21.7143H24V17.1428H17.1428V28.5714H19.4286V19.4286H21.7143V24H28.5714V17.1428H26.2857V21.7143Z" fill="#3F3F3F"/>
          <path d="M21.7143 26.2857H24V28.5714H21.7143V26.2857ZM3.42859 14.8572H14.8572V3.42856H3.42859V14.8572V14.8572ZM5.71431 5.71428H12.5715V12.5714H5.71431V5.71428ZM8.00003 21.7143H10.2857V24H8.00003V21.7143Z" fill="#3F3F3F"/>
          <path d="M3.42859 28.5714H14.8572V17.1428H3.42859V28.5714V28.5714ZM5.71431 19.4286H12.5715V26.2857H5.71431V19.4286ZM21.7143 8H24V10.2857H21.7143V8Z" fill="#3F3F3F"/>
          <path d="M17.1429 3.42856V14.8572H28.5714V3.42856H17.1428H17.1429ZM26.2857 12.5714H19.4286V5.71428H26.2857V12.5714Z" fill="#3F3F3F"/>
        </svg>
        <a href="/contact" class="ml-4">联系我们</a>
      </div>
    </nav>
    <!--Mobile menu-->
    <nav>
      <button type="button" on:click={toggle} class="absolute top-4 right-4 z-30" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-8 w-8" class:hidden={isOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff5787" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg class="h-8 w-8" class:hidden={!isOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ff5787" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class:hidden={!isOpen} class="h-screen absolute z-20 top-0 right-0 text-lg bg-secondary shadow-lg">
        <ul class="pt-16">
          {#each nav as item}
          <li class="px-12 py-4 {$page.url.pathname === item.path ? "bg-white" : ""}"><a href={item.path}>{item.title}</a></li>
          {/each}
        </ul>
      </div>
      
    </nav>
    
  </div>
</header>