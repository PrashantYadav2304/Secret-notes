<template>
  <div class="login my-8">
    <v-card
      rounded
      max-width="400px"
      class="mx-auto"
      >
      <v-form class="px-4 py-4" >
        <v-text-field
          v-model="email"
          label="E-mail"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          label="Password"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          outlined
          required
        ></v-text-field>

        <p v-if="feedback" class="red--text">{{ feedback }}</p>

        <v-btn
        color="secondary"
        block
        class="mt-2"
        @click="login(); loader = 'loading'"
        :loading="loading">Log In
        </v-btn>

        <p class="my-4 text-center"><router-link :to="{ path: '#' }" class="link">forgotten password?</router-link>
        </p>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <div class="wrapper">
              <v-btn 
                class="accent btn-center"
                v-bind="attrs"
                v-on="on"
              >
                create new account
              </v-btn>  
            </div>  
          </template>
          <Signup />
        </v-dialog>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import Signup from '@/components/Signup'

export default {
  name: 'Login',
  components: {
    Signup
  },
  data: () => {
    return {
      email: null,
      password: null,
      show: false,
      feedback: null,
      loader: null,
      loading: false,
      dialog: false,

    }
  },
  
  methods: {
    login() {
      console.log(this.email, this.password)
    },
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
.wrapper {
    text-align: center;
}

.btn-center {
    position: relative;
    
}


</style>