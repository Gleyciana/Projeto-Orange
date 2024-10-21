/// <reference types="cypress" />

import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboarPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const dashboarPage = new DashboarPage()

describe('Login Orange HRM Tests', () => {
    beforeEach(() => {
    cy.visit('/auth/login')
  
  })

  it('Login - Success',() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboarPage.checkDashboarPage()
  
  })

  it('Login - fail',() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})