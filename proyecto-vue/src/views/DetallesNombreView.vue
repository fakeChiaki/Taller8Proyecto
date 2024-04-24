<template>
    <div>
      <detalles-nombre :nombre="nombre"></detalles-nombre>
    </div>
  </template>
  
  <script>
  import DetallesNombre from '@/components/DetallesNombre.vue';
  
  export default {
    props: ['nombre'],
    components: {
      DetallesNombre
    }
  };
  </script>
  