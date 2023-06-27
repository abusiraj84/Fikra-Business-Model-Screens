<template>
  <div>
    <the-header />
    <router-view />
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
  color: #4882ae !important;
  border-bottom: 3px solid #4882ae;
  margin-bottom: -3px;
  transition: all 0.3s ease-in-out;
}
ul li:hover {
  color: #285679 !important;
  transition: all 0.2s ease-in-out;
}
.dropdown button:hover {
  transition: all 0.2s ease-in-out;
  color: #285679 !important;
}
.dropdown a:hover {
  transition: all 0.2s ease-in-out;
  color: #285679 !important;
  border-bottom: 0px !important;
}
</style>
