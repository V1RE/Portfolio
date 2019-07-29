<template>
  <main>
    <div class="contentwrapper">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 96px;
  grid-template-columns: auto 100% auto;
  grid-template-areas: "content content content";
  display: grid;

  @media (min-width: 1170px) {
    grid-template-columns: auto 1170px auto;
    grid-template-areas: ". content .";
  }

  .contentwrapper {
    grid-area: content;
  }
}
</style>
