
describe('Home Page', () => {
    beforeEach('Visits the Home Page', () => {
      cy.visit('https://hust-e-shopper.up.railway.app/')
    })

    it('Hien thi modal Dang nhap khi click vao Dang nhap', () => {
        cy.contains("Đăng nhập").click()
        cy.contains("Email").should("be.visible")
    })

    it('Hien thi modal Dang ky khi click vao Dang ky', () => {
        cy.contains("Đăng ký").click()
        cy.contains("Email").should("be.visible")
    })

    it('Hien thi trang san pham khi click vao "Cua hang"', () => {
        cy.contains("Cửa hàng").click()
        cy.contains("Lọc theo giá").should("be.visible")
    })

    it('Hien thi drop down khi click vao "Đơn hàng"', () => {
        cy.contains("Đơn hàng").click()
        cy.contains("Giỏ hàng").should("be.visible")
    })

    it('Hien thi giỏ hàng khi click vao "Giỏ hàng"', () => {
        cy.contains("Đơn hàng").click()
        cy.contains("Giỏ hàng").click()
        cy.contains("Sản phẩm").should("be.visible")      
    })

    it('Hien thi list categories with mock', () => {
        cy.intercept("GET", "https://hust-e-shopper.up.railway.app/", {
            fixture: "home.json"
        })
        cy.get("[class='row px-xl-5 pb-3']").find("[class='col-lg-4 col-md-6 pb-1']")
        .should("contain", "Polo")
        .should("contain", "Dress")
    })

    it('Hien thi list products with mock', () => {
        cy.intercept("GET", "https://hust-e-shopper.up.railway.app/", {
            fixture: "home.json"
        })
        cy.get("[class='row px-xl-5 pb-3']").find("[class='card product-item border-0 mb-4']")
        .should("contain", "aaaa1guibs1")
        .should("contain", "QU\u1ea6N JEAN NAM TR\u01a0N FORM SKINNY")
    })

    it('Hien thi giỏ hàng khi click vao cart-icon', () => {
        cy.get("[class='fas fa-shopping-cart text-primary']").click()
        cy.contains("Sản phẩm").should("be.visible")      
    })

})