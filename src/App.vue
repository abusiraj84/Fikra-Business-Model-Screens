<template>
  <div class="flex flex-col min-h-screen w-full">
    <the-header />
    <router-view class="flex-grow w-full" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";
import TheFooter from "./layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
ul li .router-link-exact-active {
  color: #4882ae !important;
  border-bottom: 3px solid #4882ae;
  margin-bottom: -3px;
  transition: all 0.3s ease-in-out;
}
ul li a:hover {
  color: #4882ae;
  border-bottom: 3px solid #4882ae;
  margin-bottom: -3px;
  transition: all 0.3s ease-in-out;
}
ul li:hover {
  color: #285679;
  transition: all 0.2s ease-in-out;
}
.dropdown button:hover {
  transition: all 0.2s ease-in-out;
  color: #285679 !important;
}
.dropdown a:hover {
  transition: all 0.2s ease-in-out;
  color: #285679;
  border-bottom: 0px !important;
}
</style>
<style scoped>
.flex-grow {
  flex: 1 0 auto;
}
</style>
