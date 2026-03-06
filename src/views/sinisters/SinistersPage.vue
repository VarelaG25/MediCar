<template>
    <div class="container">
        <section class="card flex flex-col gap-6">
            <!-- Encabezado -->
            <div>
                <h1 class="titles">Registro de siniestro automotriz</h1>
                <p class="desc">Por favor, complete los datos del siniestro.</p>
            </div>
            <!-- Contenido principal -->
            <div>
                <UserFilter />
            </div>
            <hr class="text-gray-200">
            <div class="flex flex-col gap-4">
                <UserInformation />
            </div>
            <hr class="text-gray-200">
            <div >
                <SinisterRegister />
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import UserFilter from './composables/userFilter.vue';
import UserInformation from './composables/userInformation.vue';
import SinisterRegister from './composables/sinisterRegister.vue';
</script>