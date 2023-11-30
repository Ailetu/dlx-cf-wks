export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        let proxyUrl = url.pathname.replace('/', '');

        try {
            proxyUrl = new URL(proxyUrl)
        } catch(error) {
            console.log('error is', error)
            return new Response('Bad request: Missing proxy url', { status: 404 })
        }

        const req = new Request(proxyUrl, {
            redirect: 'follow'
        });

        let res = await fetch(req);
        res = new Response(res.body, res);
        res.headers.set('Access-Control-Allow-Origin', '*');

        return res;
    },
}; 
