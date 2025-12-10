<script setup lang="ts">
interface Props {
  id: number
  nombre: string
  desbloqueado: boolean
}

const props = defineProps<Props>()

// Emitimos un evento cuando se hace clic
const emit = defineEmits(['select'])

const handleClick = () => {
  if (props.desbloqueado) {
    emit('select', props.id)
  }
}
</script>

<template>
  <div
    class="zone-card"
    :class="{ 'locked': !desbloqueado }"
    @click="handleClick"
  >
    <div class="zone-icon">
      <!-- Puedes usar un ícono genérico o uno por zona -->
      <span v-if="desbloqueado">🟢</span>
      <span v-else>🔒</span>
    </div>
    <h3>{{ nombre }}</h3>
  </div>
</template>

<style scoped>
.zone-card {
  width: 200px;
  padding: 15px;
  margin: 10px;
  border: 2px solid #444;
  border-radius: 10px;
  background-color: #2d2d2d;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.zone-card:hover {
  transform: scale(1.05);
  background-color: #3d3d3d;
}

.zone-card.locked {
  opacity: 0.6;
  cursor: not-allowed;
}

.zone-card.locked:hover {
  transform: none;
  background-color: #2d2d2d;
}

.zone-icon {
  font-size: 24px;
}
</style>