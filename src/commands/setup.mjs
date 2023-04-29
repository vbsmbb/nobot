import { setupDeployment } from "../setup/deployment.mjs";
import { setupTemplates } from "../setup/templates.mjs";

const setup = () => {
  setupDeployment();
  setupTemplates();
};

export { setup };
