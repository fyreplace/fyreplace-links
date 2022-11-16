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

<script setup lang="ts">
const route = useRoute()
const showQrCode = computed(() => route.hash.length <= 1)
const destination = computed(() => `fyreplace://${route.path}`)
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
