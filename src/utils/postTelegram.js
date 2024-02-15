export async function postTelegram(message) {
  const botToken = process.env.NEXT_PUBLIC_BOT_ID;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error posting to telegram:", error);
  }
}
