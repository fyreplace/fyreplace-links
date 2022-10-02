<template>
  <img ref="image" class="qr-code" :src="imageSource" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: {
      type: String,
      default: null
    }
  },

  computed: {
    imageSource(): string {
      return "https://api.qrserver.com/v1/create-qr-code/?size=300x300&qzone=2&data=" + encodeURIComponent(this.href)
    }
  },
})
</script>

<style scoped>
.qr-code {
  width: 300px;
  height: 300px;
}

@media (prefers-color-scheme: light) {
  .qr-code {
    box-shadow: gray 0 0 10px;
  }
}

@media (min-width: 600px) and (min-height: 600px) {
  .qr-code {
    margin-top: 10px;
    border-radius: 10px;
    background: white;
  }
}
</style>
