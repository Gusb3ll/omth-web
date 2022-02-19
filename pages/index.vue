<template>
  <main>
    <div id="index_container" class="flex h-screen">
      <div class="m-auto">
        <h1 class="handfont text-white font-thin">
          <b class="lg:text-8xl md:text-7xl text-5xl">Coming soon </b><b class="lg:text-6xl md:text-5xl text-3xl">- Q4 2022</b>
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted () {
    this.indexAnimation()
  },
  methods: {

    indexAnimation () {
      const targetele = document.querySelector('#index_container')
      this.$anime({
        targets: targetele,
        opacity: [0, 1],
        scale: [0.975, 1],
        translateY: [-5, 0],
        duration: 750,
        delay: 1000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        direction: 'alternate',
        duration: 350,
        loop: 4,
        easing: 'easeOutQuint',
        update (anim) {
          targetele.style.filter = 'blur(' + 2 * anim.progress / 50 + 'px)'
        }
      })
    }
  }
}
</script>

<style scoped>
.handfont {
  font-family: 'Ephesis', cursive;
}
h1 {
  pointer-events: none;
  user-select:none;
}
</style>
