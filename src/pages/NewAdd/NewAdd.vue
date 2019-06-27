<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm-6 offset-sm3>
                <h1 class="text--secondary">Create new</h1>
                <v-form v-model="valid"
                        class="mb-3"
                        ref="form"
                        validation>
                    <v-text-field
                            v-model="title"
                            :validate-on-blur="true"
                            name="title"
                            label="Title"
                            type="text"
                            :rules="titleValidation"
                    ></v-text-field>
                    <v-textarea
                            v-model="description"
                            :validate-on-blur="true"
                            name="description"
                            label="Description"
                            type="text"
                            :multi-line="true"
                            :rules="descriptionValidation"
                    >
                    </v-textarea>
                </v-form>

                <v-layout>
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <img :src="imagesSrc" alt="img" height="200px">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                label="Add to promo?"
                                v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid || loading"
                                :loading="loading"
                                class="success"
                                @click="createAd">
                            Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const NewAdd = {
        data() {
            return {
                title: '',
                description: '',
                imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                valid: false,
                titleValidation: [(v) => !!v || 'Title is required'],
                descriptionValidation: [(v) => !!v || 'Description is required'],
                promo: false
            }
        },
        methods: {
            createAd() {
                const order = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    imagesSrc: this.imagesSrc,
                };

                this.$store.dispatch('createOrder', order).then(() => {
                    this.$router.push('/');
                })
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        }
    };

    export default NewAdd;
</script>