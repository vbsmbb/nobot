import "colors";
import { ERROR, INFO, SUCCESS, WARNING } from "./aggregate.mjs";

const log = (message, type) => {
  let colorMessage;
  switch (type) {
    case ERROR:
      colorMessage = `[${ERROR}] ${message}`.red;
      break;
    case WARNING:
      colorMessage = `[${WARNING}] ${message}`.yellow;
      break;
    case INFO:
      colorMessage = `[${INFO}] ${message}`.blue;
      break;
    case SUCCESS:
      colorMessage = `[${SUCCESS}] ${message}`.green;
      break;
    default:
      colorMessage = message;
  }
  console.log(colorMessage);
};

export { log };
