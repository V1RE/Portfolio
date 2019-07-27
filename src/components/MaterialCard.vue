<template>
  <div class="materialcard" v-on:click="full = !full">
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
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
}
</style>
