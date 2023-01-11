describe('Sign up', () => {
    beforeEach('Sign up', () => {
        cy.visit("https://hust-e-shopper.up.railway.app")
        cy.contains("Đăng ký").click()
    })

        it('Thong bao loi neu thieu mat khau khi dang ky', ()=> {
        //cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("button#btn-signup").click()
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu thieu ho ten', ()=> {
        //cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('123456')
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu dia chi email khong hop le', () => {
       // cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('123456')
        cy.get(".validate-icon").should("be.visible")
    })

    it('Thong bao loi neu password và confirmPassword khong trung nhau', ()=> {
       // cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='name']").type('test')
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("input[name='password']").type('123456')
        cy.get("input[name='confirmPassword']").type('1234567')
        cy.get("input[name='confirmPassword']").should("be.visible")
    })

    it('Hien thi modal dang nhap khi click vao Dang nhap ngay tu modal Dang ky',() => {
       // cy.contains("Đăng ký").click()
       // cy.contains("Email").should("be.visible")
        cy.contains("Đăng nhập ngay!").click()
        cy.get("button#btn-login").should("be.visible")
    })

    it('Test server dang ky dang ky thanh cong', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-admin-dype.onrender.com/api/user/user',
            body: {
                name: 'yourusername6',
                email: 'youremail6@example.com',
                password: 'yourpassword',
                confirmPassword: 'yourpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})