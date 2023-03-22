// https://dev.to/asjadanis/parsing-env-with-typescript-3jjm
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, './.env')})

interface ENV {
  PORT: number | undefined;
  MONGO_DB: string | undefined;
}

interface Config {
  PORT: number;
  MONGO_DB: string;
}

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_DB: process.env.MONGO_DB ? process.env.MONGO_DB : undefined
  };
};


const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;