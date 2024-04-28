class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  no = () => {
    const message = this.createChatBotMessage(
      "Then you have to retake your image"
    );
    this.setChatbotState(message);
  };
  yes = () => {
    const message = this.createChatBotMessage(
      "Then do you want to feel more sad or want to feel happy?"
    );
    this.setChatbotState(message);
  };
  setChatbotState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
  sad = () => {
    const message = this.createChatBotMessage(
      "Okay I am giving you sad songs and movies links:",
      {
        widget: "sadLinks",
      }
    );

    this.updateChatbotState(message);
  };
  happy = () => {
    const message = this.createChatBotMessage(
      "Okay I am giving you happy songs and movies links:",
      {
        widget: "happyLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
