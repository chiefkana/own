export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_qrca3Gov.mjs').then(n => n.i);

export { page };