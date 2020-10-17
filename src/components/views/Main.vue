<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import SearchBar from "../common/searchBar";
// import Dropdown from "../common/dropdownMenu";
import Card from "../common/card";
import Loader from "../common/loader"
import Vue from "vue";
import { CoolSelectPlugin, CoolSelect } from "vue-cool-select";
// import "vue-cool-select/dist/themes/bootstrap.css";
import "../../styles/dropdown.css"
import axios from "axios";

Vue.use(CoolSelectPlugin);
library.add(faSearch);

export default {
  name: "Main",
  components: {
    Card,
    CoolSelect,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      countryInfo: null,
      error: null,
      search: "",
      region: "",
      items: [
        "All Countries",
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
      ],
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => (this.countryInfo = response.data))
      .catch((e) => (this.error = e))
      .finally(() => {
        this.isLoading = false;
        console.log(this.countryInfo);
      });
  },
  computed: {
    filteredCountries: function() {
      return this.countryInfo.filter((country) => {
        if (this.region === "" || this.region === "All Countries") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else if (this.search !== "") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else {
          return country.region.match(this.region);
        }
      });
    },
  },
  filters: {
    numberToString(value) {
      return `${value.toLocaleString()}`;
    },
  },
};
</script>

<template>
  <div class="p-10 md:px-20">
    <div class="flex flex-col">
      <div class="px-4 lg:px-12 flex flex-col lg:flex-row w-full lg:items-center mr-10 my-2">
        <div class="w-full ">
          <div
            class="flex flex-row bg-background-primary shadow rounded-lg w-full md:w-2/5 rounded-br-lg border-transparent p-1"
          >
            <div class="p-2">
              <font-awesome-icon class="text-background-ternary" icon="search" />
            </div>
            <input
              type="text"
              v-model="search"
              class="w-4/5 p-2 bg-background-primary text-background-ternary"
              placeholder="Search by country"
            />
          </div>
        </div>
        <div class="lg:float-right w-3/5 md:w-1/5 py-8 lg:py-0">
          <div class="w-full cursor-pointer shadow rounded bg-background-primary">
            <cool-select
              v-model="region"
              :items="items"
              item-value:
              placeholder="Filter by Region"
              disable-search
            />
          </div>
        </div>
      </div>
      <div v-if="this.isLoading"><Loader /></div>
      <div v-if="countryInfo" class="flex flex-wrap lg:h-70-vh nobar lg:overflow-y-scroll">
        <div
          v-for="country in filteredCountries"
          v-bind:key="country.id"
          class="p-4 lg:p-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 transition duration-200 ease-in"
        >
          <router-link
            :to="{ name: 'countryDetail', params: { country: country.name } }"
          >
            <transition>
              <Card
                v-bind:img="country.flag"
                v-bind:country="country.name"
                v-bind:population="country.population | numberToString"
                v-bind:region="country.region"
                v-bind:capital="country.capital"
              />
            </transition>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.nobar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.nobar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>
