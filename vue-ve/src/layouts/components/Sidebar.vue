<template>
    <div class="layout-menu-container">
        <!-- Submenu -->
        <SidebarMenu class="layout-menu" :root="true" @menuitem-click="onMenuItemClick"/>
    </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue';
export default {
    props: {
        model: Array
    },
    methods: {
        onMenuItemClick(event){
            this.$emit('menuitem-click', event)
        }
    },
    components: { SidebarMenu }
}
</script>

<style>

</style>
