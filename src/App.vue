<template>
    <v-app>
        <v-navigation-drawer app temporary v-model="drawer">
            <v-list>
                <v-list-tile
                        v-for="link of links"
                        :key="link.url"
                        :to="link.url"
                >
                    <v-list-tile-action>
                        <v-icon>{{ link.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title v-text="link.title"></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>

                <v-list-tile @click="onLogOut"
                             v-if="isUserLogIn"
                >
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon
                    class="hidden-md-and-up"
                    @click="drawer = !drawer"/>
            <v-toolbar-title>
                <router-link tag="span" class="pointer" to="/">
                    Add project
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="link of links"
                        :key="link.url"
                        :to="link.url"
                        flat>
                    <v-icon left>{{link.icon}}</v-icon>
                    {{ link.title }}
                </v-btn>
                <v-btn @click="onLogOut"
                       v-if="isUserLogIn"
                       flat>
                    <v-icon left>exit_to_app</v-icon>
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>

        <v-snackbar
                :value="!!error"
                :timeout="4000"
                top
                right
        >
            {{ error }}
            <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>

    export default {
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            onLogOut() {
                this.$store.dispatch('logOut').then(() => {
                    this.$router.push('/');
                });
            }
        },
        computed: {
            error() {
                return this.$store.getters.error
            },
            isUserLogIn() {
                return this.$store.getters.isUserLogIn
            },
            links() {
                if (this.isUserLogIn) {
                    return [
                        {
                            title: 'Orders',
                            icon: 'bookmark_border',
                            url: '/orders',
                        },
                        {
                            title: 'New add',
                            icon: 'note_add',
                            url: '/new',
                        },
                        {
                            title: 'My list',
                            icon: 'list',
                            url: '/user-orders',
                        }
                    ]
                } else {
                    return [
                        {
                            title: 'Login',
                            icon: 'lock',
                            url: '/login',
                        },
                        {
                            title: 'Registration',
                            icon: 'face',
                            url: '/registration',
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>