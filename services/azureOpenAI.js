import axios from 'axios';

export default {
  async getResponse(prompt) {
    try {
      const config = useRuntimeConfig().public;
      const response = await axios.post(
        `${config.endpoint}/openai/deployments/${config.model}/chat/completions?api-version=2024-06-01`,
        {
            "messages": [
              {
                "role": "user",
                "content": prompt
              }
            ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${config.apiKey}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data from Azure OpenAI', error);
      throw error;
    }
  },
};
