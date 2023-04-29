import axios from "axios";
import { authKey, endpoint } from "./aggregate.mjs";

const getTicketData = (ticketId) =>
  axios({
    url: endpoint,
    params: {
      authKey,
      ticketId,
    },
  });

export { getTicketData };
