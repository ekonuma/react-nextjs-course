import { hello } from "./module.js"
import { User } from "./module.js"
import functionB from "./module.js"

hello();
functionB();
const user = new User('Tom');
user.hello();