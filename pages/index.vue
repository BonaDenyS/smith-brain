<template>
  <div>
    <h1>Azure OpenAI with Nuxt.js</h1>
    <textarea v-model="prompt" placeholder="Enter your prompt"></textarea>
    <button @click="fetchResponse">Get Response</button>
    <p>{{ response }}</p>
  </div>
</template>

<script>
import azureOpenAI from '@/services/azureOpenAI';

export default {
  data() {
    return {
      prompt: '',
      response: '',
    };
  },
  methods: {
    async fetchResponse() {
      try {
        const { data: transactions, error } = await useFetch(`/api/transactions`);
        const histories = JSON.stringify(transactions.value);
        const prefix = `I have this data ${histories}`;
        const finalPrompt = prefix + "\n" + this.prompt;
        const result = await azureOpenAI.getResponse(finalPrompt);
        this.response = result.choices[0].message.content;
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style>
/* Add any styles here */
</style>
