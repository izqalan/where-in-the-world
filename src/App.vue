<template>
  <div id="app" class="flex flex-col h-screen bg-background-secondary" :class="theme">
    <div
      id="nav"
      class="flex flex-row items-center bg-background-primary dark:bg-darkPrimary py-6 px-12 md:px-32 shadow-lg w-full"
    >
      <div class="text-background-ternary font-bold text-sm md:text-2xl w-full">
        <router-link :to="{ name: 'homepage' }"
          >Where in the world?</router-link
        >
      </div>

      <div
        class="w-full mr-3"
      >
        <div class="mr-2 text-background-ternary">
          <div @click.prevent="toggleTheme" class="cursor-pointer font-semibold float-right">
            <font-awesome-icon :icon="icon" /> {{mode}}
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon);
library.add(faCloudSun);
// https://stackoverflow.com/questions/51639850/how-to-change-page-titles-when-using-vue-router
export default {
  name: "App",
  data() {
    return {
      theme: 'theme-light',
      icon: 'moon',
      mode: 'Dark Mode'
    }
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta && to.meta.title  || '';
      },
      immediate: true
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme =='theme-light' ? 'theme-dark' : 'theme-light';
      this.icon = this.icon == 'moon' ? 'cloud-sun' : 'moon';
      this.mode = this.theme == 'theme-light' ? 'Dark Mode' : 'Light Mode'; 
    }
  }
};
</script>
