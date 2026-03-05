<script setup>
import { ref, computed, onMounted } from 'vue'

// State
const cities = ref([])
const pending = ref(true)
const error = ref(null)
const searchQuery = ref('');
const filteredCities = computed(() => {
    return cities.value.filter(city => city.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
});

const processCityData = (data) => {
  return data.map((city) => ({
    ...city,
    population: Number(city.population.replace(/,/g, "")),
  }))
}

const fetchCities = async () => {
  try {
    pending.value = true
    error.value = null
    
    const response = await fetch(
      "https://storage.yandexcloud.net/travel-blog/cities.json",
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    cities.value = processCityData(data)
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
}

const reload = () => fetchCities();
// Lifecycle
onMounted(() => {
  fetchCities()
})
</script>

<template>
    <input v-model="searchQuery" />
    <div v-if="pending">
      Loading cities...
    </div>
    
    <div v-else-if="error" class="error" v-on:click="reload">
      Error loading cities
    </div>
    
    <ul v-else>
        <li v-for="city in filteredCities">{{ city.name }}</li>
    </ul>
</template>