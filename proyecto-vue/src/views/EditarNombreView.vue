<template>
    <div>
      <editar-nombre :nombre="nombre"></editar-nombre>
    </div>
  </template>
  
  <script>
  import EditarNombre from '@/components/EditarNombre.vue';
  
  export default {
    props: ['nombre'],
    components: {
      EditarNombre
    }
  };
  </script>
  