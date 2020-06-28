<template>
    <v-app-bar
            app
            clipped-left
            color="primary"
            dark
    >
        <div class="d-flex align-center">
            <v-app-bar-nav-icon @click="() => drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2 mx-4"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
            />

            <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
            />
        </div>

        <v-spacer></v-spacer>

        <v-btn
                to="/login"
                text
        >
            <span class="mr-2">Login</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn
                to="/register"
                text
        >
            <span class="mr-2">Register</span>
            <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import MixinDrawer from '@/mixins/MixinDrawer';

    export default {
        mixins: [
            MixinDrawer
        ],
        name: "Header"
    }
</script>

<style scoped>

</style>