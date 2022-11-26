<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide'
import '@splidejs/svelte-splide/css/core'

import { Tabs, TabList, TabPanel, Tab } from '$lib/tabs'
import Lessons from '$lib/components/Lessons.svelte'

const studys = [
  {title: '学', content: '<strong>8个模块</strong>视频课程，16周学习'},
  {title: '练', content: '<strong>8次</strong>课后练习'},
  {title: '陪', content: '获得8次Penny的<strong>语音深入指导</strong>'},
  {title: '课', content: '8次线上<strong>团队咨询课程</strong>'},
  {title: '助', content: '获得<strong>助教指导</strong>'},
  {title: '群', content: '获得群里小伙伴<strong>支持和鼓励</strong>'},
]
</script>

<svelte:head>
  <title>个人治愈</title>
</svelte:head>

<section class="py-20 bg-no-repeat bg-cover" style="background-image: url(/images/healing-bg.jpg)">
  <div class="container mx-auto">
    <img src="/images/healing-hero.svg" alt="">
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto text-2xl leading-loose">
    <div class="flex justify-center mb-20">
      <img src="/images/step8.svg" alt="" class="w-96">
    </div>
    <div class="step">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step ml-48">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step ml-48">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step ml-48">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
    <div class="step ml-48">
      <div class="basis-1/6 mr-8">
        <img src="/images/step-1.jpg" alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-3xl font-semibold my-4">第一步: 治愈小时候的负面阴影</h4>
        <p>无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”.</p>
      </div>    
    </div>
  </div>
</section>

<section class="py-20 bg-indigo-50">
  <div class="container mx-auto text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-3xl lg:text-5xl font-bold my-16">爱自己自信私教项目内容</h2>
    </div>
    <div class="m-4 p-8 lg:px-20 lg:py-16 tabs-box aspect-[3/2]">
      <Tabs>
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabList>

        <TabPanel>
          <div class="flex flex-col p-8">
            <h3 class="text-4xl font-semibold mb-2">Week 1-2</h3>
            <hr class="w-24 h-2 mb-10 bg-indigo-300" />
            <h3 class="text-3xl font-semibold mb-4">掌握亲密关系中爱与依恋的作用</h3>
            <h4 class="text-lg mb-12">目标：掌握爱的科学理论，婚姻进步的基础！</h4>
            <div class="flex flex-row space-x-4 lessons">
              <Lessons />  
            </div>
            <h4 class="pt-8 pb-4 text-xl font-semibold">课后练习：</h4>
            <h5 class="text-base leading-loose">提交1-3讲课后练习，获得8分钟语音反馈</h5>
            <h5 class="text-base">提交4-5讲课后练习，获得8分钟语音反馈</h5>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Second panel</h2>
        </TabPanel>

        <TabPanel>
          <h2>Third panel</h2>
        </TabPanel>
      </Tabs>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto leading-loose">
    <h2 class="text-center text-3xl lg:text-5xl font-semibold tracking-wide my-16">学习和进步形式</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16 p-8 text-2xl">
      {#each studys as study}
      <div class="flex flex-row items-center space-x-8">
        <div class="relative">
          <h3 class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 text-4xl font-semibold">{study.title}</h3>
          <svg width="92" height="84" viewBox="0 0 92 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91.5 27.5629C91.5 39.4253 88.6894 53.4518 82.8787 64.4947C77.0662 75.541 68.3157 83.5 56.4545 83.5C44.3408 83.5 30.2986 82.5529 19.3004 78.6548C13.8047 76.7069 9.10333 74.0338 5.77951 70.4053C2.4659 66.788 0.5 62.199 0.5 56.36C0.5 44.4684 2.27461 30.454 7.04678 19.4326C11.8174 8.41456 19.5225 0.5 31.3636 0.5C43.4764 0.5 58.5714 1.42732 70.6223 5.31124C82.6896 9.20043 91.5 15.9735 91.5 27.5629Z" fill="#f3f5ff" stroke="#3b5bfb"/>
          </svg>
        </div>
        <p>{@html study.content}</p>
      </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 bg-indigo-50">
  <div class="container mx-auto text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-3xl lg:text-5xl font-bold my-16">成功案例</h2>
    </div>
    <div class="m-4 p-8 lg:px-20 lg:py-16 cases-box">
    <Splide class="cases" aria-label="Dr.Penny" options={{
      arrows: false,
    }}
    >
      <SplideSlide>
        <div class="flex flex-row justify-center mb-16">
          <svg width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#3b5bfb" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
          <h3 class="lg:mx-6 text-3xl font-semibold text-indigo-600">张先生和他的太太</h3>
          <svg width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#3b5bfb" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col lg:flex-row space-x-4 lg:space-x-12 text-xl leading-loose">
          <div class="lg:flex-1">
            <p>很多时候，来访者会和我聊很多他和别人的关系问题，可是因为都是他的视角，所以我并不能确定描述的有多么客观、准确。</p>
            <p>这样的情况下，咨询师通常会更多地参考自己的感受，观察此时此地来访者和自己的关系里正在发生的事情。</p>
            <p>咨询的时候我会一边关注来访者，一边关注自己的感受，并且在适当的时候将自己的感受非常坦诚地分享给对方。</p>
            <p>例如我曾经遇到过一个滔滔不绝的来访者，</p>
          </div>
          <div>
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#3b5bfb" stroke-dasharray="6 6"/>
            </svg>              
          </div>
          <div class="lg:flex-1">
            <p>喜欢花大量时间讲她的人生故事，所以我选择了一个时机来打断她：「当我在听你讲述你的故事的时候，注意到自己感觉有一些疏离，和你的距离变得有些远了。</p>
            <p>我在想，你是否也会让生活中其他的人有类似的感受呢？你现在的感受是怎样的？和我讲故事是因为你不愿意接近我吗？」</p>
            <p>这种针对此时此地的反馈，往往能够让对话变得非常坦诚，让双方的对话从客套的侃侃而谈走向更真实和深刻的层面。</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="flex flex-row justify-center mb-16">
          <svg width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
          <h3 class="lg:mx-6 text-3xl font-semibold text-primary">张先生和他的太太</h3>
          <svg width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col lg:flex-row space-x-4 lg:space-x-12 text-xl leading-loose">
          <div class="lg:flex-1">
            <p>很多时候，来访者会和我聊很多他和别人的关系问题，可是因为都是他的视角，所以我并不能确定描述的有多么客观、准确。</p>
            <p>这样的情况下，咨询师通常会更多地参考自己的感受，观察此时此地来访者和自己的关系里正在发生的事情。</p>
            <p>咨询的时候我会一边关注来访者，一边关注自己的感受，并且在适当的时候将自己的感受非常坦诚地分享给对方。</p>
            <p>例如我曾经遇到过一个滔滔不绝的来访者，</p>
          </div>
          <div>
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#FF5685" stroke-dasharray="6 6"/>
            </svg>              
          </div>
          <div class="lg:flex-1">
            <p>喜欢花大量时间讲她的人生故事，所以我选择了一个时机来打断她：「当我在听你讲述你的故事的时候，注意到自己感觉有一些疏离，和你的距离变得有些远了。</p>
            <p>我在想，你是否也会让生活中其他的人有类似的感受呢？你现在的感受是怎样的？和我讲故事是因为你不愿意接近我吗？」</p>
            <p>这种针对此时此地的反馈，往往能够让对话变得非常坦诚，让双方的对话从客套的侃侃而谈走向更真实和深刻的层面。</p>
          </div>
        </div>
      </SplideSlide>
      <div class="splide__arrows" />
    </Splide>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="container mx-auto flex flex-col items-center">
    <h2><img src="/images/experience-title.svg" alt=""></h2>
    <h3 class="text-3xl text-indigo-600 mt-8 mb-12">我能先试试吗？</h3>
    <div class="flex lg:flex-row space-x-8">
      <div class="flex-1">
        <img src="/images/experience-lesson.svg" alt="">
      </div>
      <div class="flex-1">
        <img src="/images/experience-weixin.svg" alt="">
      </div>
    </div>
  </div>
</section>

<style>
.step {
  background-image: url(/images/step-box.svg);
  @apply w-[60rem] p-8 mb-8 bg-no-repeat flex flex-row items-center;
}

.tabs-box {
  background-image: url('/images/tabs-box.svg');
  @apply bg-no-repeat bg-contain;
}
</style>