<template>
  <router-view />
</template>

<script>
import AOS from 'aos'

export default {
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })    
  }
}
</script>
