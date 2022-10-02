<template>
  <nuxt-link role="button" class="link-button" :to="href">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
})
</script>

<style scoped>
.link-button {
  margin-bottom: 1em;
  padding: 0.5em 1em;
  background: var(--color-accent);
  color: white;
  text-decoration: none;
  border-radius: 0.5em;
  transition: 0.1s;
}

.link-button:hover {
  background: var(--color-accent-hover);
}
</style>
