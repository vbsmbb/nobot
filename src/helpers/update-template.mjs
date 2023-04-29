import { cd, exec, templates } from "./aggregate.mjs";

const updateTemplate = (template, templatePath) => {
  cd(templatePath);
  const { baseBranch } = templates[template];
  exec(`git pull origin ${baseBranch}`);
};

export { updateTemplate };
