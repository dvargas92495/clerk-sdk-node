import { ClerkServerSDK } from 'clerk-sdk-node';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.BASE_URL
const accessToken = process.env.ACCESS_TOKEN;
const phoneNumberId = process.env.PHONE_NUMBER_ID;

const sdk = new ClerkServerSDK(accessToken, { baseUrl: baseUrl });

console.log('Create SMS message');
const message = "I'd buy that for a dollar";
let smsMessage = await sdk.smsMessageApi.createSMSMessage({ message, phoneNumberId });
console.log(JSON.stringify(smsMessage));
