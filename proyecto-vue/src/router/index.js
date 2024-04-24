import Vue from 'vue';
import VueRouter from 'vue-router';
import AgregarNombreView from '@/views/AgregarNombreView.vue';
import DetallesNombreView from '@/views/DetallesNombreView.vue';
import EditarNombreView from '@/views/EditarNombreView.vue';
import ListaNombresView from '@/views/ListaNombresView.vue';
import EliminarNombreView from '@/views/EliminarNombreView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/agregar', component: AgregarNombreView },
  { path: '/detalles', component: DetallesNombreView },
  { path: '/editar', component: EditarNombreView },
  { path: '/lista', component: ListaNombresView },
  { path: '/eliminar', component: EliminarNombreView }
];

const router = new VueRouter({
  routes
});

export default router;
