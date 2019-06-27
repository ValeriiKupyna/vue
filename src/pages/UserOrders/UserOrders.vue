<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm-6 offset-sm3>
                <h1 class="text--secondary mb-5">User Orders</h1>

                <v-card
                        v-for="order in userOrders"
                        :key="order.id"
                        class="elevation-10 mb-4">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media :src="order.imagesSrc" height="200px"/>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ order.title }}</h2>
                                <p class="text--primary">{{ order.description }}</p>
                            </v-card-text>
                            <v-spacer />
                            <v-btn class="info" :to="`/user-orders/${order.id}`">
                                Open
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const UserOrders = {
       computed: {
           userOrders() {
               return this.$store.getters.userOrders
           }
       }
    };

    export default UserOrders;
</script>