import {
  cd,
  exec,
  name,
  repo,
  log,
  INFO,
  existsSync,
} from "../helpers/aggregate.mjs";
import { repositoryPath } from "../helpers/get-repositories-path.mjs";
import { websitePath } from "../helpers/get-website-path.mjs";

const setupDeployment = () => {
  if (existsSync(websitePath)) {
    return log(`Deployment Repository '${websitePath}' exists`, INFO);
  }

  cd(repositoryPath);

  return exec(`git clone ${repo} --progress ${name}`);
};

export { setupDeployment };
