<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Schedule from "./components/Schedules.vue";
import CompetitionTracks from "./components/CompetitionTracks.vue";
import CompetitionStructure from "./components/CompetitionStructure.vue"
import HowItWorks from "./components/CompetitionRules.vue";
// import Sponsors from "./components/Sponsors.vue";
import Reward from "./components/Rewards.vue";
import OrgPart from "./components/Organizers-Partners.vue";
// import Pricing from "./components/Pricing.vue";
// import Community from "./components/Community.vue";
// import Contact from "./components/Contact.vue";
// import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <!-- <Sponsors /> -->
  <About />
  <OrgPart />
  <CompetitionStructure />
  <CompetitionTracks />
  <HowItWorks />
  <Reward />
  <Schedule />
  <!-- <Community /> -->
  <!-- <Pricing /> -->
  <!-- <Contact />
  <FAQ /> -->
  <!-- <FAQ /> -->
  <Footer />
</template>
