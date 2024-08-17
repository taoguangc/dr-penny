<script setup>
  import { fade } from "svelte/transition"
  import { onMount } from "svelte"
  import { animate, inView } from "motion"
  import ButtonMore from "$lib/components/ButtonMore.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import { isModalOpen } from "$lib/stores/ModalStore"
  let video = null
  function openModal(e) {
    isModalOpen.set(true)
    video = e
  }

  import { slider } from "$lib/data/slider.json"
  import { Splide, SplideSlide } from "@splidejs/svelte-splide"
  import "@splidejs/svelte-splide/css/core"

  const solutions = [
    {
      title: "爱自己自信私教项目",
      url: "/healing/",
      details: [
        "治愈原生家庭创伤或者亲密关系中的创伤",
        "学会情绪管理",
        "建立正面潜意识",
        "成为爱自己自信的女人"
      ]
    },
    {
      title: "婚姻私教项目",
      url: "/marriage/",
      details: [
        "有效的沟通步骤",
        "内在需求的表达+回应",
        "放下过去的创伤",
        "正面的经营婚姻"
      ]
    },
    {
      title: "伴侣咨询",
      url: "",
      details: [
        "适合伴侣双方想一起修复婚姻",
        "私人指导",
        "需要配婚姻私教项目系统学习"
      ]
    },
    {
      title: "个体咨询",
      url: "",
      details: ["适合个人的治愈和问题探索", "推荐配爱自己自信私教项目"]
    }
  ]

  const solves = [
    "外遇治愈",
    "负面情绪问题",
    "挽回婚姻",
    "焦虑症",
    "修复婚姻",
    "抑郁症",
    "性生活不和谐",
    "原生家庭创伤"
  ]

  const stories = [
    {
      image: "/images/video-cover01.avif",
      video: "/images/xiaodan.mp4",
      avatar: "/images/avatar-1.webp",
      name: "小丹",
      title: "心理咨询来访，自信和婚姻私教项目学员",
      content:
        "我因为感情的问题，先找到Penny做个体咨询。通过个体咨询我了解了我原生家庭严重创伤。我开始疗愈我的原生家庭创伤，同时我做了伴侣咨询来修复关系里的心结和学习亲密关系经营的方法。很开心，我与我妈妈的关系治愈了很多，我妈妈也开始做咨询，学习心理学。我们一家人多在进步。"
    },
    {
      image: "/images/video-cover02.avif",
      video: "/images/mumuxi.mp4",
      avatar: "/images/avatar-2.webp",
      name: "木木夕",
      title: "伴侣咨询来访，婚姻私教项目学员",
      content:
        "老公出轨后，我与我老公挣扎痛苦了1年，甚至到达离婚状态。找到 Penny 后, 开启了伴侣咨询，修复创伤之路，重新建立起对他的信任。同时，我们参加了婚姻私教项目，来帮助我解决过去婚姻的问题，和掌握科学经营婚姻的方法。"
    }
  ]
</script>

<svelte:head>
  <title>Penny博士婚姻与家庭咨询</title>
  <meta name="description" content="Penny 博士是一名婚姻与家庭咨询师和督导师，现在在美国一所公立大学任职心理咨询师。美国婚姻和家庭心理咨询师 (执照: MFT001509)">
</svelte:head>

<section
  class="bg-[#ffdfdf] bg-no-repeat bg-center bg-[length:auto_100%]"
  style="background-image: url(/images/hero-bg.svg)"
>
  <div class="container mx-auto pt-4 pb-6 text-2xl leading-loose relative">
    <enhanced:img
      src="../images/hero-body.webp"
      alt=""
      class="h-[85%] absolute bottom-0 left-[45%] z-10"
    />
    <img src="/images/hero.svg" alt="" />
  </div>
</section>

<section class="py-8 sm:py-20">
  <div class="container mx-auto px-4 md:px-16 text-2xl leading-loose">
    <div class="flex flex-col text-center mb-8 sm:mb-20">
      <h2
        class="text-primary text-2xl font-bold sm:text-4xl ml-16 pt-2 pb-4 pr-16 sm:pt-3 sm:pb-6 sm:pr-24 bg-contain bg-no-repeat bg-center do-title tracking-wide"
      >
        我们可以做什么
      </h2>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-0 xl:gap-24 do-box bg-contain bg-no-repeat aspect-[16/7] text-primary text-3xl"
    >
      <div
        class="basis-[40%] flex flex-col justify-center items-center border-b sm:border-b-0 sm:mt-2 sm:mb-4 sm:border-r border-dashed border-primary"
      >
        <h3 class="text-base sm:text-3xl font-semibold my-8 mb-4 sm:mb-8">
          陪伴困境中的你
        </h3>
        <enhanced:img
          src="../images/plight.webp"
          alt="陪伴困境中的你"
          class="w-48 sm:w-64 mb-8"
        />
      </div>
      <div class="basis-[60%] flex flex-col justify-center py-8">
        <h3
          class="text-center sm:text-left text-base sm:text-3xl font-semibold tracking-wider mb-4 xl:my-6 ml-6"
        >
          帮你解决问题
        </h3>
        <ul
          class="text-black text-sm sm:text-2xl leading-loose lg:leading-loose xl:leading-[3em] ml-6 mb-8 flex flex-row flex-wrap"
        >
          {#each solves as slave}
            <li class="w-36 sm:w-64 xl:mb-4 flex flex-row items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 md:w-8 md:h-9 mr-4"
              >
                <rect
                  x="0.5"
                  y="0.947998"
                  width="27"
                  height="27"
                  fill="white"
                  stroke="#FF5685"
                />
                <path
                  d="M4 14.2266L11 21.448L24 7.448"
                  stroke="#FF5685"
                  stroke-width="2"
                />
              </svg>
              {slave}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-secondary">
  <div
    class="container mx-auto flex flex-col gap-x-24 text-sm sm:text-2xl leading-loose"
  >
    <img
      src="/images/drpenny.svg"
      alt="DR.Penny"
      class="w-48 sm:w-80 mb-2 sm:mb-4"
    />
    <h2
      class="col-span-2 text-2xl sm:text-4xl font-bold text-primary tracking-wide mb-8"
    >
      我的自我疗愈故事
    </h2>
    <div class="flex flex-col sm:flex-row gap-0 sm:gap-24">
      <div class="flex-1">
        <p>
          因为父母会吵架，我从小就<strong>渴望温馨的家</strong
          >，可以表达爱和好好讲话。
        </p>
        <p>
          小时候的创伤，比如车祸，老师的冷漠，让我有很多问题，<strong
            >不够自信，不会好好表达情绪，不敢表达爱。</strong
          >我从20几岁开始，到30几岁，花了大约10年的时间自我疗愈。
          我不仅拥有了自信，能处理情绪，还拥有了我小时候想要的家了。这些能力让我<strong
            >拥有了健康的自己，好的事业，好的婚姻。</strong
          >
        </p>
        <p>
          幸福的第一步是开始为自己负责，<strong>主动去解决问题，</strong
          >当问题解决到一定的时候，所有的事情多会往好的方向发展。你只需要去<strong
            >take baby steps！</strong
          >
        </p>
      </div>
      <div class="flex-1">
        <p>
          <strong
            >我专注女性的个人成长和幸福的婚姻。专门帮助女性朋友学会处理负面的情绪，发展出正向的思维，爱自己。有能力把自己活好，同时有能力把婚姻经营好。</strong
          >
        </p>
        <p class="hidden sm:inline">&nbsp;</p>
        <p>
          我通过<strong>私教班，心理咨询，入门课和免费的资料，</strong
          >帮助上万个女性学会治愈原生家庭或者婚姻中的创伤，给她们赋能，学会爱自己和变得自信。
          帮助上千对夫妻不仅仅<strong
            >治愈外遇的创伤，性生活问题，同时学会科学的经营婚姻，</strong
          >保证未来的婚姻可以幸福。
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 sm:py-20">
  <div
    class="container mx-auto px-4 sm:px-8 text-base lg:text-2xl leading-loose flex flex-col lg:flex-row"
  >
    <div class="flex-1 flex flex-col justify-center items-center">
      <div class="m-16 mb-4 sm:m-8 relative">
        <enhanced:img
          src="../images/avatar.webp"
          alt="Penny 博士"
          class="absolute rounded-full w-48 sm:w-auto top-6 left-4 sm:top-5 sm:left-4"
        />
        <img src="/images/avatar-bg.svg" alt="Avatar Background" />
      </div>
      <h3 class="text-2xl sm:text-4xl font-bold mb-12 lg:mb-0">Penny博士</h3>
    </div>
    <div class="flex-1">
      <ul class="list-disc list-inside">
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 pl-3 py-1 md:py-2 bg-[#c7dfff]"
        >
          婚姻和家庭心理咨询博士学位
        </li>
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 ml-8 md:ml-20 pl-3 py-1 md:py-2 bg-[#ffd3e3]"
        >
          美国认证的婚姻和家庭心理咨询师
        </li>
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 pl-3 py-1 md:py-2 bg-[#F3e7cf]"
        >
          美国普渡大学全职咨询师
        </li>
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 ml-8 md:ml-20 pl-3 py-1 md:py-2 bg-[#c7dfff]"
        >
          ICEEFT国际认证的EFT情绪取向咨询师
        </li>
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 pl-3 py-1 md:py-2 bg-[#ffd3e3]"
        >
          曾就职于美国精神医院
        </li>
        <li
          class="w-[20rem] md:w-[32rem] mb-4 md:mb-8 ml-8 md:ml-20 pl-3 py-1 md:py-2 bg-[#F3e7cf]"
        >
          成立杜克昆山大学心理咨询室(苏州昆山)
        </li>
        <li class="w-[20rem] md:w-[32rem] pl-3 py-1 md:py-2 bg-[#c7dfff]">
          从业时间10年
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="py-12 bg-secondary">
  <div class="container mx-auto p-8 md:p-16">
    <h2
      class="text-center text-2xl lg:text-5xl font-bold tracking-wide mb-12 sm:mb-24"
    >
      我们的解决方案
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-2xl">
      {#each solutions as { title, url, details }, i}
        <div
          class="card w-full h-80 md:h-auto md:aspect-square px-6 py-4 md:p-12"
        >
          <h3 class="font-bold text-xl md:text-3xl xl:text-5xl mb-0 sm:mb-4">
            0{i + 1}
          </h3>
          <h3
            class="font-semibold text-xl xl:text-4xl tracking-wide mb-2 sm:mb-8"
          >
            {title}
          </h3>
          <ol
            class="list-decimal list-inside text-sm xl:text-xl leading-loose xl:leading-loose"
          >
            {#each details as detail}
              <li>{detail}</li>
            {/each}
          </ol>
          <ButtonMore {url} />
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-6 sm:py-20">
  <div class="container mx-auto">
    <h2
      class="text-center text-2xl lg:text-5xl font-bold tracking-wide mb-8 sm:mb-16"
    >
      来访进步故事
    </h2>
    <Modal {video} />
    <div class="flex flex-col sm:flex-row gap-x-16 mb-16">
      <div class="relative basis-5/12 mt-4 md:mt-0">
        <a href={null} class="cursor-pointer" on:click|preventDefault={() => {openModal("/images/xiaodan.mp4")}}>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="34" cy="34" r="34" fill="black" fill-opacity="0.6" />
              <path d="M44.4786 31.5969L29.8234 21.3383C29.3292 20.9933 28.7407 20.8091 28.1381 20.8107C27.6672 20.806 27.203 20.922 26.7898 21.1478C26.3141 21.3942 25.9151 21.7663 25.636 22.2236C25.357 22.6809 25.2086 23.206 25.207 23.7417V44.259C25.2086 44.7947 25.357 45.3197 25.636 45.7771C25.9151 46.2344 26.3141 46.6065 26.7898 46.8529C27.203 47.0786 27.6672 47.1947 28.1381 47.19C28.7407 47.1916 29.3292 47.0074 29.8234 46.6624L44.4786 36.4038C44.8656 36.1337 45.1816 35.7741 45.3998 35.3557C45.618 34.9372 45.732 34.4723 45.732 34.0003C45.732 33.5284 45.618 33.0635 45.3998 32.645C45.1816 32.2266 44.8656 31.867 44.4786 31.5969Z" fill="white" />
            </svg>
          </div>
          <img src="/images/video-cover01.avif" alt="Story 1" class="rounded-2xl" />
        </a>
      </div>
      <div class="basis-7/12 pt-4 md:pt-0">
        <div class="flex flex-row gap-x-4 items-center mb-4 xl:mb-6">
          <div class="flex-shrink">
            <img
              src="/images/avatar-1.webp"
              alt="Avatar 1"
              class="rounded-full"
            />
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg sm:text-2xl font-bold">小丹</h4>
            <h5 class="text-base">心理咨询来访，自信和婚姻私教项目学员</h5>
          </div>
        </div>
        <p
          class="text-base xl:text-2xl leading-loose xl:leading-[1.75]"
        >
        我因为感情的问题，先找到Penny做个体咨询。通过个体咨询我了解了我原生家庭严重创伤。我开始疗愈我的原生家庭创伤，同时我做了伴侣咨询来修复关系里的心结和学习亲密关系经营的方法。很开心，我与我妈妈的关系治愈了很多，我妈妈也开始做咨询，学习心理学。我们一家人多在进步。
        </p>
      </div>
    </div>

    <hr class="my-16 border-t border-[#FF5787]">

    <div class="flex flex-col sm:flex-row gap-x-16">
      <div class="relative basis-5/12 mt-4 md:mt-0">
        <a
          href={null}
          class="cursor-pointer"
          on:click|preventDefault={() => {
            openModal("/images/mumuxi.mp4")
          }}
        >
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="34" cy="34" r="34" fill="black" fill-opacity="0.6" />
              <path d="M44.4786 31.5969L29.8234 21.3383C29.3292 20.9933 28.7407 20.8091 28.1381 20.8107C27.6672 20.806 27.203 20.922 26.7898 21.1478C26.3141 21.3942 25.9151 21.7663 25.636 22.2236C25.357 22.6809 25.2086 23.206 25.207 23.7417V44.259C25.2086 44.7947 25.357 45.3197 25.636 45.7771C25.9151 46.2344 26.3141 46.6065 26.7898 46.8529C27.203 47.0786 27.6672 47.1947 28.1381 47.19C28.7407 47.1916 29.3292 47.0074 29.8234 46.6624L44.4786 36.4038C44.8656 36.1337 45.1816 35.7741 45.3998 35.3557C45.618 34.9372 45.732 34.4723 45.732 34.0003C45.732 33.5284 45.618 33.0635 45.3998 32.645C45.1816 32.2266 44.8656 31.867 44.4786 31.5969Z" fill="white" />
            </svg>
          </div>
          <img src="/images/video-cover02.avif" alt="Story 1" class="rounded-2xl" />
        </a>
      </div>
      <div class="basis-7/12 pt-4 md:pt-0">
        <div class="flex flex-row gap-x-4 items-center mb-4 xl:mb-6">
          <div class="flex-shrink">
            <img
              src="/images/avatar-2.webp"
              alt="Avatar 1"
              class="rounded-full"
            />
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg sm:text-2xl font-bold">木木夕</h4>
            <h5 class="text-base">伴侣咨询来访，婚姻私教项目学员</h5>
          </div>
        </div>
        <p
          class="text-base xl:text-2xl leading-loose xl:leading-[1.75]"
        >
        老公出轨后，我与我老公挣扎痛苦了1年，甚至到达离婚状态。找到 Penny 后, 开启了伴侣咨询，修复创伤之路，重新建立起对他的信任。同时，我们参加了婚姻私教项目，来帮助我解决过去婚姻的问题，和掌握科学经营婚姻的方法。
        </p>
      </div>
    </div>
    
  </div>
</section>

<section class="py-10 sm:py-20 bg-secondary">
  <div class="container mx-auto px-2 text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-2xl xl:text-5xl font-bold mb-0 sm:mt-8 sm:mb-12">
        相信自己，相信Penny博士
      </h2>
    </div>
    <div class="m-4 p-8 pb-16 lg:px-20 lg:py-16 slider-box aspect-[16/7]">
      <Splide
        aria-label="Dr.Penny"
        options={{
          arrows: false
        }}
      >
        {#each slider as slide}
        <SplideSlide>
          <div class="flex flex-col lg:flex-row space-x-4 lg:space-x-12">
            <div class="mb-8 lg:mb-0 lg:basis-[46.25%] aspect-[4/3] bg-cover bg-center" style="background-image: url({slide.img})">
              <div class="w-full h-full bg-gradient-to-b from-pink-300/10 to-pink-500/30"></div>

            </div>
            <div class="lg:basis-[53.75%]">
              <h3
                transition:fade
                class="text-base lg:text-4xl font-bold leading-normal mb-2 lg:mb-4"
              >
                {@html slide.title}
              </h3>
              <p
                class="text-base lg:text-xl leading-loose lg:leading-relaxed xl:leading-loose"
              >
                {slide.content}
              </p>
            </div>
          </div>
        </SplideSlide>
        {/each}
        <div class="splide__arrows" />
      </Splide>
    </div>
  </div>
</section>

<style>
  .do-title {
    background-image: url("/images/do-title.svg");
  }

  .do-box {
    background-image: url("/images/do-box.svg");
    background-size: 100% 100%;
  }

  .card {
    background-image: url("/images/card-bg.svg");
    background-size: 100% 100%;
    @apply bg-no-repeat relative;
  }
</style>
