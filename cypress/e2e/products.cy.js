describe('Products', () => {
    beforeEach('Visits the Home Page', () => {
        cy.visit('https://hust-e-shopper.up.railway.app')
    })
    it('Hien thi chi tiet sp khi bam vao xem chi tiet', () => {
        cy.contains("Xem chi tiết").click()
        cy.contains("Sizes").should("be.visible")
        cy.contains("Colors").should("be.visible")
    })
})