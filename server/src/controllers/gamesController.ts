import { Request, Response } from 'express'

import pool from '../database/database'

class GamesController {

    public async index(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games')
        res.json(games)
    }

    public async getById(req: Request, res: Response): Promise<any> {
        const { id } = req.params
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id])
        if (game.length > 0)
            return res.json(game[0])
        res.status(404).json({message: 'Game not found'})
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body])
        res.json({message: 'Game saved'})
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id])
        res.json({text: 'Game updated: ' + id})
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        await pool.query('DELETE FROM games WHERE id = ?', [id])
        res.json({text: 'Game deleted: ' + id})
    }

}

export const gamesController = new GamesController()