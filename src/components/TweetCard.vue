<template>
  <v-app class="card">
    <v-container grid-list-sm class="container-debug">
      <v-layout>
        <v-card
        height='250px'
        width='350px'>
          <v-layout>
            <v-flex xs12 class="picture-debug" >
              <v-layout>
                <v-flex d-flex xs10>
                  <a :href=tweet.picture[0] >
                    <v-card-media
                      :src=tweet.picture[0]
                      max-height="150px"
                      max-width="150px"
                    ></v-card-media>
                  </a>
                </v-flex>
              </v-layout>
              <v-flex d-flex>
                <v-flex v-for="n in 3" :key="n" d-flex xs3>
                  <a :href=tweet.picture[n]>
                    <v-img
                      :src=tweet.picture[n]
                      max-height="50px"
                      max-width="50px"
                    ></v-img>
                  </a>
                </v-flex>
              </v-flex>
            </v-flex>
            <v-flex xl2 class="content-debug">
              <v-card-title class="text-content"> 
                <a href="https://auctions.yahoo.co.jp/">
                  <h4>{{tweet.station}}</h4>
                </a>
                <a href="https://shopping.yahoo.co.jp/">
                  <div>{{tweet.text}}</div>
                </a>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>  
</template>

<script>
export default {
  name: 'TweetCard',
  props: ['tweet'],
  data(){
    return {};
  }
}
</script>

<style>
  .card{
    margin: 10px;
    height: 250px;
    background-color:blueviolet;
  }
  .content-debug {
    background-color:aqua;
  }
  .container-debug {
    background-color:blueviolet;
    height: 250px;
  }
  .picture-debug {
    background-color: burlywood;
  }
  a{
    color: black;
    text-decoration: none;
  }
</style>
