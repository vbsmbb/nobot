import {
  join,
  log,
  SUCCESS,
  ERROR,
  NO_CHOICE_MADE,
} from "../helpers/aggregate.mjs";
import fse from "fs-extra";
import { templatesPath } from "../helpers/get-templates-path.mjs";
import { deployCorePath } from "../helpers/get-deploy-core-path.mjs";
import { buildTemplate } from "../helpers/build-template.mjs";
import { updateTemplate } from "../helpers/update-template.mjs";
import { keyInSelect } from "readline-sync";
import { deployTemplate } from "../helpers/deploy-template.mjs";

const template = ({ id }) => {
  let choice = id;

  const templates = fse
    .readdirSync(templatesPath)
    .filter((t) => t.match(/\./) === null);

  if (choice === undefined || templates.includes(choice) === false) {
    const index = keyInSelect(templates, "choose template to release");
    if (index === NO_CHOICE_MADE) {
      log("Template release cancelled", ERROR);
      process.exit(0);
    }
    choice = templates[index];
  }

  const templatePath = join(templatesPath, choice);

  updateTemplate(choice, templatePath);

  buildTemplate(templatePath);

  const templateReleaseSource = join(templatePath, "public", "core");
  const templateReleaseDestination = deployCorePath;
  // const templatePackageJson = join(templatePath, "package.json");
  const templatePackageJson = getJSONData(templatePath, "package.json", false);
  const { version } = templatePackageJson;

  fse
    .copy(templateReleaseSource, templateReleaseDestination)
    .then(() => {
      deployTemplate(choice, version);
      log("released latest template version", SUCCESS);
    })
    .catch((e) => log(e, ERROR));
};

export { template };
