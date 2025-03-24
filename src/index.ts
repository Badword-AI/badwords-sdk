import { CheckerFactory } from "./core/factories/CheckerFactory";
import { config } from "./config";

const badword = CheckerFactory.createAIChecker(config.apiUrl);

export { badword };
