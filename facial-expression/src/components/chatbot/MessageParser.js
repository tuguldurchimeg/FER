class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("yes")) {
      this.actionProvider.yes();
    }
    if (lowerCaseMessage.includes("no")) {
      this.actionProvider.no();
    }
    if (lowerCaseMessage.includes("happy")) {
      this.actionProvider.happy();
    }

    if (lowerCaseMessage.includes("sad")) {
      this.actionProvider.sad();
    }
  }
}

export default MessageParser;
