<template>
  <div class="dropdown">
    <button @click="toggle" class="dropbtn">
      الخدمات
      <span
        ><img
          src="../assets/img/down-arrow.svg"
          alt="test"
          class="mr-1"
          :class="[show ? 'rotate-180' : '']"
      /></span>
    </button>
    <div id="myDropdown" class="dropdown-content" v-if="show">
      <a href="#">رحلة المبتكر التجاري</a>
      <a href="https://fikra.qewamx.com/">أداة اختيار نموذج العمل التجاري</a>
      <a href="#">شهادة المنشأة الابتكارية</a>
      <a href="#">خدمات منظومة الابتكار</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);

function toggle() {
  show.value = !show.value;
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    show.value = false;
  }
};
</script>

<style scoped>
.dropbtn {
  color: #1e1e1e;
  font-size: 16px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  right: -10px;
  background-color: #fff;
  min-width: 220px;
  overflow: auto;
  border-radius: 20px;
  z-index: 110;
  border: 1px solid #1e1e1e25;
  overflow: hidden;
}

.dropdown-content a {
  color: #1e1e1e;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  color: #4882ae;
}

@media (max-width: 950px) {
  .dropbtn {
    margin-top: 20px;
  }
}
</style>
