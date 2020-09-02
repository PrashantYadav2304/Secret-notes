<template>
  <div class="home">
    <v-container>
      <div class="row">
        <div class="col-md-6">
          <div class="mt-2">
            <v-img src="/undraw_hey_email_liaa.svg">
            </v-img>
          </div>
        </div>
        <div class="col-md-6">
          <div class=" mt-2">
            <div class="quote">
               <blockquote class="blockquote">"Let's extend purpose of life beyond death, stay connected with your loved ones, help your family, wish them anytime and contribute to the world. Let's make this uncertain life more meaningful before it will vanish, fulfill your purpose even after death. Let's smile &amp; bring happiness ^_^ "</blockquote>
            </div>
            <Login/>
          </div>    
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Login from '@/components/Login'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Login
  }
  
  
}
</script>

<style scoped>

.quote {
	font-family: 'Special Elite', cursive;
	background: #fffdf5;
	color: #3f3f5a;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

blockquote {
	font-weight: 100;
	font-size: 2rem;
	max-width: 600px;
	line-height: 1.4;
	position: relative;
	margin: 0;
	padding: .5rem;
}

blockquote:before,
blockquote:after {
	position: absolute;
	color: #f1efe6;
	font-size: 8rem;
	width: 4rem;
	height: 4rem;
}

blockquote:before {
	content: '“';
	left: -2.5rem;
	top: -2rem;
}

blockquote:after {
	content: '”';
	right: -2.5rem;
	bottom: -1rem;
}
</style>
