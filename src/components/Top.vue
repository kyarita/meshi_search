<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          めしさーち 
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">
          Twitterで紹介されている美味そうなめしを検索できるよ！
        </h2>
      </v-flex>
      <v-flex 
        id="search"
      >
        <v-text-field
          v-on:change="search"
          label="search"
          placeholder="ツイート内容で検索"
          append-icon="search"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout
     align-center 
     justify-start
    >
      <div 
        is="TweetCard" 
        v-for="tweet in tweets" 
        v-bind:key="tweet.id"
        v-bind:picture="tweet.picture"
        v-bind:text="tweet.text"
      ></div>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
  import TweetCard from './TweetCard'

  export default {
    name: 'Top',
    components: {
      TweetCard
    },
    props:[],
    data() {
      return {
        tweets:[
          {
            id: 1,
            picture: ["sample-img1.png"],
            text: "SAMPLEsample1"
          },
          {
            id: 2,
            picture: ["sample-img2.png"],
            text: "sampleSAMPLE1"
          }
        ]
      };
    },
    methods: {
      search: () => {
        console.log(this);
        this.tweets.push({id: 1, picture: "sample.png", text:"sample"});
      }
    }
  } 
</script>

<style>

</style>
