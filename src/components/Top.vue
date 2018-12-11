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
     column
     xs1
    >
      <div 
        class="card-debug"
        is="TweetCard" 
        v-for="tweet in tweets" 
        v-bind:key="tweet.id"
        v-bind:picture="tweet.picture"
        v-bind:text="tweet.text"
        :tweet="tweets[tweet.id]"
      ></div>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
  import Twitter from 'twitter'
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
            id: 0,
            picture:[
                    'https://pbs.twimg.com/media/Dt94nPlVAAACUcG.jpg',
                    'https://pbs.twimg.com/media/DuBilXpUcAAtEeU.jpg',
                    'https://pbs.twimg.com/media/Dt94oAVVYAERI2C.jpg',
                    'https://pbs.twimg.com/media/Dt94oaTVsAIb47n.jpg'
                  ], 
            station: "sample Station0",
            text: "SAMPLEsample0"
          }
        ]
      };
    },
    methods: {
      search: function() {

        this.tweets.push({
          id: this.tweets.length,
          picture:[
                    'https://pbs.twimg.com/media/Dt94nPlVAAACUcG.jpg',
                    'https://pbs.twimg.com/media/DuBilXpUcAAtEeU.jpg',
                    'https://pbs.twimg.com/media/Dt94oAVVYAERI2C.jpg',
                    'https://pbs.twimg.com/media/Dt94oaTVsAIb47n.jpg'
                  ], 
          station: 'sample Station' + this.tweets.length,
          text:'sample' + this.tweets.length
        });
      }
    }
  } 
</script>

<style>
  .card-debug {
    background-color: bisque;
    height: 250px;
  }
</style>
