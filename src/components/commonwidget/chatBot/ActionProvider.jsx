import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleFinalized = () => {
    const botMessage = createChatBotMessage(
      "Good! When are you planning to go? Is your trip finalized? (Yes/No)"
    );
   
    setState((prev) => ({
      
      ...prev,
      messages: [...prev.messages, botMessage],
      step : "finalized"
    }));
    // setState((data)=>console.log('data',data))
  };
  const handleDatesTrip = () => {
    const botMessage = createChatBotMessage(
      "Good! Please Provide trip dates finalized ?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step : "starting_city"
    }));
    // setState((data)=>console.log('data1',data))
  };

  const handleStartingCityTrip = () => {
    const botMessage = createChatBotMessage(
      "Which city is the starting point of your travel?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step : "email"
    }));
    // setState((data)=>console.log('data1',data))
  };

  const handleEmail = () => {
    const botMessage = createChatBotMessage(
      "Good! Please provide your email. We can reach out you!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step : "contact_number"
    }));
  };

  const handleContactMEssage = () => {
    const botMessage = createChatBotMessage(
      "Please provide your contact number."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step: "traveller_number"
    }));
  };

  const handleTravellerNumberMEssage = () => {
    const botMessage = createChatBotMessage(
      "May we know the number of travelers?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step:"hotel_prefrence"
    }));
  };
  const handleHotelPreferenceMEssage = () => {
    const botMessage = createChatBotMessage(
      "Share your Hotel Star Preference?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step:"budget"
    }));
  };
  const handleBudgetPreferenceMEssage = () => {
    const botMessage = createChatBotMessage(
      "Give us the Budget Estimate of your trip by per Person."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step:"traveller_name"
    }));
  };
  const handleTravellerNameMEssage = () => {
    const botMessage = createChatBotMessage(
      "Your NAME would help us to serve you better."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step:"finally"
    }));
  };

  const handleFinalMEssage = () => {
    const botMessage = createChatBotMessage(
      'We have received your requirement.We will get back to you shortly!!"'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleFinalized,
            handleDatesTrip,
            handleStartingCityTrip,
            handleEmail,
            handleContactMEssage,
            handleTravellerNumberMEssage,
            handleHotelPreferenceMEssage,
            handleBudgetPreferenceMEssage,
            handleTravellerNameMEssage,
            handleFinalMEssage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
