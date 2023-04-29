import {
  cd,
  exec,
  existsSync,
  join,
  log,
  templates,
  INFO,
} from "../helpers/aggregate.mjs";
import { templatesPath } from "../helpers/get-templates-path.mjs";

const setupTemplates = () => {
  cd(templatesPath);

  Object.keys(templates).map((template) => {
    const templatePath = join(templatesPath, template);
    if (existsSync(templatePath)) {
      return log(`Template ${template} exists`, INFO);
    }
    log(`Downloading ${template}`, INFO);

    const { baseBranch, repo } = templates[template];

    return exec(
      `git clone ${repo} --branch ${baseBranch} --progress ${template}`
    );
  });
};

export { setupTemplates };
