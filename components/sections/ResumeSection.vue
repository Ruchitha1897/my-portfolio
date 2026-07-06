<script setup lang="ts"></script>

<template lang="pug">
section#resume.section.resume
  div.container
    SectionHeading(
      eyebrow="Resume"
      title="One-page summary"
      subtitle="Preview it below, or grab the PDF to keep."
    )

    GlassCard.resume__card(accent="gold" v-reveal)
      div.resume__actions
        BaseButton(variant="primary" :href="profile.resumeFile" target="_blank" icon="download" magnetic)
          | Download Resume
        p.resume__hint
          | Replace
          code  public/resume-placeholder.pdf
          |  with your own file to update this preview.
</template>

<style scoped lang="scss">
.resume__card {
  display: flex;
  flex-direction: column;
  gap: t.$space-6;
  align-items: center;
}

.resume__frame-wrap {
  width: 100%;
  max-width: 640px;
  aspect-ratio: 8.5 / 11;
  border-radius: t.$radius-md;
  overflow: hidden;
  border: 1px solid t.$color-border-strong;
  background: #fff;
}

.resume__frame {
  width: 100%;
  height: 100%;
  border: none;
}

.resume__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: t.$space-3;
  text-align: center;
}

.resume__hint {
  color: t.$color-muted-dim;
  font-size: 0.8125rem;
  max-width: 48ch;

  code {
    color: t.$color-muted;
    background: t.$color-surface-strong;
    padding: 0.1rem 0.4rem;
    border-radius: t.$radius-sm;
    font-size: 0.75rem;
  }
}
</style>
