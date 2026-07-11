<script setup lang="ts">
useSeoMeta({
  title: `${profile.name} — Software Engineer`,
  description: profile.tagline,
  ogTitle: `${profile.name} — Software Engineer`,
  ogDescription: profile.tagline,
})
</script>

<template lang="pug">
div
  HeroSection
  SigilDivider
  AboutSection
  SigilDivider
  ProjectsSection
  SigilDivider
  GithubSection
  SigilDivider
  ContactSection
</template>
