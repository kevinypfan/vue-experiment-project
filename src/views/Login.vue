<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-text-field v-model="password" label="password" type="text" required></v-text-field>

      <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>

      <v-btn color="error" @click="reset">清空表單</v-btn>

      <v-btn color="info" @click="submitLogin">登入</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        password: '',
        email: '',
        checkbox: false
    }),
    methods: {
        reset() {
            this.$refs.form.reset();
        },
        submitLogin() {
            console.log(1);
            this.axios({
                url: 'http://localhost:8888/login',
                method: 'post',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(res => {
                    let tokenLen = res.data.tokens.length;
                    console.log(res.data.tokens);
                    const token = res.data.tokens[tokenLen - 1].token;
                    console.log(token);
                    localStorage.setItem('token', token);
                    this.$router.push('/about');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>