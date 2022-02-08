<template>
  <main>
    <div id="index_container" class="flex h-screen z-100">
      <div class="m-auto">
        <div class="p-8">
          <h1 class="glitch md:text-5xl text-3xl text-white font-thin" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted () {
    this.textGlitch()
    this.indexAnimation()
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    indexAnimation () {
      this.$anime({
        targets: '#index_container',
        opacity: [0, 1],
        duration: 1000,
        delay: 1500,
        easing: 'easeOutQuint'
      })
    },
    async textGlitch () {
      await this.sleep(1750)
      // eslint-disable-next-line no-undef
      const writer = GlitchedWriter.create('.glitch', 'encrypted', () => {})
      const phrases = ['Embrace this existence', 'Time for new beginning', 'Coming soon - Q4 2022']
      writer.queueWrite(phrases, 1000, false)
    }
  }
}

</script>
