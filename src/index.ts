import { sendMessage } from './actions/sendMessage';

const main = async () => {
  const chatId = '123456789'; // Replace with the actual chat ID
  const text = 'Hello, this is a test message!';

  try {
    const response = await sendMessage(chatId, text);
    console.log('Message sent successfully:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

main();
