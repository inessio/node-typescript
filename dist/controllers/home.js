"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
exports.index = function (req, res) {
    var languages = [
        {
            language: "french"
        },
        {
            language: "english"
        },
        {
            language: "Spanish"
        }
    ];
    res.json(languages);
};
exports.users = function (req, res) {
    var users = [
        new user_1.default('David', 'Yartey', 'davido@gmail.com'),
        new user_1.default('faisal', 'Alhaji', 'aladji@gmail.com'),
        new user_1.default('john', 'Doe', 'johndoe@gmail.com')
    ];
    res.json(users);
};
exports.create = function (req, res) {
    var param = req.body;
    var user = new user_1.default(param.username, param.name, param.email);
    res.json(user);
    console.log(user);
};
