describe('Login', () => {
    beforeEach('Login', () => {
        cy.visit("https://hust-e-shopper.up.railway.app/")
    })

    it('Thong bao loi neu thieu email', ()=> {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("button#btn-login").click()
        cy.get("Thiếu email hoặc mật khẩu.").should("be.visible")
    })

    it('Thong bao loi neu thieu mat khau khi dang nhap', ()=> {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
        cy.get("input[name='email']").type('test@ltct.com')
        cy.get("button#btn-login").click()
        cy.get("Thiếu email hoặc mật khẩu").should("be.visible")
    })

    it('Hien thi modal dang ki khi click vao Dang ky ngay tu modal Dang nhap',() => {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
        cy.contains("Đăng ký ngay").click()
        cy.contains("Đăng ký nhanh").should("be.visible")
    })

    // it('Test server dang nhap khong thanh cong', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://api-admin-dype.onrender.com/api/login',
    //         body: {
    //             email: 'youruser@example.com',
    //             password: 'yourpassword'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(404)
    //         expect(response.body).to.have.property('message', 'Email does not exist')
    //     })
    // })
    it('Test server dang nhap thanh cong', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-admin-dype.onrender.com/api/login',
            body: {
                email: 'youremail@example.com',
                password: 'yourpassword'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })


})