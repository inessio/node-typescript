import { Request, Response } from 'express'
import User from '../models/user'
import fs from 'fs'

export let index = (req: Request, res: Response) => {
    let languages = [
        {
            language : "french"
        },
        {
            language: "english"
        },
        {
            language: "Spanish"
        }
    ]

    res.json(languages)
};

export let users = (req: Request, res: Response) => {
    let users = [
        new User('David','Yartey','davido@gmail.com'),
        new User('faisal', 'Alhaji', 'aladji@gmail.com'),
        new User('john', 'Doe', 'johndoe@gmail.com')
    ] 
    res.json(users)

}

export let create = (req: Request, res: Response) => {
    let param = req.body;
    let user = new User(param.username, param.name, param.email)
    res.json(user)
    console.log(user);
}