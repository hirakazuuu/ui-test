<script setup lang="ts">
import { defineProps, ref } from 'vue'
import CustomComponent from './CustomComponent.vue'
import CustomComponentWithProps from './CustomComponentWithProps.vue'

defineProps<{
  msg: string
}>()
const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a>
    </h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>{{ count }}</p>
    <CustomComponent />
    <CustomComponentWithProps msg="hoge" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
