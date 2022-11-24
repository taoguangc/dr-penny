<script>
import { onMount } from 'svelte'
import { animate, inView } from 'motion'
import ButtonMore from '../components/ButtonMore.svelte'

import { Splide, SplideSlide } from '@splidejs/svelte-splide'

import '@splidejs/svelte-splide/css/core'


// onMount(() => {
//   const inview = inView("section", ({ target }) => {
//     animate(
//       target.querySelector("span"),
//       { opacity: 1, transform: "none" },
//       { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
//     )
//   })
// })
</script>

<section class="bg-[#ffdfdf] bg-no-repeat bg-center bg-[length:auto_100%]" style="background-image: url(/images/hero-bg.svg)">
  <div class="container mx-auto pt-4 pb-6 text-2xl leading-loose relative">
    <img src="/images/hero-body.webp" alt="" class="h-[85%] absolute bottom-0 left-[45%] z-10">
    <img src="/images/hero.svg" alt="">
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto text-2xl leading-loose">
    <div class="flex flex-col text-center mb-20">
      <h2 class="text-primary text-3xl pt-2 pb-4 pr-16 bg-contain bg-no-repeat bg-center do-title">我们可以做什么</h2>
    </div>
    <div class="flex flex-row gap-24 do-box bg-contain bg-no-repeat aspect-[16/7] text-primary text-3xl">
      <div class="basis-[40%] flex flex-col justify-center items-center mt-2 mb-4 border-r border-dashed border-primary">
        <h3 class="font-semibold">陪伴困境</h3>
        <h3 class="font-semibold mb-8">中的你</h3>
        <img src="/images/plight.svg" alt="陪伴困境中的你" class="w-64">
      </div>
      <div class="basis-[60%] flex flex-col justify-center py-8">
        <h3 class="font-semibold tracking-wider mb-4 lg:mb-8 xl:mb-16">帮你解决问题</h3>
        <ul class="text-black text-2xl leading-[3em] flex flex-row flex-wrap">
          <li class="w-64 flex flex-row items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>
          外遇治愈</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>挽回婚姻</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>修复婚姻</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>性生活不和谐</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>负面情绪问题</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>焦虑症</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>抑郁症</li>
          <li class="w-64 flex flex-row items-center"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-4">
          <rect x="0.5" y="0.947998" width="27" height="27" fill="white" stroke="#FF5685"/>
          <path d="M4 14.2266L11 21.448L24 7.448" stroke="#FF5685" stroke-width="2"/>
          </svg>原生家庭创伤</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-secondary">
  <div class="container mx-auto flex flex-col gap-x-24 text-2xl leading-loose">
    <img src="/images/drpenny.svg" alt="DR.Penny" class="w-80 mb-4">
    <h2 class="col-span-2 text-4xl font-semibold text-primary tracking-wide mb-8">我的自我疗愈故事</h2>
    <div class="flex gap-24">
      <div class="flex-1">
        <p>因为父母会吵架，我从小就<strong>渴望温馨的家</strong>，可以表达爱和好好讲话。</p>
        <p>小时候的创伤，比如车祸，老师的冷漠，让我有很多问题，<strong>不够自信，不会好好表达情绪，不敢表达爱。</strong>我从20几岁开始，到30几岁，花了大约10年的时间自我疗愈。 我不仅拥有了自信，能处理情绪，还拥有了我小时候想要的家了。这些能力让我<strong>拥有了健康的自己，好的事业，好的婚姻。</strong></p>
        <p>幸福的第一步是开始为自己负责，<strong>主动去解决问题，</strong>当问题解决到一定的时候，所有的事情多会往好的方向发展。你只需要去<strong>take baby steps！</strong></p>
      </div>
      <div class="flex-1">
        <p><strong>我专注女性的个人成长和幸福的婚姻。专门帮助女性朋友学会处理负面的情绪，发展出正向的思维，爱自己。有能力把自己活好，同时有能力把婚姻经营好。</strong></p>
        <p>&nbsp;</p>
        <p>我通过<strong>私教班，心理咨询，入门课和免费的资料，</strong>帮助上万个女性学会治愈原生家庭或者婚姻中的创伤，给她们赋能，学会爱自己和变得自信。
        帮助上千对夫妻不仅仅<strong>治愈外遇的创伤，性生活问题，同时学会科学的经营婚姻，</strong>保证未来的婚姻可以幸福。</p>
      </div>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto px-8 text-2xl leading-loose flex lg:flex-row">
    <div class="flex-1 flex flex-col justify-center items-center">
      <div class="p-8">
        <img src="/images/avatar.svg" alt="Penny博士">
      </div>
      <h3 class="text-4xl font-bold">Penny博士</h3>
    </div>
    <div class="flex-1">
      <ul class="list-disc list-inside">
        <li class="w-[32rem] mb-8 pl-4 py-1 bg-[#c7dfff]">婚姻和家庭心理咨询博士学位</li>
        <li class="w-[32rem] ml-20 mb-8 pl-4 py-1 bg-[#ffd3e3]">美国认证的婚姻和家庭心理咨询师</li>
        <li class="w-[32rem] mb-8 pl-4 py-1 bg-[#F3e7cf]">美国普渡大学全职咨询师</li>
        <li class="w-[32rem] ml-20 mb-8 pl-4 py-1 bg-[#c7dfff]">ICEEFT国际认证的EFT情绪取向咨询师</li>
        <li class="w-[32rem] mb-8 pl-4 py-1 bg-[#ffd3e3]">曾就职于美国精神医院</li>
        <li class="w-[32rem] ml-20 mb-8 pl-4 py-1 bg-[#F3e7cf]">成立杜克昆山大学心理咨询室(苏州昆山)</li>
        <li class="w-[32rem] pl-4 py-1 bg-[#c7dfff]">从业时间10年</li>
      </ul>
    </div>
  </div>
</section>

<section class="py-20 bg-secondary">
  <div class="container mx-auto leading-loose">
    <h2 class="text-center text-3xl lg:text-5xl font-semibold tracking-wide my-16">我们的解决方案</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-2xl">
      <div class="card">
        <h3 class="font-bold text-3xl lg:text-5xl mb-4">01</h3>
        <h3 class="font-semibold text-2xl lg:text-4xl tracking-wide mb-8">爱自己自信私教项目</h3>
        <ol class="list-decimal list-inside">
          <li>治愈原生家庭创伤或者亲密关系中的创伤</li>
          <li>学会情绪管理</li>
          <li>建立正面潜意识</li>
          <li>成为爱自己自信的女人</li>
        </ol>
        <ButtonMore />
      </div>
      <div class="card">
        <h3 class="font-bold text-3xl lg:text-5xl mb-4">02</h3>
        <h3 class="font-semibold text-4xl tracking-wide mb-8">婚姻私教项目</h3>
        <ol class="list-decimal list-inside">
          <li>有效的沟通步骤</li>
          <li>内在需求的表达+回应</li>
          <li>放下过去的创伤</li>
          <li>正面的经营婚姻</li>
        </ol>
        <ButtonMore />
      </div>
      <div class="card">
        <h3 class="font-bold text-3xl lg:text-5xl mb-4">03</h3>
        <h3 class="font-semibold text-4xl tracking-wide mb-8">伴侣咨询</h3>
        <ol class="list-decimal list-inside">
          <li>适合伴侣双方想一起修复婚姻</li>
          <li>私人指导</li>
          <li>需要配婚姻私教项目系统学习</li>
        </ol>
        <ButtonMore />
      </div>
      <div class="card">
        <h3 class="font-bold text-3xl lg:text-5xl mb-4">04</h3>
        <h3 class="font-semibold text-4xl tracking-wide mb-8">个体咨询</h3>
        <ol class="list-decimal list-inside">
          <li>适合个人的治愈和问题探索</li>
          <li>推荐配爱自己自信私教项目</li>
        </ol>
        <ButtonMore />
      </div>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto text-2xl leading-loose">
    <h2 class="text-center text-5xl font-semibold tracking-wide my-16">我们来访的故事</h2>
    <div class="mb-16">
      <Splide aria-label="My Favorite Images" options={{
        arrows: false,
      }}>
        <SplideSlide>
          <div class="flex flex-row gap-x-16">
            <div class="basis-5/12"><img src="/images/story-1.jpg" alt="Story 1" class="rounded-2xl" /></div>
            <div class="basis-7/12">
              <div class="flex flex-row gap-x-8">
                <div class="flex-shrink">
                  <img src="/images/avatar-1.jpg" alt="Avatar 1" class="rounded-full" />
                </div>
                <div class="flex flex-col justify-center mb-8">
                  <h4 class="text-2xl font-bold">小丹</h4>
                  <h5 class="text-base">爱自己自信私教项目</h5>
                </div>
              </div>
              <p>不管好与不好多可以接纳自己，暂停负面解读外在的世界，可以允许自己展示自己，最后到达看到自己的好并感谢自己。让女性们更坚信去做自己的选择，更好的与人相处，更勇敢的去展示自己的魅力和表达自己的想法和观点。</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="flex flex-row gap-x-16">
            <div class="basis-5/12"><img src="/images/story-1.jpg" alt="Story 1" class="rounded-2xl" /></div>
            <div class="basis-7/12">
              <div class="flex flex-row gap-x-8">
                <div class="flex-shrink">
                  <img src="/images/avatar-1.jpg" alt="Avatar 1" class="rounded-full" />
                </div>
                <div class="flex flex-col justify-center mb-8">
                  <h4 class="text-2xl font-bold">小丹</h4>
                  <h5 class="text-base">爱自己自信私教项目</h5>
                </div>
              </div>
              <p>不管好与不好多可以接纳自己，暂停负面解读外在的世界，可以允许自己展示自己，最后到达看到自己的好并感谢自己。让女性们更坚信去做自己的选择，更好的与人相处，更勇敢的去展示自己的魅力和表达自己的想法和观点。</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</section>

<section class="py-20 bg-secondary">
  <div class="container mx-auto text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-3xl lg:text-5xl font-bold my-16">相信自己，相信Penny博士</h2>
    </div>
    <div class="m-4 p-8 lg:px-20 lg:py-16 slider-box aspect-[16/7]">
    <Splide aria-label="Dr.Penny" options={{
      arrows: false,
    }}
    >
      <SplideSlide>
        <div class="flex flex-col lg:flex-row space-x-4 lg:space-x-12">
          <div class="mb-8 lg:mb-0 lg:basis-[46.25%]">
            <img src="/images/slide-1.avif" alt="">
          </div>
          <div class="lg:basis-[53.75%]">
            <h3 class="text-base lg:text-4xl font-bold leading-normal mb-2 lg:mb-4">婚姻&家庭</h3>
            <h3 class="text-base lg:text-4xl font-bold leading-normal mb-2 lg:mb-12">心理咨询专业博士</h3>
            <p class="leading-loose">Penny博士在美国康萨斯州立大学(Kanas state University)获得了博士学位, 这在国内心理咨询师专业水平参差不齐的大环境下, 可以算是专业实力的最强认证.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="flex flex-col lg:flex-row space-x-4 lg:space-x-12">
          <div class="mb-8 lg:mb-0 lg:basis-[46.25%]">
            <img src="/images/slide-1.avif" alt="">
          </div>
          <div class="lg:basis-[53.75%]">
            <h3 class="text-base lg:text-4xl font-bold leading-normal mb-2 lg:mb-4">婚姻&家庭</h3>
            <h3 class="text-base lg:text-4xl font-bold leading-normal mb-2 lg:mb-12">心理咨询专业博士</h3>
            <p class="leading-loose">Penny博士在美国康萨斯州立大学(Kanas state University)获得了博士学位, 这在国内心理咨询师专业水平参差不齐的大环境下, 可以算是专业实力的最强认证.</p>
          </div>
        </div>
      </SplideSlide>
      <div class="splide__arrows" />
    </Splide>
    </div>
  </div>
</section>

<style>
.do-title {
  background-image: url('/images/do-title.svg');
}

.do-box {
  background-image: url('/images/do-box.svg');
}

.card {
  background-image: url('/images/card-bg.svg');
  @apply aspect-square bg-no-repeat bg-contain m-4 p-12 relative;
}

</style>