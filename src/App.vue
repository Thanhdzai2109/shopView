<template>
  <div id="app">
    <div class="row">
      <header-component></header-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";

export default {
  name: "app",
  components: { HeaderComponent},
};
</script>

