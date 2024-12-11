import development from './development';
import production from './production';

const config = import.meta.env.PROD ? production : development;

export default { ...config };
