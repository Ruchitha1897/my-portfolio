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
  AboutSection
  SigilDivider
  ProjectsSection
  SigilDivider
  ExperienceSection
  SigilDivider
  CertificationsSection
  SigilDivider
  SkillsSection 
  SigilDivider
  ResumeSection
  SigilDivider
  BadgesSection
  SigilDivider
  GithubSection
  SigilDivider
  ContactSection
</template>
