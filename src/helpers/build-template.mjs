import { cd, exec } from "./aggregate.mjs";

const buildTemplate = (templatePath) => {
  cd(templatePath);
  exec("npm install");
  exec("npm run build");
};

export { buildTemplate };
