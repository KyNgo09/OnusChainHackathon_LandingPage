<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrackIcon from "@/components/TrackIcon.vue";

const { t } = useI18n();

const obj = computed(() => ({
  title: t("competition-structure.title"),
  text: t("competition-structure.sub-description"),
  bullets: [
    {
      title: t("competition-structure.card-title.object1"),
      icon: "student",
      text: t("competition-structure.card-description.object1"),
    },
    {
      title: t("competition-structure.card-title.object2"),
      icon: "startup",
      text: t("competition-structure.card-description.object2"),
    },
    {
      title: t("competition-structure.card-title.object3"),
      icon: "researcher",
      text: t("competition-structure.card-description.object3"),
    },
    {
      title: t("competition-structure.card-title.object4"),
      icon: "business",
      text: t("competition-structure.card-description.object4"),
    },
  ],
}));

const rules = computed(() => [
  {
    title: t("competition-structure.apply-round.title"),
    bullets: [
      t("competition-structure.apply-round.description.point1"),
      t("competition-structure.apply-round.description.point2"),
    ],
  },
  {
    title: t("competition-structure.semifinal-round.title"),
    bullets: [
      t("competition-structure.semifinal-round.description.point1"),
      t("competition-structure.semifinal-round.description.point2"),
    ],
  },
  {
    title: t("competition-structure.final-round.title"),
    bullets: [
      t("competition-structure.final-round.description.point1"),
      t("competition-structure.final-round.description.point2"),
      t("competition-structure.final-round.description.point3"),
      t("competition-structure.final-round.description.point4"),
    ],
  },
  {
    title: t("competition-structure.criteria.title"),
    bullets: [
      t("competition-structure.criteria.description.point1"),
      t("competition-structure.criteria.description.point2"),
      t("competition-structure.criteria.description.point3"),
      t("competition-structure.criteria.description.point4"),
      t("competition-structure.criteria.description.point5"),
    ],
  },
]);
</script>

<template>
  <section
    id="co-cau"
    class="container py-12 sm:py-16 relative rounded-2xl bg-secondary/10"
  >
    <h2
      class="text-[30px] md:text-[40px] text-center font-bold mb-2 text-primary"
    >
      {{ t("competition-structure.title") }}
    </h2>
    <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
    <h3
      class="md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4"
    >
      {{ t("competition-structure.description") }}
    </h3>

    <div class="px-1 md:px-28 pt-6">
      <div class="px-2">
        <h2 class="text-[24px] md:text-[28px] font-bold mb-2">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary"
          >
            {{ t("competition-structure.subtitle") }}
          </span>
        </h2>
        <p class="text-[16px] text-muted-foreground mt-4">
          {{ obj.text }}
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <template v-for="(b, idx) in obj.bullets" :key="idx">
          <div
            :class="[
              'col-span-1',
              Math.floor(idx / 2) % 2 === 0
                ? idx % 2 === 0
                  ? 'sm:col-span-1'
                  : 'sm:col-span-2'
                : idx % 2 === 0
                ? 'sm:col-span-2'
                : 'sm:col-span-1',
            ]"
          >
            <Card
              class="h-full bg-muted/40 dark:bg-card transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50"
            >
              <CardHeader class="p-6 pb-3">
                <div class="flex flex-col gap-3">
                  <div>
                    <TrackIcon :variant="b.icon" :size="52" />
                  </div>
                  <div class="w-full">
                    <CardTitle
                      class="text-[18px] font-semibold text-primary leading-tight"
                    >
                      <span class="block font-bold text-primary uppercase">{{
                        b.title
                      }}</span>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent
                class="text-muted-foreground px-6 pt-0 pb-6 text-sm md:text-[16px]"
              >
                {{ b.text }}
              </CardContent>
            </Card>
          </div>
        </template>
      </div>
    </div>

    <div class="px-1 md:px-28 pt-6">
      <template v-for="r in rules" :key="r.title">
        <div class="mb-8">
          <div class="p-2">
            <h2 class="text-[24px] md:text-[28px] font-bold mb-2">
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#D247BF] to-primary"
              >
                {{ r.title }}
              </span>
            </h2>
          </div>

          <div class="gap-6 px-2">
            <Card
              class="px-2 transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-sm shadow-primary/30 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50"
            >
              <CardContent class="text-muted-foreground p-6">
                <ul
                  class="list-disc pl-5 space-y-2 leading-relaxed text-foreground marker:text-primary text-sm md:text-[16px]"
                >
                  <li v-for="(b, bi) in r.bullets" :key="bi" v-html="b"></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
