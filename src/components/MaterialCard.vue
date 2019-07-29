<template>
  <div class="materialcard" v-on:click="full = !full" :class="{fullscreen: full}">
    <div class="excerpt">
      <slot></slot>
    </div>
    <div class="content" v-if="full">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialCard",
  data: function() {
    return {
      full: false
    };
  }
};
</script>

<style lang="scss" scoped>
.materialcard {
  background-color: #fff;
  font-family: "Roboto Mono", monospace;
  color: #000;
  float: left;
  width: calc(50% - 60px);
  max-width: 1170px;
  padding: 15px;
  margin: 0 15px 30px 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }

  &.fullscreen {
    margin: 0;
    height: calc(100vh - 94px);
    width: calc(100vw - 30px);
    position: absolute;
    top: 64px;
    left: 0;
  }

  .content {
    animation: fade 0.8s ease 0.5s forwards;
    opacity: 0;
    max-width: 0;
    max-height: 0;
  }

  @keyframes fade {
    from {
      opacity: 0;
      max-width: initial;
      max-height: initial;
    }

    to {
      opacity: 1;
      max-width: initial;
      max-height: initial;
    }
  }
}
</style>
