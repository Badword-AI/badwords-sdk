import { IChecker } from "../interfaces/IChecker";
import { OpenAIChecker } from "../services/OpenAIChecker";

export class CheckerFactory {
    static createAIChecker(apiUrl: string): IChecker {
        return new OpenAIChecker(apiUrl);
    }
}
