<script>
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "../common/loader.vue"
library.add(faArrowLeft);

export default {
  name: "countryDetail",
  components: { Loader },
  data() {
    return {
      countryInfo: null,
      isLoading: false,
      error: null,
      borderedCountries: null,
      countryCode: [],
      countryCodeString: [],
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.country}?fullText=true`
      )
      .then((response) => {
        (this.countryInfo = response.data)
        console.log(this.countryInfo);
        this.countryCode = this.countryInfo[0].borders;
        this.countryCodeString = this.countryCode.join(";");
        // https://restcountries.eu/#api-endpoints-list-of-codes
        return axios
          .get(
            `https://restcountries.eu/rest/v2/alpha?codes=${this.countryCodeString}`
          )
          .then((response) => (this.borderedCountries = response.data))
          .catch((error) => (this.errorBorders = error));
      })
      .catch((error) => (this.error = error))
      .finally(() => {
        this.isLoading = false;
      });
  },
  filters: {
    numToString(value) {
      return `${value.toLocaleString()}`;
    },
  },
};
</script>

<template>
  <div class="h-full p-10 md:px-20">
    <div v-if="this.isLoading"><Loader /></div>
    <button
      @click="$router.go(-1)"
      class="bg-white hover:bg-background-secondary rounded shadow-lg m-8 px-8 bg-background-primary"
    >
      <div class="flex flex-row items-center p-2">
        <font-awesome-icon icon="arrow-left" class="mr-2 text-background-ternary" />
        <div class="text-background-ternary font-semibold">
          Back
        </div>
      </div>
    </button>
    <!-- warning: country stored in array, access [0] or do for loop -->
    <div
      class="flex flex-col lg:flex-row"
      v-for="country in countryInfo"
      v-bind:key="country.id"
    >
      <img
        v-bind:src="country.flag"
        alt="flag"
        class="px-8 h-1/2 lg:w-1/2"
      />
      <div class="p-8 flex flex-col lg:w-1/2">
        <div class="text-background-ternary text-3xl font-bold py-2 pb-4">{{ country.name }}</div>
        <div class="flex flex-col lg:flex-row">
          <div class="py-4 lg:w-1/2 text-background-ternary">
            <div class="py-2">
              <span class="font-semibold">Native Name:</span>
              {{ country.nativeName }}
            </div>
            <div class="py-2">
              <span class="font-semibold">Population:</span>
              {{ country.population | numToString }}
            </div>
            <div class="py-2">
              <span class="font-semibold">Region:</span>
              {{ country.region }}
            </div>
            <div class="py-2">
              <span class="font-semibold">Sub Region:</span>
              {{ country.subregion }}
            </div>
          </div>
          <div class="py-4 lg:w-1/2 text-background-ternary">
            <div class="py-2">
              <span class="font-semibold">Top Level Domain:</span>
              {{ country.topLevelDomain | numToString }}
            </div>
            <div class="py-2 flex flex-wrap">
              <span class="font-semibold">Currencies:</span>
              <div
                class="pl-2 flex flex-wrap"
                v-for="(currency, index) in country.currencies"
                v-bind:key="index"
              >
                {{ currency.name }}
                <div v-if="index + 1 < currency.length">,</div>
              </div>
            </div>
            <div class="py-2 flex flex-wrap">
              <span class="font-semibold">Languages:</span>
              <div
                class="pl-2 flex flex-wrap"
                v-for="(lang, index) in country.languages"
                v-bind:key="index"
              >
                {{ lang.name }}
                <div v-if="index + 1 < country.languages.length">,</div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-4 text-background-ternary">
          <div class="py-2 flex items-center flex-wrap">
            <span class="font-semibold pr-2">Bordered Countries: </span>
            <span
              v-if="countryInfo[0].borders.length === 0"
            >
              No country bordered {{ country.name }} </span
            >
            <div class="flex flex-wrap">
              <button
                v-for="countryBorder in borderedCountries"
                v-bind:key="countryBorder.id"
                class="bg-background-primary hover:bg-background-secondary rounded shadow-lg my-2 mr-2"
              >
                <router-link
                  :to="{
                    name: 'countryDetail',
                    params: { country: countryBorder.name }}"
                >
                  <div class="flex flex-wrap p-1 px-4">
                    <p className="text-left text-lg text-white font-semibold">
                      {{ countryBorder.name }}
                    </p>
                  </div>
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
