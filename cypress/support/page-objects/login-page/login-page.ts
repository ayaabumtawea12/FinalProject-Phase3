
class LoginPage {
    elements = {
        // userName: () => cy.get('[placeholder="Username"]'),
        userName: () => cy.get('[placeholder="Username"]'),

        // password: () => cy.get('[placeholder="Password"]'),
        password: () => cy.get('[placeholder="Password"]'),

        loginBtn: () => cy.get('button'),
        selectLogout:()=>cy.get('.oxd-userdropdown-tab'),

        logout:()=>cy.get('.oxd-userdropdown-link')

    }
    login(username:any,password:any) {
        this.elements.userName().type(username);
        this.elements.password().type(password);
        this.elements.loginBtn().click({force: true});
       // cy.get('.oxd-topbar-header-breadcrumb-module').should('contain','Dashboard');
    }

/*
    logout = () => {
        return cy.api('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',{})
    }

*/

    logoutt=()=>{
        this.elements.selectLogout().click({ force: true });
        this.elements.logout().eq(3).click({force: true});
    }









}

export default LoginPage;