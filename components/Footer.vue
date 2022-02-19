<template>
  <div id="footer_container" class="fixed inset-x-0 bottom-5">
    <h1 class="text-white text-sm text-center font-thin opacity-80">
      @ 2022 <b>Gusbell</b>
    </h1>
  </div>
</template>

<script>
export default {
  mounted () {
    this.footerAnimation()
  },
  methods: {
    footerAnimation () {
      this.$anime({
        targets: '#footer_container',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 1500,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>

<style scoped>
#footer_container {
  pointer-events: none;
}
</style>
