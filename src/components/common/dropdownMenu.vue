<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Vue from "vue";
import { CoolSelectPlugin, CoolSelect } from "vue-cool-select";
import "vue-cool-select/dist/themes/bootstrap.css";

Vue.use(CoolSelectPlugin);

library.add(faChevronDown);

export default {
  name: "dropdownMenu",
  components: { CoolSelect },
  data() {
    return {
      // simple example of items
      items: ["All Countries", "Africa", "America", "Asia", "Europe", "Oceania"],
      // there will be a selected item
      selected: null,
    };
  },
};
</script>
<template>
  <div class="w-full shadow rounded ">
    <cool-select
      v-model="selected"
      :items="items"
      item-value:
      placeholder="Filter by Region"
      disable-search
    />
  </div>
</template>
