<template>
    <div>
        <v-container fluid>
            <v-layout>
                <v-flex>
                    <v-carousel>
                        <v-carousel-item
                                v-for="order in promoOrders"
                                :key="order.id"
                                :src="order.imagesSrc"
                        >
                            <div class="item-link">
                                <v-btn
                                        class="error"
                                        :to="`/user-orders/${order.id}`">
                                    {{ order.title }}
                                </v-btn>
                            </div>

                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="order in orders"
                        :key="order.id">
                    <v-card>
                        <v-img
                                :src="order.imagesSrc"
                                :height="'200px'"
                                aspect-ratio="2.75"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ order.title }}</h3>
                                <div> {{ order.description }}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn
                                    flat
                                    class="primary"
                                    :to="`/user-orders/${order.id}`">Open</v-btn>
                            <v-btn reaised>Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    const Home = {
       computed: {
           promoOrders() {
               return this.$store.getters.promoOrders
           },
           orders() {
               return this.$store.getters.orders
           }
       }
    };

    export default Home;
</script>

<style scoped>
    .item-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, 0.5);
        transform: translate(-50%, 0);
        padding: 10px 20px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>