import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable()
export class UserService {
    isLoggedIn = false;
    user;

    login(username, password) {
        return new Promise((resolve, reject) => {
            // TODO: replace login condition by your authentication
            if (username == "admin" && password == "admin") {
                this.isLoggedIn = true;

                // TODO: fill info for your user (if need)
                this.user = new User();

                resolve();
            }

            reject();
        });
    }

    logout() {
        this.isLoggedIn = false;
        this.user = null;
        // TODO: Navigate user to homepage or some landing page
    }
}