<template>
  <div class="home">
    <v-container>
      <div class="row mt-md-12">
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
		<v-container>
			<div class="row">
				<div class="mt-2 ">
					<div class="display-2 text-center">Why it is important!</div>
					<div class="display-1 mb-4 mt-8">
						<v-icon color="secondary" size="48px">mdi-emoticon-excited-outline</v-icon>
						Live joyfully</div>
					<p>We genuinely believe that thinking about the important stuff and message you will pass to your loved ones will increase the imporatance of your life. It will directly affect understanding of your life in a positive way and remove sadness about little stuff. It will have a good impact on how you deal with rude people, ignore unwanted scenerios for a happy life and we believe you should try this once atleast and give us feedback for improvement  </p>
					<div class="display-1 mb-4 mt-8">
						<v-icon color="secondary" size="48px">mdi-message-text-lock-outline</v-icon>
						Spread love</div>
					<p>Be able to share some lovely messages with your loved ones on certain dates that you will stored already here. Tell them important things about your family, property and other imporatant information you might want to share. Also wish them on precious occassions. It will always carry your thoughts with them and may be give them a path you wished before your death. You will be able to afford some more time like you are still here talking to them.</p>
					<div class="display-1 mb-4 mt-8">
						<v-icon color="secondary" size="48px">mdi-snake</v-icon>
						Mention threats</div>
					<p>Sometimes you may get caught into a fight in school, city, or in a foriegn place or on social media. Sometimes you don't mention about them or hesitate to do so with your family. But you could still share with us here. So if anything happens to you because of them, your family will be able to know it directly. So a crime and accident can be distinguished for justice. It can also help them understand if someone could hurt them after you. </p>
					<div class="display-1 mb-4 mt-8">
						<v-icon color="secondary" size="48px">mdi-clipboard-edit-outline</v-icon>
						Share wisdom</div>
					<p>Wisdom of any person dies with the person himself, however now we have a stored a great part of it and continuously using it for human welfare. We see every human has certain plans and some of them are so great &amp; many people are doing their important stuff privately like most of the computer engineers have private repositories for their code, but what do you want to do with that stuff if your life ends at this very moment? You might want to pass this information to someone in your family or you could open source your work to everyone for human welfare, choice will be yours. Store it here privately now and it will be exposed after your death to the audience of your choice. Remember anything that will make a very little impact is so important.</p>
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
		Login,
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
