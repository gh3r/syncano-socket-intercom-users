import { Client } from 'intercom-client';

const connector = new Client({ token: CONFIG.ACCESS_TOKEN });

export default connector;
