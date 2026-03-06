<template>
    <nav class="bg-white text-black text-lg px-4 py-2 border-b border-gray-200">
        <div class="mx-auto grid grid-cols-[70%_30%] items-center">

            <!-- Título / Logo -->
            <h1 class="titles text-blue-900 font-semibold text-xl">
                MediCar
            </h1>

            <!-- Navegación / Botones -->
            <div class="grid grid-cols-4 gap-2 justify-end">
                <VButton label="Inicio" variant="text" severity="secondary" @click="navegate('')" />
                <VButton label="Siniestros" variant="text" severity="secondary" @click="navegate('sinisters')" />
                <VButton label="Seguimiento" variant="text" severity="secondary" @click="navegate('reports')" />
                <VButton label="Login" severity="info" icon="pi pi-user" @click="navegate('login')" />
            </div>

        </div>
    </nav>
</template>

<script lang="ts" setup>
import VButton from './VButton.vue'

const navegate = (menu: string) => {
    console.log(`Navegando a la sección: ${menu}`)
    location.href = `/${menu.toLowerCase()}`
}
</script>