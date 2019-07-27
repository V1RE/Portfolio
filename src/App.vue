<template>
  <div id="app">
    <TopBar />
    <MaterialCard>
      test
      <template v-slot:content>Dit is echt zieke content</template>
    </MaterialCard>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import MaterialCard from "./components/MaterialCard";

export default {
  name: "app",
  components: {
    TopBar,
    MaterialCard
  }
};
</script>

<style lang="scss">
.materialcard {
  top: 100px;
  position: absolute;
}
</style>
