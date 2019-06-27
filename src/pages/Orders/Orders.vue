<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list
                        subheader
                        two-line
                >
                    <v-list-tile
                            avatar
                            v-for="order in orders"
                            :key="order.id"
                    >
                        <v-list-tile-action>
                            <v-checkbox
                                    color="success"
                                    :input-value="order.done"
                                    @change="markDown(order)">

                            </v-checkbox>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ order.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn
                                    :to="`/user-orders/${order.adId}`"
                                    class="primary"
                            >Open
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>


                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const Orders = {
        data() {
            return {
                orders: [
                    {
                        id: 'fds3',
                        name: 'Vladilen',
                        phone: '8-921-777-77-77',
                        adId: '123',
                        done: false,
                    }
                ]
            }
        },
        methods: {
            markDown(order) {
                order.done = true
            }
        }
    };

    export default Orders;
</script>