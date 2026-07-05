<script setup lang="ts"></script>

<template lang="pug">
section#skills.section.skills
  div.container
    SectionHeading(
      eyebrow="Skills"
      title="Tools of the trade"
      subtitle="Languages, frameworks and infrastructure I reach for most, grouped by where they fit in the stack."
    )

    div.skills__grid
      GlassCard.skills__card(
        v-for="(category, i) in skillCategories"
        :key="category.id"
        accent="blue"
        interactive
        v-reveal="i"
      )
        div.skills__card-head
          span.skills__icon
            AppIcon(:name="category.icon" :size="20")
          h3.skills__title {{ category.title }}
        div.skills__list
          SkillMeter(v-for="item in category.items" :key="item.name" :skill="item")
</template>

<style scoped lang="scss">
.skills__grid {
  display: grid;
  gap: t.$space-5;
  grid-template-columns: 1fr;

  @include m.respond(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include m.respond(xl) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skills__card-head {
  display: flex;
  align-items: center;
  gap: t.$space-3;
  margin-bottom: t.$space-5;
}

.skills__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: t.$radius-md;
  background: rgba(212, 175, 55, 0.12);
  color: t.$color-gold;
}

.skills__title {
  font-size: 1.05rem;
  color: t.$color-text;
}

.skills__list {
  display: flex;
  flex-direction: column;
  gap: t.$space-4;
}
</style>
