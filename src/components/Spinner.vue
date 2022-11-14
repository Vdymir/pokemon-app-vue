<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "spinner",
};
</script>

<style scoped>
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinner {
  width: 5rem;
  height: 5rem;
  border: 5px solid rgb(0, 160, 147);
  border-radius: 50px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  animation: spinner infinite 1s linear;
  margin: auto;
}
</style>