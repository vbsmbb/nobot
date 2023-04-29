import "colors";
import {
  ROCK_PAPER_SCISSORS,
  ERROR,
  log,
  create,
} from "../helpers/aggregate.mjs";
import { getTicketData } from "../helpers/get-ticket-data.mjs";

const game = (ticketId) => {
  getTicketData(ticketId)
    .then(({ data }) => {
      const { template } = data;

      switch (template) {
        case ROCK_PAPER_SCISSORS:
          create(ticketId, data);
          break;
        default:
          throw new Error(`Could not find template ${template}`);
      }
    })
    .catch((e) => log(e, ERROR));
};

export { game };
