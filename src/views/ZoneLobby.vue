<script setup lang="ts">
import ZoneCard from '../components/ZoneCard.vue'
import { ref } from 'vue'

// Definimos la interfaz para las zonas
interface Zone {
  id: number
  nombre: string
  desbloqueado: boolean
}

// Datos de ejemplo de zonas
const zonas = ref<Zone[]>([
  { id: 1, nombre: "Bosque Verdoso", desbloqueado: true },
  { id: 2, nombre: "Cueva Ígnea", desbloqueado: false },
  { id: 3, nombre: "Costa Tormentosa", desbloqueado: false },
  { id: 4, nombre: "Montaña Helada", desbloqueado: false },
  { id: 5, nombre: "Desierto Ardiente", desbloqueado: false }
])

// Función para manejar el evento select
const handleSelect = (id: number) => {
  console.log(`Zona seleccionada: ${id}`)
  // Desbloqueamos la siguiente zona
  desbloquearSiguiente(id)
}

// Función para desbloquear la siguiente zona
const desbloquearSiguiente = (id: number) => {
  const index = zonas.value.findIndex(z => z.id === id)
  if (index !== -1 && index + 1 < zonas.value.length) {
    // Accedemos al elemento con seguridad
    const siguienteZona = zonas.value[index + 1]
    if (siguienteZona) { // ✅ Verificamos que no sea undefined
      siguienteZona.desbloqueado = true
    }
  }
}
</script>

<template>
  <div class="zone-lobby">
    <h1>Mapa de Zonas</h1>
    <p>Completa cada zona para desbloquear la siguiente.</p>

    <div class="zones-container">
      <ZoneCard
        v-for="zona in zonas"
        :key="zona.id"
        :id="zona.id"
        :nombre="zona.nombre"
        :desbloqueado="zona.desbloqueado"
        @select="handleSelect"
      />
    </div>
  </div>
</template>

<style scoped>
.zone-lobby {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #121212;
  color: white;
}

.zones-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>