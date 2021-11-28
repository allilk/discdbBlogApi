import express from "express";
import { Sequelize } from "sequelize/dist";
import { model } from "./DataLayer/Models/BlogPost";

const app = express();

app.listen(3000);

app.get('/v1', (req, res) => {
    res.send('testtesttes');
});

const context: Sequelize = new Sequelize('blog', 'joemama', 'password123', {
    host: 'postgres',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

const blogs = model(context);

blogs.findAll()
    .then(x => console.log(x));
