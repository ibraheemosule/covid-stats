<template>
  <div class="sm-loader place-items-center p-2">
    <div class="sm-loader-dot"></div>
    <div class="sm-loader-dot"></div>
    <div class="sm-loader-dot"></div>
  </div>
</template>

<style scoped>
.sm-loader {
  @apply inline-flex;
  @apply flex-row;
  @apply items-center;
}
.sm-loader-dot {
  @apply bg-green-700;
  height: 10px;
  @apply mr-2;
  @apply rounded-lg;
  width: 10px;
  animation: zoom-animation 1s infinite;
}
.sm-loader-dot:nth-child(2) {
  animation-delay: 0.15s;
}
.sm-loader-dot:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes zoom-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
