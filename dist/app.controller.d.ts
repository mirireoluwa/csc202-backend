import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createForm(): void;
    getHello(): string;
    getHello2(): {};
    getHome(): {};
    getAboutUs(): {};
}
