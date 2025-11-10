<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Trophy, Calendar } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const timelineRounds = computed(() => [
  {
    title: t("schedules.apply-round.title"),
    icon: FileText,
    iconColor: "text-blue-400",
    step: 1,
    border: "border-blue-400",
    milestones: [
      {
        date: t("schedules.apply-round.kickoff-card.date"),
        description: t("schedules.apply-round.kickoff-card.description"),
      },
      {
        date: t("schedules.apply-round.registration-card.date"),
        description: t("schedules.apply-round.registration-card.description"),
      },
      {
        date: t("schedules.apply-round.participation-card.date"),
        description: t("schedules.apply-round.participation-card.description"),
      },
      {
        date: t("schedules.apply-round.announcement-card.date"),
        description: t("schedules.apply-round.announcement-card.description"),
      },
      {
        date: t("schedules.apply-round.pitching-card.date"),
        description: t("schedules.apply-round.pitching-card.description"),
      },
    ],
  },
  {
    title: t("schedules.semifinal-round.title"),
    icon: Users,
    iconColor: "text-purple-400",
    step: 2,
    border: "border-purple-400",
    milestones: [
      {
        date: t("schedules.semifinal-round.meeting-card.date"),
        description: t("schedules.semifinal-round.meeting-card.description"),
      },
      {
        date: t("schedules.semifinal-round.course-card.date"),
        description: t("schedules.semifinal-round.course-card.description"),
      },
      {
        date: t("schedules.semifinal-round.pitching-card.date"),
        description: t("schedules.semifinal-round.pitching-card.description"),
      },
      {
        date: t("schedules.semifinal-round.mentoring-card.date"),
        description: t("schedules.semifinal-round.mentoring-card.description"),
      },
    ],
  },
  {
    title: t("schedules.final-round.title"),
    icon: Trophy,
    iconColor: "text-yellow-400",
    step: 3,
    border: "border-yellow-400",
    milestones: [
      {
        date: t("schedules.final-round.pitching-card.date"),
        description: t("schedules.final-round.pitching-card.description"),
      },
      {
        date: t("schedules.final-round.final-card.date"),
        description: t("schedules.final-round.final-card.description"),
      },
    ],
  },
]);

const keyMilestones = computed(() => [
  {
    title: t("schedules.key-milestones.start-card.title"),
    date: t("schedules.key-milestones.start-card.date"),
    highlight: false,
  },
  {
    title: t("schedules.key-milestones.expired-registrations-card.title"),
    date: t("schedules.key-milestones.expired-registrations-card.date"),
    highlight: true,
  },
  {
    title: t("schedules.key-milestones.final-date.title"),
    date: t("schedules.key-milestones.final-date.date"),
    highlight: false,
  },
]);
</script>

<template>
  <section
    id="lich-trinh"
    class="container py-24 sm:py-32 rounded-2xl bg-secondary/10"
  >
    <div class="text-center mb-4 px-4 md:px-32">
      <h2
        class="text-[28px] md:text-[40px] text-center font-bold mb-2 text-primary"
      >
        {{ t("schedules.title") }}
      </h2>
      <div class="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
      <h3
        class="md:w-2/3 lg:w-1/2 mx-auto text-lg md:text-[24px] text-center text-muted-foreground my-4"
      >
        {{ t("schedules.description") }}
      </h3>
    </div>
    <div class="flex flex-col max-w-5xl mx-auto gap-8">
      <template v-for="round in timelineRounds" :key="round.title">
        <Card
          :class="[
            'bg-background/50 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20',
            round.border,
          ]"
        >
          <CardHeader
            class="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 sm:p-6"
          >
            <component
              :is="round.icon"
              :class="[round.iconColor, 'w-6 h-6 sm:w-8 sm:h-8']"
              stroke-width="2.4"
            />
            <CardTitle class="text-[18px] sm:text-[20px] font-bold">
              {{ round.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="p-4 md:p-6 pt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="milestone in round.milestones"
                :key="milestone.description"
                class="group flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-background/5 border border-gray-700/10 transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <Calendar
                  class="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-0 text-muted-foreground flex-shrink-0 transition-colors duration-300 group-hover:text-primary"
                />
                <div>
                  <div
                    class="font-medium transition-colors duration-300 group-hover:text-primary text-sm sm:text-[15px]"
                  >
                    {{ milestone.date }}
                  </div>
                  <div class="text-sm sm:text-[15px] text-muted-foreground">
                    {{ milestone.description }}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </template>

      <Card class="mt-4 border-teal-500">
        <CardHeader>
          <CardTitle class="text-[24px] text-center text-primary font-bold">
            {{ t("schedules.key-milestones.title") }}
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-2 pb-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div v-for="km in keyMilestones" :key="km.title">
              <div class="text-sm sm:text-[16px] text-muted-foreground">
                {{ km.title }}
              </div>
              <div
                :class="[
                  'text-[20px] sm:text-[20px] font-bold mt-1',
                  km.highlight ? 'text-red-400' : '',
                ]"
              >
                {{ km.date }}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
