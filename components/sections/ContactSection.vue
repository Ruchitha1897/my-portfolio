<script setup lang="ts">
const form = reactive({ name: '', email: '', message: '' })
const wasSent = ref(false)

// Static site, no backend: the form opens the visitor's mail client
// pre-filled. To collect submissions server-side, swap this handler
// for a service like Formspree — the markup stays the same.
function handleSubmit() {
  const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  wasSent.value = true
}
</script>

<template lang="pug">
section#contact.section.contact
  div.container.contact__grid
    div
      SectionHeading(
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Open to full-time roles, contract work, and interesting collaborations."
      )

      ul.contact__list(v-reveal)
        li.contact__list-item(v-for="link in socialLinks" :key="link.id")
          IconLink(:href="link.url" :icon="link.icon" :label="link.label")
          span {{ link.label }}

      div.contact__resume(v-reveal="1")
        BaseButton(variant="secondary" :href="profile.resumeFile" target="_blank" icon="download")
          | Download Resume

    GlassCard.contact__card(accent="emerald" v-reveal="1")
      form.contact__form(@submit.prevent="handleSubmit")
        v-text-field(
          v-model="form.name"
          label="Name"
          name="name"
          autocomplete="name"
          required
        )
        v-text-field(
          v-model="form.email"
          label="Email"
          name="email"
          type="email"
          autocomplete="email"
          required
        )
        v-textarea(
          v-model="form.message"
          label="Message"
          name="message"
          rows="5"
          required
        )
        BaseButton(type="submit" variant="primary" icon="send" icon-position="right" magnetic)
          | Send Message
        p.contact__sent(v-if="wasSent" role="status")
          AppIcon(name="check" :size="16")
          span Your email app should be opening now.
</template>

<style scoped lang="scss">
.contact__grid {
  display: grid;
  gap: t.$space-8;

  @include m.respond(lg) {
    grid-template-columns: 0.85fr 1.15fr;
  }
}

.contact__list {
  display: flex;
  flex-direction: column;
  gap: t.$space-4;
  margin-bottom: t.$space-6;
}

.contact__list-item {
  display: flex;
  align-items: center;
  gap: t.$space-4;
  color: t.$color-muted;
  font-weight: 600;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: t.$space-3;
}

.contact__sent {
  display: flex;
  align-items: center;
  gap: t.$space-2;
  color: t.$color-emerald-soft;
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
