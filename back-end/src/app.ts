import express from 'express';
import mongoose from 'mongoose';
import config from '../config';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config()
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    mongoose.connect(config.MONGO_DB)
      .then(() => {
        console.log('🍃 [db]: Mongoose connected!');
        this.app.listen(PORT, () => console.log(`⚡ [server]: Running on port ${PORT}...`));
      })
      .catch(console.error)
  }
}

export default App;