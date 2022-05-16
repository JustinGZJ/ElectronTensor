<template>
  <v-card
    class="mx-auto"
    color="grey lighten-4"
    min-width="300"
    max-width="500"
  >
    <v-card-title>
      <v-icon
        :color="checking ? 'red lighten-2' : 'indigo'"
        class="mr-12"
        size="64"
        @click="takePulse"
      >
        mdi-heart-pulse
      </v-icon>
      <v-row align="start">
        <div class="caption grey--text text-uppercase">{{ title }}</div>
        <div>
          <span class="display-2 font-weight-black" v-text="avg || '—'"></span>
          <strong v-if="avg">g</strong>
        </div>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn icon class="align-self-start" @click="goDetail" size="28">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :key="String(avg)"
        :smooth="10"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="tensionvalues"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-sheet>
  </v-card>
</template>

<script>
const exhale = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

export default {
  name: 'TensionChart',
  props: {
    title: {
      type: String,
      default: 'tensor'
    }
  },
  data: () => ({
    checking: false,
    tensionvalues: []
  }),
  computed: {
    avg () {
      const sum = this.tensionvalues.reduce((acc, cur) => acc + cur, 0)
      const length = this.tensionvalues.length

      if (!sum && !length) return 0

      return Math.ceil(sum / length)
    }
  },

  created () {
    this.takePulse(false)
  },

  methods: {
    tensionvalue () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    },
    async takePulse (inhale = true) {
      this.checking = true

      inhale && await exhale(1000)

      this.tensionvalues = Array.from({ length: 20 }, this.tensionvalue)

      this.checking = false
    },
    goDetail () {
      this.$router.push(`/detail/${this.title}`)
    }
  }
}
</script>
