<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1 class="text--secondary">Order details</h1>

                <v-card class="elevation-10 mb-5">
                    <v-card-media :src="order.imagesSrc" height="300px"/>
                    <v-card-text>
                        <h2 class="text--primary">{{ order.title }}</h2>
                        <p class="text--primary">{{ order.description }}</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer/>
                        <v-btn flat class="warning">
                            Edit
                        </v-btn>
                        <v-btn class="success">
                            Buy
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const UserOrderDetail = {
        props: ['id'],
        computed: {
            order() {
                return this.$store.getters.orderById(this.id);
            }
        }
    };

    export default UserOrderDetail;
</script>