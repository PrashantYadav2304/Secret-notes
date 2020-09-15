<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../assets/images/img1.jpg" aspect-ratio="5">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>"Let's extend purpose of life beyond death,
           stay connected with your loved ones, help your family, 
           wish them anytime and contribute to the world. 
           Let's make this uncertain life more meaningful before it will vanish,
            fulfill your purpose even after death. Let's smile & bring happiness ^_^ "
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="6">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="0.8" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
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
          title: 'Co-founder'
        },
        {
          id: 2,
          src: require("../assets/images/ankur.jpg"),
          name: 'Ankur',
          title: 'Co-founder'
         
        }
      ]
    };
  }
};
</script>