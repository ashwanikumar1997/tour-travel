import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Himalayan Tour & Travel",
  initialMessages: [
    createChatBotMessage(
      "Welcome to our tour app! Let's plan your trip.Which city you are planing for"
    ),
  ],
  customStyles: {
    // Add any custom styles here
  },
  widgets: [
    // Define any additional widgets you want to use
  ],
};

const steps = [
  "Which city are you planning to visit?",
  "Is your trip finalized? (Yes/No)",
  "What is your preferred trip date?",
  "Where will your tour start from?",
  "Please provide your email address.",
  "We will reach out to you shortly. Thank you for using our tour app!",
];

const getStepContent = (step) => {
  return { type: "text", content: steps[step] };
};

config.customComponents = {
  // You can add custom logic here if needed
};

config.state = {
  step: 0,
};

config.botMessages = [
  {
    handle: ({ steps }) => steps.length - 1 === steps.state.step,
    message: getStepContent,
    delay: 1000,
  },
];

config.customComponents = {
  // You can add custom logic here if needed
};

config.widgets = [
  {
    widgetName: "answer",
    handler: ({ steps, addResponseMessage }) => {
      addResponseMessage(steps[steps.state.step]);
      steps.updateState((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
      }));
    },
  },
];

export default config;
