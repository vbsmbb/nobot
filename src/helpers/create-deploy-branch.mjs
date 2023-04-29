import { cd, exec, baseBranch } from "./aggregate.mjs";
import { releasePath } from "./get-release-path.mjs";

const createDeployBranch = (branchName) => {
  cd(releasePath);
  exec(`git checkout ${baseBranch}`);
  exec(`git pull origin ${baseBranch}`);
  exec(`git checkout -b ${branchName}`);
};

export { createDeployBranch };
