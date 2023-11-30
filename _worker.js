export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.hostname = 'api.openai.com';
    return await fetch(new Request(url, request));
  },
};
