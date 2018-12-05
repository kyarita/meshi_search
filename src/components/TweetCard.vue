<template>
  <v-app class="card">
    <v-container fluid grid-list-xs>
      <v-layout>
        <v-card>
          <v-layout>
            <v-flex xs12>
              <v-layout>
                <v-flex d-flex xl5 >
                  <a href="https://www.yahoo.co.jp/">
                    <v-img
                      src="https://placehold.jp/150x150.png"
                      max-height="150px"
                      max-width="150px"
                    ></v-img>
                  </a>
                </v-flex>
              </v-layout>
              <v-flex d-flex>
                <v-flex v-for="n in 3" :key="n" d-flex>
                  <a href="https://www.yahoo.co.jp/">
                    <v-img
                      src="https://placehold.jp/50x50.png"
                      max-height="50px"
                      max-width="50px"
                    ></v-img>
                  </a>
                </v-flex>
              </v-flex>
            </v-flex>
            <v-flex xs7>
              <v-card-title class="text-content"> 
                <a href="https://auctions.yahoo.co.jp/">
                  <h4>飯処さんぷる</h4>
                </a>
                <a href="https://shopping.yahoo.co.jp/">
                  <div>さんぷるサンプルsample見本見本</div>
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
  data: () => ({})
}
</script>

<style>
  .card{
    margin: 10px;
  }
  a{
    color: black;
    text-decoration: none;
  }
</style>
