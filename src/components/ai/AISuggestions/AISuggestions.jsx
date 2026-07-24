import "./AISuggestions.css";

export default function AISuggestions({ onSuggestionClick }) {
  const suggestions = [
    {
      id: 1,
      label: "Find Property",
      emoji: "🏠",
      prompt: "Help me find a property",
    },
    {
      id: 2,
      label: "Become Agent",
      emoji: "👤",
      prompt: "How do I become an agent?",
    },
    {
      id: 3,
      label: "Rent Estimate",
      emoji: "💰",
      prompt: "Estimate my rent",
    },
    {
      id: 4,
      label: "Support",
      emoji: "📞",
      prompt: "Contact support",
    },
  ];

  return (
    <div className="ai-suggestions">
      {suggestions.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            onSuggestionClick
              ? onSuggestionClick(item.prompt)
              : console.log(item.prompt)
          }
        >
          <span>{item.emoji}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}