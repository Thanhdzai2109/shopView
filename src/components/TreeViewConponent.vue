<template>
  <div class="container">

  </div>
</template>
<script>

 import {DataAll} from "@/js/Data";

 export default {
   components: {

   },
   data() {
     return {
       employees: DataAll.getDataDanhMuc(),
     }
   },
 }

</script>
<style scoped src="@/assets/style/custom.css"></style>