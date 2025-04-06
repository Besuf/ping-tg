import dotenv from 'dotenv';
dotenv.config();

const telegramToken = process.env.TELEGRAM_BOT_TOKEN || '';

export const sendMessage = async (chatId: string, text: string) => {
  const res = await fetch(
    `https://api.telegram.org/bot${telegramToken}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  const data = await res.json();
  return data;
};
