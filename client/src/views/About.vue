<template>
  <div>
    <div class="staticHero">
      <v-img 
      src="../assets/images/img1.jpg"
      :aspect-ratio="3"
      gradient="to right, rgba(83, 109, 254, .5), rgba(83, 109, 254, .5)"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="display-1">About Us</div>
            </v-container>
              <div class="block">
                <v-container>
                  <p>What you do, contributes a lot to people's life. So do something better and cheers :)
                  </p>
                </v-container>
              </div>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <div class="headline text-center my-6">Welcome</div>
        <p>"Let's extend purpose of life beyond death,
           stay connected with your loved ones, help your family, 
           wish them anytime and contribute to the world. 
           Let's make this uncertain life more meaningful before it will vanish,
            fulfill your purpose even after death. Let's smile &amp; bring happiness ^_^ "
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Team</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="6">
            <v-card flat tile class="mx-auto">
              <v-img 
              :src="item.src" 
              :aspect-ratio="1.2"
              contain 
              class=""
              
              >
              </v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
              <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <div class="wrapper">
              <v-btn 
                class="accent--text btn-center"
                flat
                outlined
                v-bind="attrs"
                v-on="on"
              >
                Bio
              </v-btn>  
            </div>  
          </template>
          <p class="white--text">We are friends and developers. We teamed up on this little web project to learn frontend and backend from each other as Prashant is good at Vuejs and Ankur is good at Nodejs</p>
        </v-dialog>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/prashant.jpg"),
          name: 'Prashant Yadav',
          title: 'Tech Lover'
        },
        {
          id: 2,
          src: require("../assets/images/ankur.jpg"),
          name: 'Ankur',
          title: 'Explorer'       
        }
      ]
    };
  },
};
</script>

<style scoped>
.wrapper {
    text-align: center;
}

.btn-center {
    position: relative;
    
}

</style>