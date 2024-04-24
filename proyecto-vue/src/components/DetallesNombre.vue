<template>
  <div>
    <h2>Detalles del Nombre</h2>
    <p>Nombre: {{ nombre.text }}</p>
    <router-link to="/">Volver</router-link>
  </div>
</template>

<script>
export default {
  props: ['nombre']
};
</script>
