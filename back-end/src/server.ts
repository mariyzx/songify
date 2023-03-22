import App from "./app";
import config from '../config';

const PORT = config.PORT

new App().start(PORT);