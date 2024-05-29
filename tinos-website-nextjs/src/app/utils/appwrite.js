import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66573c5c00181e8b95df');

    const account = new Account(client);

    export { account }