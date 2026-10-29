import {faker} from '@faker-js/faker'

export class fakerdata{
    static getname(){
        return faker.person.fullName()
    }
    static getaddress(){
        return faker.location.postalAddress()
    }
    static getcity(){
        return faker.location.city()
    }
    static getemail(){
        return faker.internet.email()
    }
    static getpwd(){
        return faker.internet.password()
    }
}