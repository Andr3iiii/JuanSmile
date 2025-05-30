<template>
  <v-app>
    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import HeaderLayout from "@/components/booking.vue";
import SideBar from "@/components/SideBar.vue";
//
</script>
