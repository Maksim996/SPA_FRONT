<template>
    <v-row
            align="center"
            justify="center"
    >
        <v-col
                cols="12"
                sm="8"
                md="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>{{$t('t.register')}}</v-toolbar-title>
                    <v-spacer></v-spacer>

                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                                :label="$t('t.name')"
                                name="name"
                                prepend-icon="mdi-account"
                                type="text"
                        ></v-text-field>
                        <v-text-field
                                :label="$t('t.login')"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                        ></v-text-field>

                        <v-text-field
                                id="password"
                                :label="$t('t.password')"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">{{ $t('t.register') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>