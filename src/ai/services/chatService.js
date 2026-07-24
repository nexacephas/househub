import knowledgeBase from "../data/knowledgeBase";

export function getAIResponse(message) {

  const question = message.toLowerCase();

  for (const item of knowledgeBase) {

    if (
      item.keywords.some((keyword) =>
        question.includes(keyword)
      )
    ) {
      return item.answer;
    }

  }

  return (
    "I'm still learning. Soon I'll be powered by HouseHub's AI engine and will answer questions about properties, landlords, tenants, agents, bookings, payments, and more."
  );

}