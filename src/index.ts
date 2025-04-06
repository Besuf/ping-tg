import dotenv from 'dotenv';
dotenv.config();

import { sendMessage } from './actions/sendMessage';

const myChatId = process.env.TELEGRAM_CHAT_ID || '';

const main = async () => {
  const text =
    'Hello, how are you? This is a test message from my Telegram bot!';

  try {
    console.log('chatId', myChatId);
    const response = await sendMessage(myChatId, text);
    console.log('Message sent successfully:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

main();
