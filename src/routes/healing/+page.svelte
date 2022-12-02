<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide'
import '@splidejs/svelte-splide/css/core'

import { Tabs, TabList, TabPanel, Tab } from '$lib/tabs'
// import Lessons from '$lib/components/Lessons.svelte'
import { modules } from '$lib/data/modules.json'

const steps = [
  {img: '/images/step-1.jpg', title: '第一步: <span class="text-primary">治愈</span>小时候的负面阴影', content: '无论因为校园经历，还是原生家庭，都需要先从你的潜意识里，走出你小时候的负面经历，让你能对特定人际关系“脱敏”。'},
  {img: '/images/step-2.jpg', title: '第二步: <span class="text-indigo-600">解决</span>焦虑和不安', content: '不要再去压抑，不能再放大负面情绪，你需要用脑神经科学的方法去处理情绪，让它带你走出来.'},
  {img: '/images/step-3.jpg', title: '第三步: <span class="text-primary">不再</span>对比和自我否定', content: '你需要学会如何自我共情，如何接纳自己。掌握心理学方法，停下你无法控制的负面想法。'},
  {img: '/images/step-4.jpg', title: '第四步: <span class="text-indigo-600">跳出</span>恶性循环', content: '你需要看到你的“内在运作模式” - 负面情绪 → 负面解读世界 → 缺乏行动力。换一幅眼镜，用积极的视角看自己和世界。'},
  {img: '/images/step-5.jpg', title: '第五步: <span class="text-primary">建立</span>并拥有正面情绪', content: '你要学会肯定自己，鼓励自己，甚至为自己庆祝。积累自己对自己的正面情绪，用更正面的眼光看自己.'},
  {img: '/images/step-6.jpg', title: '第六步: <span class="text-indigo-600">无负担</span>享受快乐', content: '你需要知道你值得快乐，放下”快乐就会被批评“的内疚心理。学会处理负面情绪，也学会放松享受乐趣。'},
  {img: '/images/step-7.jpg', title: '第七步: <span class="text-primary">养成</span>正面的潜意识', content: '停止逼迫自己前进，而是用轻松和积极的正面潜意识，去找到你的热情所在，才能获得你想要的生活状态。'},
  {img: '/images/step-8.jpg', title: '第八步: 养成<span class="text-indigo-600">自信和幸福</span>的生活习惯', content: '学会把学到的高效，自信和幸福的习惯和方法应用在日常生活中，最终从内在影响到外在生活，实现你的更多人生目标。'},
]

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

<section class="py-8 md:py-20 bg-no-repeat bg-cover" style="background-image: url(/images/healing-bg.jpg)">
  <div class="container mx-auto flex flex-col-reverse md:flex-row gap-4">
    <div>
      <img src="/images/healing-hero1.svg" alt="">
    </div>
    <div>
      <img src="/images/healing-hero2.svg" alt="">
    </div>
  </div>
</section>

<section class="py-8 md:py-20">
  <div class="container mx-auto px-4 md:px-16 leading-loose">
    <div class="flex justify-center mb-4 md:mb-20">
      <img src="/images/step8.svg" alt="" class="w-60 md:w-96">
    </div>
    {#each steps as step}
    <div class="step-box p-2 pt-4 md:p-8 mb-2 md:mb-8 w-full md:w-[60rem] flex flex-row items-start md:items-center">
      <div class="basis-1/6 mr-4 md:mr-8">
        <img src={step.img} alt="" class="rounded-full">
      </div>
      <div class="basis-5/6">
        <h4 class="text-base md:text-3xl font-semibold mb-2 md:my-4">{@html step.title}</h4>
        <p class="text-sm md:text-2xl mb-2">{step.content}</p>
      </div>    
    </div>
    {/each}
  </div>
</section>

<section class="py-10 md:py-20 bg-indigo-50">
  <div class="container mx-auto px-0 md:px-16 text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-xl md:text-3xl lg:text-5xl font-bold my-4 md:my-16">爱自己自信私教项目内容</h2>
    </div>
    <div class="m-2 md:m-4 p-0 md:p-8 lg:p-16 tabs-box aspect-[3/2]">
      <Tabs>
        <TabList>
          {#each modules as module, index}
          <Tab>{index+1}</Tab>
          {/each}
        </TabList>
        {#each modules as { title, subtitle, homeworks, lessons }, index}
        <TabPanel>
          <div class="flex flex-col p-3 pb-6 md:pb-0">
            <div class="ml-4 md:ml-0 mt-8 md:mt-0">
              <h3 class="text-lg md:text-4xl font-semibold mb-2">Module {index+1}</h3>
              <hr class="w-16 md:w-24 h-1 md:h-2 mb-4 md:mb-8 bg-indigo-300" />
              <h3 class="text-lg md:text-3xl font-semibold md-0 md:mb-2">{title}</h3>
              <h4 class="text-sm md:text-lg mb-4 md:mb-12">{subtitle}</h4>
            </div>
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-4 lessons">
              {#each lessons as { icon, title, content}, index }
              <div class="flex-1 flex flex-row md:flex-col items-start md:items-center lesson-box p-4 md:py-6 mb-4 relative">
                <div class="flex flex-col-reverse md:flex-col items-center mr-6 md:mr-0">
                  <h5 class="{index % 2 === 0 ? 'text-primary' : 'text-indigo-600'} text-xs md:text-lg  font-semibold md:mb-4">Lesson{index+1}</h5>
                  <div class="w-8 flex justify-center">{@html icon}</div>
                </div>
                <div class="flex flex-col justify-start">
                  <h4 class="{index % 2 === 0 ? 'text-primary' : 'text-indigo-600'} text-base md:text-xl font-semibold md:text-center my-2 md:mb-16">{title}</h4>
                  <h6 class="text-sm md:text-center md:absolute md:bottom-8 md:left-4 md:right-4">{content}</h6>
                </div>
              </div>
              {/each}
            </div>
            <h4 class="pt-0 md:pt-4 pb-4 text-xl font-semibold">课后练习：</h4>
            {#each homeworks as homework}
            <h5 class="text-base leading-loose">{homework}</h5>
            {/each}
          </div>
        </TabPanel>
        {/each}
      </Tabs>
    </div>
  </div>
</section>

<section class="py-8 md:py-20">
  <div class="container mx-auto px-4 md:px-16 leading-loose">
    <h2 class="text-center text-xl md:text-3xl lg:text-5xl font-semibold tracking-wide my-4 md:my-16">学习和进步形式</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-x-32 md:gap-y-16 p-2 md:p-8 text-2xl">
      {#each studys as study}
      <div class="flex flex-row items-center gap-3 md:gap-8">
        <div class="relative">
          <h3 class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 text-lg md:text-4xl font-semibold">{study.title}</h3>
          <svg class="w-10 h-10 md:w-32 md:h-32" width="92" height="84" viewBox="0 0 92 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91.5 27.5629C91.5 39.4253 88.6894 53.4518 82.8787 64.4947C77.0662 75.541 68.3157 83.5 56.4545 83.5C44.3408 83.5 30.2986 82.5529 19.3004 78.6548C13.8047 76.7069 9.10333 74.0338 5.77951 70.4053C2.4659 66.788 0.5 62.199 0.5 56.36C0.5 44.4684 2.27461 30.454 7.04678 19.4326C11.8174 8.41456 19.5225 0.5 31.3636 0.5C43.4764 0.5 58.5714 1.42732 70.6223 5.31124C82.6896 9.20043 91.5 15.9735 91.5 27.5629Z" fill="#f3f5ff" stroke="#3b5bfb"/>
          </svg>
        </div>
        <p class="mb-0 text-base md:text-2xl">{@html study.content}</p>
      </div>
      {/each}
    </div>
  </div>
</section>

<section class="pt-8 pb-16 md:py-20 bg-indigo-50">
  <div class="container mx-auto px-4 md:px-16 text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-xl md:text-5xl font-bold my-4 md:my-16">成功案例</h2>
    </div>
    <div class="m-0 md:m-4 p-4 md:px-20 md:py-16 cases-box">
    <Splide class="cases" aria-label="Dr.Penny" options={{
      arrows: false,
    }}
    >
      <SplideSlide>
        <div class="flex flex-row justify-center md:mb-16">
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#3b5bFb" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
          <h3 class="mx-0 md:mx-6 mb-2 text-lg md:text-3xl font-semibold text-indigo-600">张先生和他的太太</h3>
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#3b5bFb" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-12 text-xs md:text-xl leading-loose md:leading-loose">
          <div class="md:flex-1">
            <p>很多时候，来访者会和我聊很多他和别人的关系问题，可是因为都是他的视角，所以我并不能确定描述的有多么客观、准确。</p>
            <p>这样的情况下，咨询师通常会更多地参考自己的感受，观察此时此地来访者和自己的关系里正在发生的事情。</p>
            <p>咨询的时候我会一边关注来访者，一边关注自己的感受，并且在适当的时候将自己的感受非常坦诚地分享给对方。</p>
            <p>例如我曾经遇到过一个滔滔不绝的来访者，</p>
          </div>
          <div class="hidden md:block">
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#3b5bFb" stroke-dasharray="6 6"/>
            </svg>              
          </div>
          <div class="md:flex-1">
            <p>喜欢花大量时间讲她的人生故事，所以我选择了一个时机来打断她：「当我在听你讲述你的故事的时候，注意到自己感觉有一些疏离，和你的距离变得有些远了。</p>
            <p>我在想，你是否也会让生活中其他的人有类似的感受呢？你现在的感受是怎样的？和我讲故事是因为你不愿意接近我吗？」</p>
            <p>这种针对此时此地的反馈，往往能够让对话变得非常坦诚，让双方的对话从客套的侃侃而谈走向更真实和深刻的层面。</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="flex flex-row justify-center md:mb-16">
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#3b5bFb" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
          <h3 class="mx-0 md:mx-6 mb-2 text-lg md:text-3xl font-semibold text-indigo-600">张先生和他的太太</h3>
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#3b5bFb" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-12 text-xs md:text-xl leading-loose md:leading-loose">
          <div class="md:flex-1">
            <p>很多时候，来访者会和我聊很多他和别人的关系问题，可是因为都是他的视角，所以我并不能确定描述的有多么客观、准确。</p>
            <p>这样的情况下，咨询师通常会更多地参考自己的感受，观察此时此地来访者和自己的关系里正在发生的事情。</p>
            <p>咨询的时候我会一边关注来访者，一边关注自己的感受，并且在适当的时候将自己的感受非常坦诚地分享给对方。</p>
            <p>例如我曾经遇到过一个滔滔不绝的来访者，</p>
          </div>
          <div class="hidden md:block">
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#3b5bFb" stroke-dasharray="6 6"/>
            </svg>              
          </div>
          <div class="md:flex-1">
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

<section class="py-8 md:py-20">
  <div class="container mx-auto flex flex-col items-center">
    <h2 class="px-12 md:px-0"><img src="/images/experience-title.svg" alt=""></h2>
    <h3 class="text-sm md:text-3xl text-indigo-600 mt-2 md:mt-8 mb-8 mb:mb-12">我能先试试吗？</h3>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="flex-1">
        <img src="/images/experience-lesson.svg" alt="">
      </div>
      <div class="flex-1">
        <img src="/images/experience-weixin.svg" alt="Weixin Qr-code">
      </div>
    </div>
  </div>
</section>

<style>
.step-box {
  background-image: url(/images/step-box.svg);
  @apply bg-no-repeat;
}

.step-box:nth-child(odd) {
  background-image: url(/images/step-box2.svg);
}

@media (min-width: 768px) {
  .step-box:nth-child(odd) {
    margin-left: 12rem;
  }
}

</style>