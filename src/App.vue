<template>
  <header class=" relative ">
    <NavigationList />
  </header>
  <main class="flex font-sans flex-col-reverse my-1 md:pl-32 md:mr-12 md:flex-row place-content-between gap-4">
    <HeroText />
    <TheHero />
  </main>
</template>

<script setup>
import NavigationList from './components/NavigationList.vue';
import HeroText from './components/HeroText.vue';
import TheHero from './components/TheHero.vue';
</script>