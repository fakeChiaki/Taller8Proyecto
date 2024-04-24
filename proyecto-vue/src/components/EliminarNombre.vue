<template>
    <div>
      <h2>Eliminar Nombre</h2>
      <p>¿Estás seguro de que deseas eliminar este nombre?</p>
      <button @click="eliminarNombre">Eliminar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      eliminarNombre() {
        
        console.log("Nombre eliminado");
      }
    }
  };
  </script>