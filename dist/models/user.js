"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // username: String;
    // name: String;
    // email: String;
    function User(username, name, email) {
        this.username = username;
        this.name = name;
        this.email = email;
        // this.username = username ;
        // this.name = name;
        // this.email = email;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.default = User;
