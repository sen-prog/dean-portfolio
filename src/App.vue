<!-- <template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script> -->

<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Luigi Dinopol</h1>
              <span class="text-grey">I am a Project Manager</span><br />
              <v-btn tile dark class="text-yellow mt-8 contact-btn" variant="outlined">Contact Me Below</v-btn>
            </div>
          </v-col>

          <v-col cols="2">
            <div style="position: absolute;z-index: 9999;bottom:0;margin-left: auto;margin-right: auto;left:0;right:0;text-align: center;">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>

          <v-col cols="5">
            <div style="position: relative; z-index: 9999; overflow: hidden; width: 300px; height: 300px; border-radius: 50%; box-shadow: 0px 0px 10px rgba(0,0,0,0.3);" class="mt-16">
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border-radius: 50%;">
                <v-img src="../assets/me-face-test-removed.png" contain max-height="300" style="width: 100%; height: 100%; object-fit: cover;"></v-img>
              </div>
            </div>
          </v-col>

        </v-row>
      </div>

      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>

            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="../assets/person-icon-removed.png" max-height="280" width="auto"></v-img>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <h5 class="mt-16">About Me</h5>
              <div style="width:120px">
                <v-slider v-model="slider2" color="yellow">
                
                </v-slider>
              </div>

              <h4 class="mt-n4">I am a Project Manager and Backend Progammer</h4>
              <p class="text-grey">
                I am a backend programmer and a project manager for two years now.
                I have done multiple projects with multiple teams and I am a good leader.
                I can always motivate my teammates to reach for the goal and pursue the the success of each projects.
              </p>

              <br />

              <p class="text-grey">
                I also have experience in backend programming such as Nodejs,
                Laravel and Java before. But what I am confidently good at in the present display
                is the Laravel and Nodejs. 
              </p>

            </v-col>

          </v-row>
        </div>
      </v-col>

        <div class="text-center mt-4">
          <h2>What I Do</h2>
          
          <div style="width:120px; margin:0 auto">
            <v-slider v-model="slider2" color="yellow"></v-slider>
          </div>

        </div>

        <v-col cols="12" class="padd" id="what-i-do">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">

                <div class="child">
                  <v-btn icon="fas fa-laptop" color="#FBDF7E" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Backend Programming</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Laravel and Nodejs Progammer
                  </p>
                </div>

                <div class="child">
                  <v-btn icon="fas fa-user" color="#FBDF7E" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Project Managing</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Team Leader and 
                    Documenation handler
                  </p>
                </div>

                <div class="child">
                  <v-btn icon="fas fa-laptop" color="#FBDF7E" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Frontend Programming</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Simple programming design
                  </p>
                </div>
              </v-col>
            </v-row>

            <v-divider></v-divider>

          </div>
        </v-col>

        <div class="text-center mt-4">
          <h2>Education</h2>
          
          <div style="width:120px; margin:0 auto">
            <v-slider v-model="slider2" color="yellow"></v-slider>
          </div>

        </div>

        <v-col cols="12" class="padd" id="what-i-do">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">

                <div class="child">
                  <v-btn icon="fas fa-school" color="#FBDF7E" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Cordova Public College</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Bachelor of Science in Information Technology (BSIT).
                  </p>
                </div>

              </v-col>
            </v-row>
          </div>
        </v-col>
   
        <v-divider></v-divider>

        
        <br /> 
        <br /> 
        <v-col cols="12" id="biog">
          <div class="hire">
            <v-row>
              <v-col cols="12" sm="8">
                <h1 class="mt-9">Hire me for your awesome project!</h1>
                <p class="text-grey">
                  I will help, motivate and pursue the success of our project.
                </p>
              </v-col>

            </v-row>
          </div>
        </v-col>

        <v-col cols="12" class="padd" id="contact">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12" sm="12">
                <h1>My Contact Info</h1>

                <div class="child">
                  <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn>
                  <h5 class="ml-3 mt-4">Sambagan, Dapitan, Cordova, Cebu</h5>
                </div>

                <div class="child">
                  <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn>
                  <h5 class="ml-3 mt-4">09663503466</h5>
                </div>

                <div class="child">
                  <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn>
                  <h5 class="ml-3 mt-4">luigidinopol@gmail.com</h5>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>   

    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  setup(){
    return {
      slider2: 50,

      items: [
        {
          img: "test.jpg"
        },
        {
          img: "test(1).png"
        },
        {
          img: "test(2).png"
        },
        {
          img: "test(3).png"
        },
        {
          img: "test(4).png"
        },
        {
          img: "test(5).png"
        },
      ],
    }
  },

  components: {
    NavBar
  },
  
  methods: {
    changePageTitle(newTitle) {
      document.title = newTitle;
    }
  },

  mounted(){
    this.changePageTitle('Portfolio');
  }

});
</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .v-container{
  padding: 16px 0;
  }

  
  .head{
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }

  .head::before{
    content: " ";
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 6deg);
  }

  .head:after{
    content: " ";
    position: absolute;
    top:0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -6deg);
  }
  .egg{
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #FBDF7E;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }

  .first{
    width: 100%;
    height: 280px;
    text-align: center;
    padding: 2rem 2rem;
  }

  .child{
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }

  .imgHover{
    padding: 0 200px;
  }

  .pre{
    width: 100%;
    height: 380px;
    text-align: center;
    padding: 0 200px;
    background-color: #f5f5f5; 
  }

  .hire{
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color: #e9e9e9;
    margin-top: -24px;
  }
}

@media screen and (min-width: 601px) {
  .v-container{
  padding: 16px 0;
  }

  .contact-btn:hover{
    cursor:default;
  }

  .head{
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }

  .head::before{
    content: " ";
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 6deg);
  }

  .head:after{
    content: " ";
    position: absolute;
    top:0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -6deg);
  }
  .egg{
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #FBDF7E;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }

  .first{
    width: 100%;
    height: 280px;
    text-align: center;
    padding: 2rem 2rem;
  }

  .child{
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }

  .imgHover{
    padding: 0 200px;
  }

  .pre{
    width: 100%;
    height: 380px;
    text-align: center;
    padding: 0 200px;
    background-color: #f5f5f5; 
  }

  .hire{
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color: #e9e9e9;
    margin-top: -24px;
  }
}

  
</style>
