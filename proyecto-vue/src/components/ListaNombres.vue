<template>
  <div>
    <h2>Lista de Nombres</h2>
    <ul>
      <li v-for="nombre in nombres" :key="nombre.id">{{ nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['nombres']
};
</script>
