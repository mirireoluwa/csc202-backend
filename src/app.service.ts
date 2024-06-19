import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  [x: string]: any;

  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'Hello, Welcome to ToothFixers!', title: 'ToothFixers'};
  }

  getHome(): {} {
    return {title: 'Home page'};
  }

  getAboutUs(): {} {
    return {title: 'About Us Page'};
  }

}
