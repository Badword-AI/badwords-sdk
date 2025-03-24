import { Badword } from "../entities/Badword";

export interface IChecker {
    check(badword: Badword): Promise<boolean>;
}
