import { HttpClient } from "../../utils/HttpClient";
import { Badword } from "../entities/Badword";
import { IChecker } from "../interfaces/IChecker";

export class OpenAIChecker implements IChecker {
    private readonly client: HttpClient;

    constructor(private apiUrl: string) {
        this.client = new HttpClient(this.apiUrl);
    }

    async check(badword: Badword): Promise<boolean> {
        const { text } = badword;

        try {
            const response = await this.client.post<{ isBadword: boolean }>(
                "/badword",
                { text }
            )

            return response.isBadword;
        } catch (error) {
            console.error('Error while checking the message: ', error);
            throw new Error('Error while checking for offensive words');
        }
    }
}
