<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

export default {
  name: "searchBar",
  prop: ["searchCountry"],
  data() {
    return {
      searchCountry: this.searchCountry
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.searchCountry);
    },
  },
};
</script>

<template>
  <div
    class="flex flex-row bg-white shadow rounded-lg w-full md:w-2/5 rounded-br-lg border-transparent p-1"
  >
    <div class="p-2">
      <font-awesome-icon icon="search" />
    </div>
    <input
      type="text"
      @input="handleInput"
      class="w-4/5 p-2"
      autocomplete="country"
      placeholder="Search by country"
    />
  </div>
</template>
