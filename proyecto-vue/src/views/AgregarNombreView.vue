<template>
    <div>
      <form-agregar-nombre @agregar="agregarNombre"></form-agregar-nombre>
    </div>
  </template>
  
  <script>
  import AgregarNombre from '@/components/AgregarNombre.vue';
  
  export default {
    components: {
      AgregarNombre
    },
    methods: {
      agregarNombre(nuevoNombre) {
        const nuevoId = this.nombres.length + 1;
        this.nombres.push({ id: nuevoId, text: nuevoNombre });
      }
    }
  };
  </script>
  