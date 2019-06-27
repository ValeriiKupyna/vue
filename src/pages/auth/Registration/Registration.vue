<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid"
                                ref="form"
                                validation>
                            <v-text-field
                                    v-model="email"
                                    :validate-on-blur="true"
                                    prepend-icon="person"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    :rules="emailValidation"
                            ></v-text-field>
                            <v-text-field
                                    v-model="password"
                                    :validate-on-blur="true"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    :rules="passwordValidation"
                                    type="password">
                            </v-text-field>
                            <v-text-field
                                    v-model="confirmPassword"
                                    :validate-on-blur="true"
                                    prepend-icon="lock"
                                    name="confirmPassword"
                                    label="Confirm password"
                                    :rules="confirmPasswordValidation"
                                    type="password">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                :disabled="!valid || loading"
                                color="primary"
                                @click="onSubmit"
                                :loading="loading"
                        >Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const Registration = {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailValidation: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordValidation: [
                    v => !!v || 'Password is required',
                    v => !!v && v.length >= 6 || 'Password must be more than 6 characters'
                ],
                confirmPasswordValidation: [
                    v => !!v && v === this.password || 'Confirm password should match'
                ],
            }
        },
        methods: {
            onSubmit() {
                const user = {
                    email: this.email,
                    password: this.password,
                };

                this.$store.dispatch('registerUser', user).then(() => {
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

    export default Registration;
</script>