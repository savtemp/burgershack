import { FAKE_DB } from "../db/FakeDB.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {

    async getBurgers(){
        return FAKE_DB.burgers
    }

    async getBurgerById(burgerId){
        let burger = FAKE_DB.burgers.find(b => b.id == burgerId)
        if(!burger){
            throw new BadRequest('Invalid Id')
        }
        return burger
    }

    async createBurger(burgerData){
        burgerData.id = FAKE_DB.burgers.length
        FAKE_DB.burgers.push(burgerData)
        return burgerData
    }

    async deleteBurger(burgerId){
        let burger = await this.getBurgerById(burgerId)
        let burgerIndex = FAKE_DB.burgers.indexOf(burger)
        FAKE_DB.burgers.splice(burgerIndex, 1)

        return burger
    }

    async editBurger(burgerId, burgerData){
        let burger = await this.getBurgerById(burgerId)
        
        burger.name = burgerData.name || burger.name
        burger.price = burgerData.price || burger.price

        return burger
    }
}


export const burgersService = new BurgersService()