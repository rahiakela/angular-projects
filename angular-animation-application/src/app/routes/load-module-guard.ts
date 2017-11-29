import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { MessageService } from "../message/message.service";
import { Message } from "../message/message.model";

@Injectable()
export class LoadModuleGuard {

    private loaded: boolean = false;

    constructor(private messageService: MessageService, private router: Router) {}

    canLoad(route: Route): Promise<boolean> | boolean {
        return this.loaded || new Promise<boolean>((resolve, reject) => {
            const responses: [[string, (string) => void]] = [
                ['Yes', () => {
                    this.loaded = true;
                    resolve(true);
                }],
                ['No', () => {
                    this.router.navigateByUrl(this.router.url);
                    resolve(false);
                }]
            ];

            this.messageService.reportMessage(new Message('Do you want to load the module?', false, responses));
        });
    }
}