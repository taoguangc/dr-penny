<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide'
import '@splidejs/svelte-splide/css/core'

import { Tabs, TabList, TabPanel, Tab } from '$lib/tabs'
import { weeks } from '$lib/data/weeks.json'

const studies = [
  {title: '看', content: '6个模块线上<strong>视频课程</strong>,可无限使用(可先单独学习或者二个人一起学习)'},
  {title: '学', content: '<strong>12周</strong>项目，2周完成一个模块, 3个月完成整个项目。'},
  {title: '练', content: '每周花<strong>1-2个小时学习</strong>，完成课后练习。'},
  {title: '思', content: '<strong>伴侣双方</strong>探讨视频课里和课后练习的内容。'},
  {title: '陪', content: '<strong>6次</strong> Penny 博士的10分钟的<strong>语音反馈</strong>。'},
  {title: '助', content: '每个模块1-3,4-6讲提交<strong>课后练习</strong>，均可获取<strong>8分钟反馈</strong>'},
]
</script>

<svelte:head>
  <title>婚姻修复</title>
</svelte:head>

<section class="py-20 bg-bottom md:bg-center md:bg-cover md:bg-no-repeat marriage-bg">
  <div class="container mx-auto flex flex-col md:flex-row h-96 md:h-[32rem]">
    <div class="flex-1 relative">
      <img src="/images/marriage-heart.webp" alt="">
      <div class="absolute top-16 lg:top-20 xl:top-28 left-0 right-0 flex flex-col items-center">
        <h2 class="text-xl md:text-4xl font-semibold text-primary mr-6 mb-2 md:mb-6">婚姻私教项目</h2>
        <ol class="list-decimal text-xs md:text-base leading-relaxed md:leading-loose text-primary">
          <li><strong>表达</strong>内在的需求，</li>
          <li>共情<strong>回应</strong>彼此，</li>
          <li><strong>掌握</strong>有效的沟通步骤，</li>
          <li><strong>放下</strong>过去的创伤，</li>
          <li>正面的<strong>经营</strong>婚姻</li>
        </ol>
        <botton class="mt-36 md:mt-4 mr-0 md:mr-16 px-12 md:px-8 py-2 rounded-full border border-primary text-white bg-primary text-center text-base md:text-xl">购买项目</botton>
      </div>
    </div>
    <div class="flex-1"></div>  
  </div>
</section>

<section class="py-8 md:py-20">
  <div class="container mx-auto text-xs px-2 md:px-16 md:text-xl leading-loose md:leading-extra-loose relative">
    <div class="flex flex-col text-center mb-4 md:mb-20">
      <h2 class="text-white font-bold text-xl sm:text-4xl pt-3 pb-4 pl-4 sm:pt-6 sm:pb-8 sm:pl-6 bg-contain bg-no-repeat bg-center tracking-wide slove-title">解决问题：很多年的恶性循环</h2>
    </div>
    <div class="flex lg:flex-row justify-center ml-0 md:ml-16">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8 mr-2">“他背叛了我，我不相信他”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我努力了, 我也很委屈”</div>
    </div>
    <div class="flex lg:flex-row justify-center ml-0 md:ml-32">
      <div class="slove-box h-6 md:h-12 px-1 md:px-4 mb-4 md:mb-8">“他还出轨了, 我很痛苦”</div>
      <div class="slove-box h-6 md:h-12 px-1 md:px-4 mb-4 md:mb-8">“我听她的话也不是，不听她也不满意”</div>
    </div>
    <div class="flex lg:flex-row justify-center ml-0 md:-ml-16">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“他不理解我”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“她脾气太大了”</div>
    </div>
    <div class="flex lg:flex-row justify-center">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“他和我没有共同兴趣爱好”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我太压抑了, 需要小心翼翼的”</div>
    </div>
    <div class="flex lg:flex-row justify-center ml-0 md:ml-24">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“他不会共情”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“她不会关心我”</div>
    </div>
    <div class="flex lg:flex-row justify-center ml-0 md:-ml-24">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“他老维护他妈妈”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我没有维护我妈”</div>
    </div>
    <div class="flex lg:flex-row justify-center">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我很孤单”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我也负荷了, 没办法了”</div>
    </div>
    <div class="flex lg:flex-row justify-center pb-32 md:pb-0">
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我们需要情感连接”</div>
      <div class="slove-box h-6 md:h-12 px-2 md:px-4 mb-4 md:mb-8">“我需要私人空间”</div>
    </div>
    <div class="absolute bottom-0 z-10">
      <img class="px-4" src="/images/quarrel.svg" alt="">
    </div>
  </div>
</section>

<section class="py-10 md:py-20 bg-indigo-50">
  <div class="container mx-auto px-0 md:px-16 text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-xl md:text-3xl lg:text-5xl font-bold my-4 md:my-16">婚姻修复私教项目内容</h2>
    </div>
    <div class="m-2 md:m-4 p-0 md:p-8 lg:p-16 tabs-box aspect-[3/2]">
      <Tabs>
        <TabList>
          {#each weeks as week, index}
          <Tab>{index+1}</Tab>
          {/each}
        </TabList>
        {#each weeks as { title, subtitle, homeworks, lessons }, index}
        <TabPanel>
          <div class="flex flex-col p-3 pb-6 md:pb-0">
            <div class="ml-4 md:ml-0 mt-8 md:mt-0">
              <h3 class="text-lg md:text-4xl font-semibold mb-2">Week {index+1}</h3>
              <hr class="w-16 md:w-24 h-1 md:h-2 mb-4 md:mb-8 bg-indigo-300" />
              <h3 class="text-lg md:text-3xl font-semibold md-0 md:mb-2">{title}</h3>
              <h4 class="text-sm md:text-lg mb-4 md:mb-12">{subtitle}</h4>
            </div>
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-4 lessons">
              {#each lessons as { icon, title, content}, index }
              <div class="flex-1 flex flex-row md:flex-col items-start md:items-center lesson-box p-4 md:py-6 mb-4 relative">
                <div class="flex flex-col-reverse md:flex-col items-center mr-6 md:mr-0">
                  <h5 class="{index % 2 === 0 ? 'text-primary' : 'text-indigo-600'} text-xs md:text-lg font-semibold md:mb-4">Lesson{index+1}</h5>
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
      {#each studies as study}
      <div class="flex flex-row items-center gap-3 md:gap-8">
        <div class="relative">
          <h3 class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-lg md:text-4xl font-semibold">{study.title}</h3>
          <svg class="w-10 h-10 md:w-32 md:h-32" width="92" height="84" viewBox="0 0 92 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91.5 27.5629C91.5 39.4253 88.6894 53.4518 82.8787 64.4947C77.0662 75.541 68.3157 83.5 56.4545 83.5C44.3408 83.5 30.2986 82.5529 19.3004 78.6548C13.8047 76.7069 9.10333 74.0338 5.77951 70.4053C2.4659 66.788 0.5 62.199 0.5 56.36C0.5 44.4684 2.27461 30.454 7.04678 19.4326C11.8174 8.41456 19.5225 0.5 31.3636 0.5C43.4764 0.5 58.5714 1.42732 70.6223 5.31124C82.6896 9.20043 91.5 15.9735 91.5 27.5629Z" fill="#FEDDDE" stroke="#FF5685"/>
          </svg>
        </div>
        <p class="mb-0 text-sm md:text-2xl">{@html study.content}</p>
      </div>
      {/each}
    </div>
  </div>
</section>

<section class="pt-8 pb-16 md:py-20 bg-secondary">
  <div class="container mx-auto px-4 md:px-16 text-base lg:text-2xl leading-loose">
    <div class="grid place-items-center">
      <h2 class="text-xl md:text-5xl font-bold my-4 md:my-16">我的来访故事</h2>
    </div>
    <div class="m-0 md:m-4 p-4 md:px-20 md:py-16 cases-box2">
    <Splide class="cases" aria-label="Dr.Penny" options={{
      arrows: false,
    }}
    >
      <SplideSlide>
        <div class="flex flex-row justify-center md:mb-16">
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
        </svg>
          <h3 class="mx-0 md:mx-6 mb-2 text-lg md:text-3xl font-semibold text-primary">张先生和他的太太</h3>
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col md:flex-row gap-x-0 md:gap-x-12 text-xs md:text-xl leading-loose md:leading-loose">
          <div class="md:flex-1">
            <p>很多时候，来访者会和我聊很多他和别人的关系问题，可是因为都是他的视角，所以我并不能确定描述的有多么客观、准确。</p>
            <p>这样的情况下，咨询师通常会更多地参考自己的感受，观察此时此地来访者和自己的关系里正在发生的事情。</p>
            <p>咨询的时候我会一边关注来访者，一边关注自己的感受，并且在适当的时候将自己的感受非常坦诚地分享给对方。</p>
            <p>例如我曾经遇到过一个滔滔不绝的来访者，</p>
          </div>
          <div class="hidden md:block">
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#FF5685" stroke-dasharray="6 6"/>
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
          <path d="M1 0C1 21.0968 17 21.5457 19.5 15.2614C22 8.9771 12.8518 7.63091 12 13.4663C11.1482 19.3017 20.5 29.6254 36.5 26.0344C52.5 22.4434 95.5 28.7277 105 28.7277C114.5 28.7277 117.9 26.0344 125.5 26.0344C135 26.0344 137 30.9721 145 31.8698C153 32.7676 157 28.7277 164.5 28.7277C172 28.7277 173 30.0743 177 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
          <h3 class="mx-0 md:mx-6 mb-2 text-lg md:text-3xl font-semibold text-primary">Esther的婚姻私教项目的收获</h3>
          <svg class="hidden md:block" width="176" height="32" viewBox="0 0 176 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.5 0C176.5 21.0968 160.5 21.5457 158 15.2614C155.5 8.9771 164.648 7.63091 165.5 13.4663C166.352 19.3017 157 29.6254 141 26.0344C125 22.4434 82 28.7277 72.5 28.7277C63 28.7277 59.6 26.0344 52 26.0344C42.5 26.0344 40.5 30.9721 32.5 31.8698C24.5 32.7676 20.5 28.7277 13 28.7277C5.5 28.7277 4.5 30.0743 0.5 31.8698" stroke="#FF5685" stroke-width="2" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div class="w-full flex flex-col md:flex-row gap-x-0 md:gap-x-12 text-xs md:text-xl leading-loose md:leading-relaxed">
          <div class="md:flex-1">
            <p>1、私教课程让我们夫妻双方了解到情绪和依恋模式，最主要的还是情绪方面的知识，因为我最大的问题就在于情绪，给了我们理论基础，了解到我们的情绪都是有原因的，可以被接纳的；</p>
            <p>2、伴侣咨询引导我们正确表达出脆弱和内心的感受，可以使夫妻双方的沟通达到新的深度，让我们更了解对方；</p>
            <p>3、从想离婚到变好，我们其实也经历了四五个月，中间也有争吵，崩溃和怀疑，最终变好是多方面因素共同起作用的，包括</p>
            <p>一、先生的态度，是否让我感觉到有足够的诚意，是否能坚持，从而让我对未来慢慢有信心，</p>
          </div>
          <div class="hidden md:block">
            <svg width="14" height="437" viewBox="0 0 14 437" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0854 1C20.1268 68.2913 1 144.058 1 215.217C1 293.658 10.0854 356.967 10.0853 437" stroke="#FF5685" stroke-dasharray="6 6"/>
            </svg>              
          </div>
          <div class="md:flex-1">
          <p>二、先生是否能真的理解我，明白我情绪的由来，并且接纳，</p>
          <p>三、双方是否还有感情在，</p>
        <p>四、我是否能接纳自己，停止自我攻击，可以多在自己身上投入，多爱自己给予自己信心，</p>
      <p>五、两个人能否找到适合双方的沟通方式，尽量避免互相攻击和争吵，</p>
    <p>六、足够长的时间，去弥补感情的裂痕。</p>
    <p>其实变好不是说能完全忘记伤害，而是让自己更强大和更自信，能带着伤往前走，并且不再害怕伤害，有对感情的追求和信念，不随波逐流。</p>
          </div>
        </div>
      </SplideSlide>
      <div class="splide__arrows" />
    </Splide>
    </div>
  </div>
</section>

<style>
.marriage-bg {
  background-image: url(/images/marriage-bg.avif);
}
@media (min-width: 768px) {
  .marriage-bg {
    background-image: url(/images/marriage-bg.webp);
  }
}

.slove-title {
  background-image: url('/images/slove-title.svg');
}

.slove-box {
  background-image: url(/images/slove-box-red.svg);
  background-size: 100% 100%;
  @apply mr-2 bg-no-repeat;
}
.slove-box:nth-child(even) {
  background-image: url(/images/slove-box-blue.svg);
}

</style>