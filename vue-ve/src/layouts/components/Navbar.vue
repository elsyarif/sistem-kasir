<template>
  <div class="layout-topbar">
    <!-- Brand -->
        <router-link to="/" class="layout-topbar-logo">
            <!-- img -->
            <!-- Brand name -->
            <span>Point Of Sale</span>
        </router-link>
    <!-- End brand -->

    <!-- Toggle button -->
    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
        <i class="pi pi-bars"></i>
    </button>
    <!-- End Toggle button -->

    <!-- Button on mobile -->
    <button class="p-link layout-topbar-menu-button layout-topbar-button">
        <i class="pi pi-ellipsis-v"></i>
    </button>
    <!-- End button on mobile -->

    <!-- Right -->
    <div class="layout-topbar-menu hidden lg:flex original-top">
        <Avatar label="S" size="large" shape="circle"/>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event){
            console.log('click', event)
            this.$emit('menu-toggle', event)
        },
        onTopbarMenuToggle(event){
            this.$emit('toopbar-menu-toggle', event)
        }
    }
}
</script>

<style>

</style>
