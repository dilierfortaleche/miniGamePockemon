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
const selectedPokemon = ref(null)

// Función para manejar el evento select
const handleSelect = (pokemon) => {
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
  height: 100vh;
  background-color: #121212;
  color: white;
  overflow: hidden; /* Evita scroll general */
}

.details-panel {
  width: 80%; /* Ocupa el 80% del ancho */
  max-width: 800px; /* Ancho máximo para pantallas grandes */
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
  margin: 0 auto; /* Centra el panel horizontalmente */
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
  object-fit: contain; /* Muestra toda la imagen */
  object-position: top left; /* ¡Aquí está la clave! */
  background-color: #fff; /* Fondo blanco opcional */
  margin-top: 130px;
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
  margin: 0 auto; /* Centra el contenedor de tarjetas */
  width: 80%; /* Ocupa el 80% del ancho */
  max-width: 800px; /* Ancho máximo */
}

/* Responsive para pantallas pequeñas */
@media (max-width: 768px) {
  .details-panel,
  .card-container {
    width: 95%;
  }
}
</style>