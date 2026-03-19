import "express-session";

declare module "express-session" {
  interface SessionData {
    user: express.Session & UserCredentials;
  }
} 