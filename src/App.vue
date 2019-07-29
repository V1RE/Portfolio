<template>
  <div id="app">
    <TopBar />
    <MainLayout>
      <MaterialCard>
        Hallo
        <template v-slot:content>Dit is echt zieke content</template>
      </MaterialCard>
      <MaterialCard>
        te
        <br />st
        <template v-slot:content>Dit is echt zieke content</template>
      </MaterialCard>
      <MaterialCard>
        wederom een leuke test hoor
        <template v-slot:content>Dit is echt zieke content</template>
      </MaterialCard>
    </MainLayout>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import MaterialCard from "./components/MaterialCard";
import MainLayout from "./components/MainLayout";

export default {
  name: "app",
  components: {
    TopBar,
    MaterialCard,
    MainLayout
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
