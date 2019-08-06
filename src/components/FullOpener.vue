<template>
  <section class="fullopener">
    <div class="dots">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "FullOpener"
};
</script>

<style lang="scss" scoped>
.fullopener {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  height: 100vh;
  width: 100%;

  .dots {
    height: 100vh;
    width: 100%;
    background-image: url("../assets/dot.svg");
    background-position: center;
  }
}
</style>
