<template>
  <main class="page">
    <logo />
    <h1>This link should be opened in the Fyreplace app</h1>
    <p>
      Do you have the app installed, and is it up to date?
      <br />
      If so, try this button<span v-if="showQrCode" class="fp-hidden-small-device">
        (or scan the QR code below)</span>:
    </p>
    <link-button :href="destination">Open link in the app</link-button>
    <qr-code v-if="showQrCode" class="fp-hidden-small-device" :href="destination" />

    <Head>
      <Title>Fyreplace</Title>
    </Head>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    showQrCode(): boolean {
      return this.$route.hash.length <= 1
    },

    destination(): string {
      return `fyreplace://${this.$route.path}`
    }
  }
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
