<template>
  <v-app class="card">
    <v-container grid-list-sm class="container-debug">
      <v-layout>
        <v-card
        height='250px'
        width='350px'>
          <v-layout>
            <v-flex>

              <v-flex d-flex xl2 class="content-debug">
                <v-card-title class="text-content"> 
                  <a href="https://auctions.yahoo.co.jp/">
                    <h4>{{tweet.station}}</h4>
                  </a>
                </v-card-title>
                <v-card-text>
                  <a href="https://shopping.yahoo.co.jp/">
                    <div>{{tweet.text}}</div>
                  </a>
                </v-card-text>
              </v-flex>

              <v-layout wrap>
                <v-flex v-for="n in 4" :key="n" xs6>
                  <a :href=tweet.picture[n-1]>
                    <v-img
                      :src=tweet.picture[n-1]
                      max-height="80px"
                    ></v-img>
                  </a> 
                </v-flex>
              </v-layout>

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
  }
  .content-debug {
    /* background-color:aqua; */
  }
  .container-debug {
    /* background-color:blueviolet; */
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
