import {Client, Databases} from 'appwrite';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('prompt-paste'); // Replace with your project ID

// export const account = new Account(client);
export const databases = new Databases(client);
export {ID} from 'appwrite';
