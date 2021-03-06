// Usage:
// node --require dotenv/config email.mjs

import { setClerkServerApiUrl, emails } from '@clerk/clerk-sdk-node';

const serverApiUrl = process.env.CLERK_API_URL;
const emailAddressId = process.env.EMAIL_ADDRESS_ID;

setClerkServerApiUrl(serverApiUrl);

console.log('Create email');
const fromEmailName = 'sales';
const subject = 'Amazing offer!';
const body =
  'Click <a href="https://www.thisiswhyimbroke.com/">here</a> to find out more!';
let email = await emails.createEmail({
  fromEmailName,
  subject,
  body,
  emailAddressId,
});
console.log(email);
