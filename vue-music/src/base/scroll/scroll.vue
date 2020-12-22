<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: null,
    },
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      let newScroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
      });
    },
  },
};
</script>

<style></style>
