import React from "react";

function hasDate(message) {
  // Regular expression to match common date formats (e.g., dd/mm/yyyy, mm/dd/yyyy)
  const dateRegex = /\b(\d{1,2}([./-])\d{1,2}\2\d{4})\b/g;

  // Test if the message contains a date using the regex
  return dateRegex.test(message);
}

const isValidName = (name) => {
  // Example validation: Check if the name contains only letters and spaces
  return /^[A-Za-z\s]+$/.test(name);
};

function hasEmail(message) {
  // Regular expression to match email patterns
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

  // Test if the message contains an email address using the regex
  return emailRegex.test(message);
}

function hasPhoneNumber(message) {
  // Regular expression to match 10-digit phone numbers
  const phoneRegex = /\b\d{10}\b/g;

  // Test if the message contains a 10-digit phone number using the regex
  return phoneRegex.test(message);
}

const MessageParser = ({ children, actions }) => {
  console.log('children',children);
  const parse = (message) => {
    
    if (message.trim() !== "") {
     if (children.props.state.step == 0) {
      actions.handleFinalized();
     }else if(children.props.state.step == "finalized"){
      actions.handleDatesTrip();
     }else if(children.props.state.step == "starting_city"){
      actions.handleStartingCityTrip();
     }else if(children.props.state.step == "email"){
      actions.handleEmail();
     }else if(children.props.state.step == "contact_number"){
      actions.handleContactMEssage();
     }else if(children.props.state.step == "traveller_number"){
      actions.handleTravellerNumberMEssage();
     }else if(children.props.state.step == "hotel_prefrence"){
      actions.handleHotelPreferenceMEssage();
     }else if(children.props.state.step == "budget"){
      actions.handleBudgetPreferenceMEssage();
     }else if(children.props.state.step == "traveller_name"){
      actions.handleTravellerNameMEssage();
     }else if(children.props.state.step == "finally"){
      actions.handleFinalMEssage();
     }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
