<script>
export default {
  name: "Card",
  props: {
    img: {
      type: String,
      default: 'http://via.placeholder.com/640x360'
    },
    country: {
      type: String,
      default: 'Country_Name'
    },
    population: [String, Number],
    region: [String],
    capital: [String]
  }
}
</script>

<template>
  <div class="max-w-xl rounded overflow-hidden shadow-lg bg-background-primary">
    <div class="bg-cover bg-center h-48 w-full" v-bind:style="{backgroundImage: `url('${img}')`}" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-background-ternary">{{country}}</div>
      <p class="text-background-ternary text-base">
        Population: {{population}}
      </p>
      <p class="text-background-ternary text-base">
        Region: {{region}}
      </p>
      <p class="text-background-ternary text-base">
        Capital: {{capital}}
      </p>
    </div>
  </div>
</template>
