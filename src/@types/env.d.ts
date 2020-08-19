declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "production" | "development";
    SERVER_ENDPOINT: string;
    PORT: string;
    HOST: string;
  }
}
