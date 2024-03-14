import Article from "../models/articleSchema.js";
import Event from "../models/eventSchema.js";
import Member from "../models/memberSchema.js";
import articles from "./articles.js";
import events from "./events.js";
import members from "./members.js";


async function importData() {

    try {
        await Article.create(articles)
    } catch (error) {
        console.log(error)
    }
}

if (process.argv[2] === '--import') importData()