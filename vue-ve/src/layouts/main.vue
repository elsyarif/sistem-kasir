<template>
<div :class="containerClass" @click="onWrapperClick">
    <Header @menu-toggle="onMenuToggle"/>
    <div class="layout-sidebar" @click="onSidebarClick">
        <Sidebar />
    </div>

    <div class="layout-main-container">
        <div class="layout-main">
            <div class="grid">
                <h1>Main</h1>
            </div>
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import Header from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
    data(){},
    methods: {
        onWrapperClick(){
            if(!this.menuClick){
                this.overlayMenuActive = false
                this.mobileMenuActive = false
            }

            this.menuClick = false
        },
        onMenuToggle(){
            this.menuClick = true

            if(this.isDesktop()){
                if(this.layoutMode === 'overlay'){
                    if(this.mobileMenuActive === true){
                        this.overlayMenuActive = true
                    }

                    this.overlayMenuActive = !this.overlayMenuActive
                    this.mobileMenuActive = false
                }else if (this.layoutMode === 'static'){
                    this.staticMenuInactive = !this.staticMenuInactive
                }
            }else{
                this.mobileMenuActive = !this.mobileMenuActive
            }

            event.preventDefault()
        },
        onSidebarClick(){
            this.menuClick = true
        },
        onMenuitemClick(event){
            if(event.item && !event.items){
                this.overlayMenuActive = false
                this.mobileMenuActive = false
            }
        },
        addClass(elemet, className){
            if(elemet.classList){
                elemet.classList.add(className)
            }else{
                elemet.className += '' + className
            }
        },
        removeClass(elemet, className){
            if(elemet.classList){
                elemet.classList.remove(className)
            }else{
                elemet.className = elemet.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), '');
            }
        },
        isDesktop(){
            return window.innerWidth >= 992
        },
        isSidebarVisible(){
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }

            return true;
        }
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
				'p-input-filled': this.$primevue.config.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
    },
    components: {
        'Header': Header,
        'Sidebar': Sidebar
    }
}
</script>
