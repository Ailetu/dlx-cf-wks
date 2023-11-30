export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = "api.openai.com";
    try {
      return await fetch(new Request(url, request));
    } catch (e) {
      return new Response(e.stack, { status: 500 });
    }
  },
};
