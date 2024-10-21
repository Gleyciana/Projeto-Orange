/// <reference types="cypress" />

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboarPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
    beforeEach(() => {
    cy.visit('/auth/login')
  
  })

  it('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboarPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.string(),chance.last())
    myInfoPage.fillEmployeeDetails(chance.zip(),chance.zip(),chance.cpf(),'2025-10-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})