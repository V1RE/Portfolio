<template>
  <div id="app">
    <TopBar />
    <FullOpener>
      <MaterialCard>
        <InfoCard></InfoCard>
      </MaterialCard>
    </FullOpener>
    <!-- <main>
      <div class="safa">woppa</div>
    </main>-->
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import MaterialCard from "./components/MaterialCard";
import FullOpener from "./components/FullOpener";
import InfoCard from "./components/InfoCard";

export default {
  name: "app",
  components: {
    TopBar,
    MaterialCard,
    FullOpener,
    InfoCard
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  .safa {
    height: 200vh;
  }
}
</style>
