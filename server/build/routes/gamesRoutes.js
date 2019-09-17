"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.gamesController.index);
        this.router.get('/:id', gamesController_1.gamesController.getById);
        this.router.post('/', gamesController_1.gamesController.create);
        this.router.put('/:id', gamesController_1.gamesController.update);
        this.router.delete('/:id', gamesController_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
