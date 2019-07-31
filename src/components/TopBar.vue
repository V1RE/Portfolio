<template>
  <header :class="{fill: (scrolled <= 128)}">
    <div class="headercontent">
      <img class="logo" alt="{...}" src="../assets/Icon.svg" />
      <h1 class="title" :class="{hide: (scrolled <= 300)}">Niels Mentink</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
  data: function() {
    return { scrolled: 0 };
  },
  mounted: function() {
    var topbarthis = this;
    topbarthis.scrolled = window.innerHeight - window.scrollY;
    window.addEventListener("scroll", function(e) {
      topbarthis.scrolled = window.innerHeight - window.scrollY;
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #4030e800;
  color: #fff;
  display: grid;
  grid-template-columns: auto 100% auto;
  grid-template-areas: "header header header";
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media (min-width: 1170px) {
    grid-template-columns: auto 1170px auto;
    grid-template-areas: ". header .";
  }

  @media (max-width: 960px) {
    width: 64px;
    height: 100vh;
    overflow: hidden;
  }

  &.fill {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    background-color: #4030e8ff;

    @media (max-width: 960px) {
      background-color: #4030e800;
      box-shadow: none;
      height: 64px;
    }
  }

  .headercontent {
    grid-area: header;

    .logo {
      height: 34px;
      width: 34px;
      margin: 15px;
      float: left;
      display: block;
    }

    .title {
      font-family: "Roboto Mono", monospace;
      font-size: 20px;
      font-weight: normal;
      line-height: 64px;
      margin: 0;
      float: left;
      display: block;

      @media (max-width: 960px) {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        white-space: nowrap;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);

        &.hide {
          opacity: 0;
        }
      }

      @media (max-width: 302px) {
        opacity: 0;
      }
    }
  }
}
</style>
