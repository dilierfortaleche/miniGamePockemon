<script setup lang="ts">
import PokemonCard from '../components/PokemonCard.vue'
import { ref } from 'vue'

// Datos de los Pokémon con ataques
const pokemons = [
  {
    nombre: "Pikachu",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    tipo: "Eléctrico",
    ataques: [
      { nombre: "Impactrueno", daño: 40 },
      { nombre: "Trueno", daño: 100 },
      { nombre: "Rayo", daño: 60 }
    ]
  },
  {
    nombre: "Charizard",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    tipo: "Fuego/Volador",
    ataques: [
      { nombre: "Llamarada", daño: 90 },
      { nombre: "Golpe Aéreo", daño: 70 },
      { nombre: "Cola Dragón", daño: 60 }
    ]
  },
  {
    nombre: "Bulbasaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    tipo: "Planta/Veneno",
    ataques: [
      { nombre: "Hoja Afilada", daño: 55 },
      { nombre: "Veneno", daño: 40 },
      { nombre: "Crecimiento", daño: 0 }
    ]
  }
]

// Estado para guardar el Pokémon seleccionado
interface Pokemon {
  nombre: string
  sprite: string
  tipo: string
  ataques: { nombre: string; daño: number }[]
}

const selectedPokemon = ref<Pokemon | null>(null)

// Función para manejar el evento select
const handleSelect = (pokemon: Pokemon) => { // ✅ Aquí tipamos el parámetro
  selectedPokemon.value = pokemon
}
</script>

<template>
  <div class="pokemon-view">
    <h1>Pokémon Cards</h1>

    <!-- Cuadro grande para mostrar detalles -->
    <div class="details-panel">
      <div v-if="selectedPokemon" class="pokemon-details">
        <img :src="selectedPokemon.sprite" :alt="selectedPokemon.nombre" class="detail-sprite" />
        <h2>{{ selectedPokemon.nombre }}</h2>
        <p class="tipo"><strong>Tipo:</strong> {{ selectedPokemon.tipo }}</p>
        <div class="attacks">
          <h3>Ataques:</h3>
          <ul>
            <li v-for="ataque in selectedPokemon.ataques" :key="ataque.nombre">
              {{ ataque.nombre }} - {{ ataque.daño }} de daño
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="placeholder">
        <p>Selecciona un Pokémon para ver sus detalles.</p>
      </div>
    </div>

    <!-- Tarjetas de Pokémon -->
    <div class="card-container">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.nombre"
        :nombre="pokemon.nombre"
        :sprite="pokemon.sprite"
        :tipo="pokemon.tipo"
        :ataques="pokemon.ataques"
        @select="handleSelect"
      />
                <!-- Botón para ir a la página de mapas -->
      <div class="map-button-container">
        <RouterLink to="/zones" class="map-button">Ir al Mapa de Zonas</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-view {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #121212;
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
  /* Ajuste para pantallas pequeñas */
  font-size: 14px;
}

.details-panel {
  width: 80%;
  max-width: 800px;
  min-height: 300px;
  border: 2px solid #444;
  border-radius: 10px;
  padding: 20px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: auto;
  margin: 0 auto;
}

.pokemon-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 100%;
}

.detail-sprite {
  width: 120px;
  height: 120px;
  object-fit: contain;
  object-position: top left;
  background-color: transparent;
}

.pokemon-details h2 {
  font-size: 24px;
  margin: 0;
  color: #fff;
}

.pokemon-details .tipo {
  font-size: 18px;
  color: #aaa;
  margin: 5px 0;
}

.attacks {
  text-align: left;
  width: 100%;
  max-width: 300px;
}

.attacks h3 {
  margin: 10px 0 5px;
  font-size: 16px;
  color: #ccc;
}

.attacks ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.attacks li {
  padding: 8px 12px;
  background-color: #2d2d2d;
  border-radius: 5px;
  margin: 5px 0;
  transition: background-color 0.2s;
}

.attacks li:hover {
  background-color: #3d3d3d;
}

.placeholder p {
  font-size: 16px;
  color: #888;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
}

.map-button-container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.map-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.map-button:hover {
  background-color: #3aa876;
}

/* Responsive para pantallas pequeñas */
@media (max-width: 768px) {
  .details-panel,
  .card-container {
    width: 95%;
  }

  .pokemon-details h2 {
    font-size: 20px;
  }

  .detail-sprite {
    width: 100px;
    height: 100px;
  }

  .attacks h3 {
    font-size: 14px;
  }

  .map-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>