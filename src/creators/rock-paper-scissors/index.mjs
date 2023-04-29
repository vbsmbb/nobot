import fse from "fs-extra";
import {
  join,
  log,
  ROCK_PAPER_SCISSORS,
  ERROR,
  INFO,
  SUCCESS,
  JSON_WHITESPACE,
  GAME_JSON,
  transform,
} from "../../helpers/aggregate.mjs";
import { templatesPath } from "../../helpers/get-templates-path.mjs";
import { releasePath } from "../../helpers/get-release-path.mjs";
import { buildTemplate } from "../../helpers/build-template.mjs";
import { createDeployBranch } from "../../helpers/create-deploy-branch.mjs";
import { deployGame } from "../../helpers/deploy-game.mjs";

const create = (ticketId, ticketInformation) => {
  const { projectName } = ticketInformation;

  // 1. create a branch for deployment repository
  const branchName = `${ticketId}_${projectName}`;
  createDeployBranch(branchName);

  // 2. run npm & build production version of template
  const templatePath = join(templatesPath, ROCK_PAPER_SCISSORS);
  buildTemplate(templatePath);

  // 3. create copy of template & update config values
  const templateReleaseSource = join(templatePath, "public");
  const templateReleaseDestination = join(releasePath, projectName);

  const ignoreCoreFiles = (src) => !src.match(/core/);

  fse
    .copy(templateReleaseSource, templateReleaseDestination, {
      filter: ignoreCoreFiles,
    })
    .then(() => transform(ticketInformation))
    .then((newValues) => {
      const configFile = join(templateReleaseDestination, GAME_JSON);
      return fse.writeJsonSync(configFile, newValues, {
        spaces: JSON_WHITESPACE,
      });
    })
    .then(() => {
      log(`built ${templateReleaseDestination}`, SUCCESS);
      log(`deploying ${branchName}`, INFO);
      deployGame(branchName, projectName, ticketId);
    })
    .catch((e) => log(e, ERROR));
};

export { create };
