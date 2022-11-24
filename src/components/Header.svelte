<script>
import {onMount} from "svelte"
let currentPath
onMount(() => {
  currentPath = window.location.pathname
})
</script>

<header>
  <div class="container mx-auto flex lg:flex-row justify-between">
    <img src="/images/logo-penny.svg" alt="Dr.Penny">
    <nav class="lg:pt-5">
      <ul class="flex flex-col lg:flex-row lg:space-x-16 xl:space-x-24 text-[1.3rem] p-0">
        <li class="py-3 hover:border-b-4 hover:border-primary border-b-4 border-primary"><a href="/">首页</a></li>
        <li class="py-3 hover:border-b-4 hover:border-primary"><a href="/healing">个人治愈</a></li>
        <li class="py-3 hover:border-b-4 hover:border-primary"><a href="/marriage">婚姻提升</a></li>
        <li class="py-3 hover:border-b-4 hover:border-primary"><a href="/information">免费资料</a></li>
      </ul>
    </nav>
    <div class="lg:pt-5 text-[1.3rem] flex flex-row items-center">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="white"/>
              <path d="M8 8H10.2857V10.2857H8V8ZM26.2857 26.2857H28.5714V28.5714H26.2857V26.2857ZM26.2857 21.7143H24V17.1428H17.1428V28.5714H19.4286V19.4286H21.7143V24H28.5714V17.1428H26.2857V21.7143Z" fill="#3F3F3F"/>
              <path d="M21.7143 26.2857H24V28.5714H21.7143V26.2857ZM3.42859 14.8572H14.8572V3.42856H3.42859V14.8572V14.8572ZM5.71431 5.71428H12.5715V12.5714H5.71431V5.71428ZM8.00003 21.7143H10.2857V24H8.00003V21.7143Z" fill="#3F3F3F"/>
              <path d="M3.42859 28.5714H14.8572V17.1428H3.42859V28.5714V28.5714ZM5.71431 19.4286H12.5715V26.2857H5.71431V19.4286ZM21.7143 8H24V10.2857H21.7143V8Z" fill="#3F3F3F"/>
              <path d="M17.1429 3.42856V14.8572H28.5714V3.42856H17.1428H17.1429ZM26.2857 12.5714H19.4286V5.71428H26.2857V12.5714Z" fill="#3F3F3F"/>
              </svg>
      <a href="/contact" class="ml-4">联系我们</a>
    </div>
  </div>
</header>