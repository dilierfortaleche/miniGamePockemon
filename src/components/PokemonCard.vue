<script setup lang="ts">
interface Props {
  nombre: string
  sprite: string
  tipo: string
  ataques?: { nombre: string; daño: number }[]
}

const props = defineProps<Props>()
const emit = defineEmits(['select'])

const handleClick = () => {
  emit('select', {
    nombre: props.nombre,
    sprite: props.sprite,
    tipo: props.tipo,
    ataques: props.ataques || []
  })
}
</script>

<template>
  <div class="pokemon-card" @click="handleClick">
    <img :src="props.sprite" :alt="props.nombre" />
    <h2>{{ props.nombre }}</h2>
    <p class="tipo">{{ props.tipo }}</p>
  </div>
</template>

<style scoped>
.pokemon-card {
  border: 2px solid #444;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  background-color: #2d2d2d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 150px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.pokemon-card:hover {
  transform: scale(1.05);
  background-color: #3d3d3d;
}

.pokemon-card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}

.pokemon-card h2 {
  font-size: 16px;
  margin: 0;
  color: #fff;
}

.pokemon-card .tipo {
  font-size: 14px;
  color: #aaa;
  margin: 5px 0 0;
}
</style>