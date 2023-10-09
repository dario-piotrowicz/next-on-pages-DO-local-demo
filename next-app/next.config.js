/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

if(process.env.NODE_ENV === 'development') {
    const { setupDevBindings } = require('@cloudflare/next-on-pages/dev-bindings');
    
    setupDevBindings({
        durableObjects: {
            'MY_DO': {
                scriptName: 'do_worker',
                className: 'DurableObjectClass',
            }
        },
    });
}
