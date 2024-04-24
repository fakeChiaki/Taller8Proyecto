<template>
  <div>
    <h2>Editar Nombre</h2>
    <input type="text" v-model="nombreEditado" placeholder="Nombre">
    <button @click="guardarCambios">Guardar Cambios</button>
  </div>
</template>

<script>
export default {
  props: ['nombre'],
  data() {
    return {
      nombreEditado: ''
    };
  },
  methods: {
    guardarCambios() {
      
      console.log("Nombre editado:", this.nombreEditado);
    }
  }
};
</script>