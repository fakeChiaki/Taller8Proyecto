<template>
    <div>
      <lista-nombres :nombres="nombres"></lista-nombres>
    </div>
  </template>
  
  <script>
  import ListaNombres from '@/components/ListaNombres.vue';
  
  export default {
    data() {
      return {
        nombres: [
          { id: 1, text: 'Pepe Cortisona' },
          { id: 2, text: 'El Xokas' },
        ]
      };
    },
    components: {
      ListaNombres
    }
  };
  </script>
  