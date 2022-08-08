import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor(){
        super(`/api/burgers`)

        this.router
        .get('', this.getBurgers)
        .get(`/:burgerId`, this.getBurgerById)
        .post('', this.createBurger)
        .delete(`/:burgerId`, this.deleteBurger)
        .put(`/:burgerId`, this.editBurger)
    }

    // [HTTP GET]
    async getBurgers(req, res, next){
        try {
            let burgers = await burgersService.getBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    // GET BY ID
    async getBurgerById(req, res, next){
        try {
            let burger = await burgersService.getBurgerById(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    // CREATE
    async createBurger(req, res, next){
        try {
            let burgerData = req.body
            let burger = await burgersService.createBurger(burgerData)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    // DELETE BY ID
    async deleteBurger(req, res, next){
        try {
            let burger = await burgersService.deleteBurger(req.params.burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    // EDIT BY ID
    async editBurger(req, res, next){
        try {
            let burger = await burgersService.editBurger(req.params.burgerId, req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }


}
