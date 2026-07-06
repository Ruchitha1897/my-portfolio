<script setup lang="ts"></script>

<template lang="pug">
section#certifications.section.certifications
  div.container
    SectionHeading(
      eyebrow="Certifications"
      title="Certified & credentialed"
      subtitle="Formal credentials that back up hands-on cloud experience — each links to its verifiable record."
    )

    div.certifications__grid
      GlassCard.cert-card(
        v-for="(cert, i) in certifications"
        :key="cert.id"
        accent="gold"
        interactive
        v-reveal="i"
      )
        img.cert-card__badge(v-if="cert.badgeImage" :src="cert.badgeImage" :alt="cert.title" loading="lazy")
        span.cert-card__icon(v-else)
          AppIcon(name="medal" :size="22")
        h3.cert-card__title {{ cert.title }}
        p.cert-card__issuer {{ cert.issuer }} · {{ cert.date }}
        p.cert-card__credential-id(v-if="cert.credentialId") Credential ID: {{ cert.credentialId }}
        BaseButton.cert-card__verify(
          v-if="cert.credentialUrl"
          variant="secondary"
          :href="cert.credentialUrl"
          target="_blank"
          icon="shield"
        ) View My Certificate
</template>

<style scoped lang="scss">
.certifications__grid {
  display: grid;
  gap: t.$space-5;
  grid-template-columns: 1fr;

  @include m.respond(md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.cert-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cert-card__badge {
  width: 88px;
  height: 88px;
  object-fit: contain;
  margin-bottom: t.$space-4;
}

.cert-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.12);
  color: t.$color-gold;
  margin-bottom: t.$space-4;
}

.cert-card__title {
  font-size: 1.05rem;
  color: t.$color-text;
  margin-bottom: t.$space-2;
}

.cert-card__issuer {
  color: t.$color-muted;
  font-size: 0.875rem;
  margin-bottom: t.$space-2;
}

.cert-card__credential-id {
  color: t.$color-muted;
  font-size: 0.8rem;
  margin-bottom: t.$space-5;
  flex-grow: 1;
}

.cert-card__verify {
  font-size: 0.85rem;
}
</style>
