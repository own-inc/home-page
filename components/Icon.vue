<template>
  <div ref="el" :class="$attrs.class" style="vertical-align: text-bottom" />
</template>

<script lang="ts">
import Vue from 'vue'
import Iconify from '@iconify/iconify'
export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  watch: {
    icon: {
      handler () {
        this.update()
      },
      immediate: true
    }
  },
  methods: {
    update () {
      if (!process.static) { return }
      this.$nextTick(() => {
        const el = this.$refs.el as Element
        if (el) {
          const svg = Iconify.renderSVG(this.icon, {})
          if (svg) {
            el.textContent = ''
            el.appendChild(svg)
          } else {
            const span = document.createElement('span')
            span.className = 'iconify w-full'
            span.dataset.icon = this.icon
            el.textContent = ''
            el.appendChild(span)
          }
        }
      })
    }
  }
})
</script>

<style>
span.iconify {
  background: #5551;
  border-radius: 100%;
  min-width: 1em;
  min-height: 1em;
  display: block;
}
</style>
