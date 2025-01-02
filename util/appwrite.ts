import {Client, Databases} from 'appwrite';

export const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!); // Replace with your project ID

// export const account = new Account(client);
export const databases = new Databases(client);
export {ID} from 'appwrite';
