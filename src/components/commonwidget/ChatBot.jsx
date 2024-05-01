import React from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "../commonwidget/chatBot/ChatBotConfig";
import ActionProvider from "../commonwidget/chatBot/ActionProvider";
import MessageProvider from "../commonwidget/chatBot/MessageProvider";
import "react-chatbot-kit/build/main.css";



export const ChatBot = ({ open, setOpen }) => {

  return (
        <Chatbot
        config={config}
        headerText='Himalayan Tour & Travel'
        messageParser={MessageProvider}
        actionProvider={ActionProvider}
        style={{ height: '300px' }}
        />
  );
};
