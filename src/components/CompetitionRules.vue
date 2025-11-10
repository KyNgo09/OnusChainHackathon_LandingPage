<script setup lang="ts">
import { ref } from "vue";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TrackIcon from "@/components/TrackIcon.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const tabs = computed(() => [
  t("competition-rules.benefit-responsibility.title"),
  t("competition-rules.disciplinary-measures.title"),
]);
const active = ref(0);

const benefits_responsibilities = computed(() => [
  {
    title: t("competition-rules.benefit-responsibility.benefit.title"),
    items: [
      t("competition-rules.benefit-responsibility.benefit.point1"),
      t("competition-rules.benefit-responsibility.benefit.point2"),
      t("competition-rules.benefit-responsibility.benefit.point3"),
      t("competition-rules.benefit-responsibility.benefit.point4"),
      t("competition-rules.benefit-responsibility.benefit.point5"),
    ],
  },
  {
    title: t("competition-rules.benefit-responsibility.responsibility.title"),
    items: [
      t("competition-rules.benefit-responsibility.responsibility.point1"),
      t("competition-rules.benefit-responsibility.responsibility.point2"),
      t("competition-rules.benefit-responsibility.responsibility.point3"),
      t("competition-rules.benefit-responsibility.responsibility.point4"),
      t("competition-rules.benefit-responsibility.responsibility.point5"),
      t("competition-rules.benefit-responsibility.responsibility.point6"),
      t("competition-rules.benefit-responsibility.responsibility.point7"),
    ],
  },
]);

const sanctions = computed(() => [
  {
    title: t("competition-rules.disciplinary-measures.warning.title"),
    items: [
      t("competition-rules.disciplinary-measures.warning.point1"),
      t("competition-rules.disciplinary-measures.warning.point2"),
    ],
  },
  {
    title: t("competition-rules.disciplinary-measures.reprimand.title"),
    items: [
      t("competition-rules.disciplinary-measures.reprimand.point1"),
      t("competition-rules.disciplinary-measures.reprimand.point2"),
    ],
  },
  {
    title: t("competition-rules.disciplinary-measures.point-deduction.title"),
    items: [
      t("competition-rules.disciplinary-measures.point-deduction.point1"),
      t("competition-rules.disciplinary-measures.point-deduction.point2"),
    ],
  },
  {
    title: t("competition-rules.disciplinary-measures.disqualification.title"),
    items: [
      t("competition-rules.disciplinary-measures.disqualification.point1"),
      t("competition-rules.disciplinary-measures.disqualification.point2"),
    ],
  },
]);

function getVariant(title: string) {
  const t = (title || "").toLowerCase();
  if (t.includes("quy") || t.includes("quyền") || t.includes("benefit"))
    return "benefit";
  return "responsibility";
}
</script>

<template>
  <section
    id="quy-che"
    class="container py-12 sm:py-16 rounded-2xl bg-secondary/10"
  >
    <div class="text-center mb-4 px-4 md:px-32">
      <h2
        class="text-[28px] md:text-[40px] text-center font-bold mb-2 text-primary"
      >
        {{ t("competition-rules.title") }}
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3
        class="mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4"
      >
        {{ t("competition-rules.description") }}
      </h3>
    </div>

    <div class="max-w-5xl mx-auto mt-12">
      <Card
        :class="[
          'bg-card',
          active !== null
            ? 'ring-1 ring-primary-500 ring-offset-2 ring-offset-background shadow-xl shadow-primary/30'
            : '',
        ]"
      >
        <CardHeader class="py-0">
          <div class="p-0 flex flex-col items-center mt-[-20px]">
            <div
              class="flex flex-wrap justify-center gap-2 mb-4 bg-background ring-1 rounded-sm ring-primary-500 ring-offset-2 ring-offset-background p-0"
            >
              <button
                v-for="(t, i) in tabs"
                :key="t"
                @click="active = i"
                :aria-pressed="active === i"
                :class="[
                  'px-3 py-2 rounded-md text-[13px] sm:text-[14px] font-medium text-destructive text-center whitespace-normal',
                  active === i
                    ? 'bg-gradient-to-r from-[#D247BF] to-primary shadow-md text-white'
                    : 'bg-transparent text-muted-foreground hover:text-primary',
                ]"
              >
                {{ t }}
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent class="p-6 py-0">
          <div
            class="flex flex-col md:flex-row items-center gap-2 relative"
            v-if="active === 0"
          >
            <div
              :class="[
                'flex-1',
                'bg-background/5 dark:bg-background/10 p-4 rounded-lg',
              ]"
            >
              <div
                v-for="(con, idx) in benefits_responsibilities"
                :key="idx"
                class="pb-4"
              >
                <div class="flex items-center gap-3 mb-2">
                  <TrackIcon :variant="getVariant(con.title)" :size="36" />
                  <h4 class="font-bold text-[20px] text-primary uppercase pb-2">
                    {{ con.title }}
                  </h4>
                </div>
                <ul
                  class="list-disc pl-5 space-y-1 text-justify text-sm md:text-[16px] leading-relaxed text-foreground marker:text-primary"
                >
                  <li v-for="(item, idx) in con.items" :key="idx">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row items-center gap-2 relative"
            v-else
          >
            <div class="flex-shrink-0">
              <img
                :src="`runner.png`"
                alt="Hình minh họa hình thức kỷ luật"
                class="w-[120px] md:w-[220px] lg:w-[280px] mx-auto -scale-x-100 animate-floating"
              />
            </div>
            <div
              :class="[
                'flex-1',
                'bg-background/5 dark:bg-background/10 p-4 rounded-lg',
              ]"
            >
              <div>
                <ul class="space-y-4 text-justify">
                  <li
                    v-for="(item, idx) in sanctions"
                    :key="idx"
                    class="flex items-start gap-4"
                  >
                    <div class="flex-none mt-1">
                      <span
                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 shadow-md text-white font-semibold"
                      >
                        {{ idx + 1 }}
                      </span>
                    </div>
                    <div class="flex-1">
                      <div class="text-[16px] font-semibold text-primary">
                        {{ item.title }}
                      </div>
                      <div>
                        <ul
                          class="list-disc pl-5 space-y-1 text-justify text-sm md:text-[16px] leading-relaxed text-foreground marker:text-primary"
                        >
                          <li v-for="(it, idt) in item.items" :key="idt">
                            {{ it }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="z-100 absolute left-22 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl"
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-floating {
  animation: floating 3s ease-in-out infinite;
}
</style>
