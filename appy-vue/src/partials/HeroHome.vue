<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-10 md:pt-40 md:pb-16">

        <!-- Hero content -->
        <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

          <!-- Content -->
          <div class="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
            <h1 class="h1 lg:text-6xl mb-4 font-red-hat-display font-black" data-aos="fade-down">Your website, reimagined</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <!-- CTA form -->
            <form class="mt-8" data-aos="fade-down" data-aos-delay="300">
              <div class="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                <input type="tel" class="form-input w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Phone number" aria-label="Phone number" />
                <a class="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0" href="#0">Request code</a>
              </div>
              <!-- Success message -->
              <!-- <p class="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
            </form>
            <ul class="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2" data-aos="fade-down" data-aos-delay="450">
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Lorem ipsum is placeholder text commonly.</span>
              </li>
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat.</span>
              </li>
              <li class="flex items-center mb-2">
                <svg class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Lorem ipsum is placeholder text commonly.</span>
              </li>
            </ul>
          </div>

          <!-- Mobile mockup -->
          <ModalVideoIphone
            :thumb="VideoThumb"
            :thumbWidth="290"
            :thumbHeight="624"
            thumbAlt="Modal video thumbnail"
            :video="VideoSrc"
            :videoWidth="1920"
            :videoHeight="1080" />

        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import ModalVideoIphone from './ModalVideoIphone.vue'
import VideoThumb from '../images/mockup-image-01.jpg'
import VideoSrc from '../videos/video.mp4'

export default {
  name: 'HeroHome',
  components: {
    ModalVideoIphone
  },
  setup() {
    return {
      VideoThumb,
      VideoSrc,
    }
  }  
}
</script>