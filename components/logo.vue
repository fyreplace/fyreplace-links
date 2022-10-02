<template>
  <svg viewBox="0 0 500 500" class="logo">
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#FFB243" />
        <stop offset="100%" stop-color="#FF6243" />
      </linearGradient>
    </defs>
    <path
      d="M 100,500 Q 0,500 0,400 V 50 A 50,50 0 0,1 100,50 V 200 A 50,50 0 0,0 200,200 V 50 A 50,50 0 0,1 300,50 V 200 A 50,50 0 0,0 400,200 V 50 A 50,50 0 0,1 500,50 V 400 Q 500,500 400,500 Z"
      fill="url(#gradient)" />
  </svg>
</template>

<style scoped>
.logo {
  display: none;
}

@media (min-height: 600px) {
  .logo {
    display: unset;
    width: 80px;
    height: 80px;
  }
}
</style>
