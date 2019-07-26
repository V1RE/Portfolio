<template>
  <header>
    <div class="headercontent">
      <img class="logo" alt="{...}" src="../assets/Icon.svg" />
      <h1 class="title">Niels Mentink</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #4030e8;
  color: #fff;
  display: grid;
  grid-template-columns: auto 100% auto;
  grid-template-areas: "header header header";

  @media screen {
    grid-template-columns: auto 1170px auto;
    grid-template-areas: ". header .";
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
    }
  }
}
</style>
