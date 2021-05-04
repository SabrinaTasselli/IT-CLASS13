describe("Google Page search Wikipedia", () => {
    beforeAll("open browser", () => {
        return browser.url("https://google.com");
    });
    it("find search bar in DOM", () =>{
        let input = $("form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
        expect(input).toExist();
    });
    it("entering wikipedia in the browser", () =>{
        let input = $("form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
        input.addValue("wikipedia");
        browser.keys("Enter");
        browser.pause(2000);
    });
    it("find wikipedia in DOM", () =>{
        let wikiPage = $("#rso > div:nth-child(1) > div > div > div.yuRUbf > a > h3");
        expect(wikiPage).toExist();
    });
    it("entering to Wikipedia page ", () =>{
        let wikiPage = $("#rso > div:nth-child(1) > div > div > div.yuRUbf > a > h3");
        wikiPage.click();
        browser.pause(2000);
    });
    it("validating wikipedia URL in DOM", () =>{
        expect(browser.getUrl()).toMatch("https://es.wikipedia.org/wiki/Wikipedia:Portada");
    });
});