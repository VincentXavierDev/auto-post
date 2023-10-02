describe('Tự động đăng bài lên trang cá nhân', () => {
    it('Đăng bài', () => {
        cy.visit('https://mbasic.facebook.com/login')
        cy.login('account.json')
     })
})