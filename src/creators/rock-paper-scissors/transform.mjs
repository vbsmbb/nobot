import fse from "fs-extra";
import {
  join,
  ROCK_PAPER_SCISSORS,
  GAME_JSON,
} from "../../helpers/aggregate.mjs";
import { templatesPath } from "../../helpers/get-templates-path.mjs";

const transform = ({
  id,
  projectName,
  font,
  fontUrl,
  assetsPath,
  labelFirstOption,
  labelSecondOption,
  labelThirdOption,
  screenChoiceTitle,
  screenChoiceSubtitle,
  screenResultWon,
  screenResultLost,
  screenResultDraw,
  screenResultReplay,
  screenResultFeedbackWon,
  screenResultFeedbackLost,
  screenResultFeedbackDraw,
}) =>
  new Promise((resolve, reject) => {
    try {
      const originalTemplateConfigPath = join(
        templatesPath,
        ROCK_PAPER_SCISSORS,
        "public",
        GAME_JSON
      );
      const originalTemplateConfig = fse.readJsonSync(
        originalTemplateConfigPath
      );
      const newConfig = originalTemplateConfig;
      newConfig.id = id;
      newConfig.projectName = projectName;
      newConfig.theme.fontFamily = font;
      newConfig.customStyles = [fontUrl];
      newConfig.theme.path = assetsPath;
      newConfig.labels.rock = labelFirstOption;
      newConfig.labels.paper = labelSecondOption;
      newConfig.labels.scissors = labelThirdOption;
      newConfig.screens.choice.title = screenChoiceTitle;
      newConfig.screens.choice.subtitle = screenChoiceSubtitle;
      newConfig.screens.result.won = screenResultWon;
      newConfig.screens.result.lost = screenResultLost;
      newConfig.screens.result.draw = screenResultDraw;
      newConfig.screens.result.replay = screenResultReplay;
      newConfig.screens.result.feedback.won = screenResultFeedbackWon;
      newConfig.screens.result.feedback.lost = screenResultFeedbackLost;
      newConfig.screens.result.feedback.draw = screenResultFeedbackDraw;
      resolve(newConfig);
    } catch (e) {
      reject(e);
    }
  });

export { transform };
