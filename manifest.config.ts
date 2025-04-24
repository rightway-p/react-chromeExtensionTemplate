import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
    manifest_version: 3,
    name: 'Smartstore Crawler',
    version: '1.0.0',
    action: {
        default_popup: 'index.html'
    },
    background: {
        service_worker: 'src/background.ts',
        type: 'module',
    },
    permissions: ['storage', 'scripting', 'tabs'],
    host_permissions: ['<all_urls>']
})