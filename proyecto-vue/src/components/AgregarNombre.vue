<template>
  <div>
    <h2>Agregar Nombre</h2>
    <input type="text" v-model="nuevoNombre" placeholder="Nombre">
    <button @click="agregarNombre">Agregar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: ''
    };
  },
  methods: {
    agregarNombre() {
      
      console.log("Nombre agregado:", this.nuevoNombre);
      this.nuevoNombre = ''; 
    }
  }
};
</script>
