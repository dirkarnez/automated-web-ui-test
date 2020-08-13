describe('User', function () {
    it('test1', function (done) {
        getElementByTestId("test-addButton").click();
    
        var handler = setTimeout(function() {
            var p = getElementByTestId("test-p");
            if (p) {
                done();
                //chai.assert.equal([1, 2, 3].indexOf(4), -1);
            } else {
                done(new Error("timeout"));
            }
            clearTimeout(handler);
        }, 1500);
    });
});
  function getElementByTestId(testId) {
    return document.querySelector(`[data-test-id="${testId}"]`);
  }