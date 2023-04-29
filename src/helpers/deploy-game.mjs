import { cd, exec, log, INFO, baseBranch } from "./aggregate.mjs";
import { releasePath } from "./get-release-path.mjs";

const deployGame = (branchName, projectName, ticketId) => {
  log(`changing to path ${releasePath}`, INFO);
  cd(releasePath);
  exec(`git pull origin ${baseBranch}`);
  log(`staging project ${projectName}`, INFO);
  exec(`git add ${projectName}`);
  exec(`git commit -m "${ticketId} - ${projectName} release"`);
  log(`switching to base branch ${baseBranch}`, INFO);
  exec(`git checkout ${baseBranch} && git pull origin ${baseBranch}`);
  log(`merging ${branchName} into ${baseBranch}`, INFO);
  exec(`git merge ${branchName}`);
  exec(`git push origin ${baseBranch}`);
  exec(`git branch -d ${branchName}`);
};

export { deployGame };
