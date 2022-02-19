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
      this.$anime({
        targets: '#index_container',
        opacity: [0, 1],
        duration: 1000,
        delay: 2000,
        easing: 'easeOutQuint'
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
