<template>
  <div id="deco_container">
    <!-- <div id="topleft_deco_container" class="absolute left-5 top-5">
      <div class="flex flex-col gap-5">
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.025em]">Link control system</span> : <b class="blink">OFFLINE</b>
        </div>
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.007em]">Core control system</span> : <b class="blink">OFFLINE</b>
        </div>
        <div class="text-sm text-white font-thin">
          <span class="tracking-[-.075em]">Communication system</span> : <b class="blink">OFFLINE</b>
        </div>

        <div class="text-sm text-white font-thin mt-5">
          <span class="tracking-[.030em]">OMTHT Frontend</span> : <b class="blink">OFFLINE</b>
        </div>
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.040em]">OMTHT Backend</span> : <b class="blink">OFFLINE</b>
        </div>
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.000em]">OMTHT Database</span> : <b class="blink">OFFLINE</b>
        </div>
      </div>
    </div>

    <div id="topright_deco_container" class="absolute top-5 right-5">
      <div class="flex flex-col gap-3">
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.025em]">{{ randnum1 }} : {{ randnum2 }} : {{ randnum3 }}</span>
        </div>
      </div>
    </div>

    <div id="botleft_deco_container" class="absolute left-5 bottom-5 z-10">
      <div class="flex flex-col gap-3">
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.025em]">Subject status</span> : <b class="text-green-500">Alive</b>
        </div>
        <div class="text-sm text-white font-thin">
          <span class="tracking-[.015em]">Satellite status</span> : <b class="text-green-500">Alive</b>
        </div>
      </div>
    </div>

    <div id="botright_deco_container" class="absolute right-5 bottom-5 z-10">
      <div class="flex flex-col gap-3">
        <div class="text-sm text-white font-thin">
          <b class="text-red-500">Unknown</b> : <span class="tracking-[.025em]">Core 1 Status</span>
        </div>
        <div class="text-sm text-white font-thin">
          <b class="text-red-500">Unknown</b> : <span class="tracking-[.015em]">Core 2 Status</span>
        </div>
      </div>
    </div> -->

    <div id="deco_wave_container" class="absolute -bottom-1 inset-x-0">
      <vue-wavify mask="url(#mask2)" fill="#1A1A1A" :points="5" :amplitude="25" :speed="0.2">
        <defs>
          <linearGradient id="grad" gradientTransform="rotate(90)">
            <stop offset="0" style="stop-color:white;" />
            <stop offset="0.5" style="stop-color:black;" />
          </linearGradient>
          <mask id="mask2">
            <rect x="0" y="0" width="100vw" height="20vh" fill="url(#grad)" />
          </mask>
        </defs>
      </vue-wavify>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randnum1: '',
      randnum2: '',
      randnum3: ''
    }
  },
  mounted () {
    this.decoAnimation()
    this.textRandom()
  },
  methods: {
    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    decoAnimation () {
      this.$anime({
        targets: '.blink',
        opacity: [1, 0],
        duration: 1000,
        loop: true,
        easing: 'linear'
      })
      this.$anime({
        targets: '#topleft_deco_container',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        delay: 8000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '#topright_deco_container',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1000,
        delay: 8000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '#botleft_deco_container',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        delay: 8000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '#botright_deco_container',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1000,
        delay: 8000,
        easing: 'easeOutQuint'
      })
      this.$anime({
        targets: '#deco_wave_container',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1000,
        delay: 8000,
        easing: 'easeOutQuint'
      })
    },
    textRandom () {
      setInterval(function () {
        this.randnum1 = Math.trunc(Math.random() * 10)
        this.randnum2 = Math.floor(Math.random() * 90) + 10
        this.randnum3 = Math.floor(Math.random() * 90000) + 10000
      }.bind(this), 50)
    }
  }
}
</script>
