(function() {
    describe('User', function () {
        it('test1', function (done) {
            getElementByTestId("test-addButton").click();
            wait(done);
        });
    });
})();

function getElementByTestId(testId) {
    return document.querySelector(`[data-test-id="${testId}"]`);
}


// function tryDo(doStuff, seconds, done) {
//     let startTime = new Date();
//     let milliseconds = 2000;
//     var deadline = new Date(startTime.getTime() + milliseconds);
//     var now = new Date();

//     console.log(now.getTime());
//     console.log(deadline.getTime());





//     var t;
//     while (now.getTime() <= deadline.getTime() && !t) {
//         t = getElementByTestId("test-p");
//         now = new Date();
//     }
//     console.log(t);
//     console.log(now.getTime());
//     done();
// }

function wait(done){
    var p = getElementByTestId("test-p");
    if (!p){
        setTimeout(wait, 100, done);
    } else {
        debugger;
        if (p.innerText == "Hello World") {
            done();
        } else {
            done(new Error("Unexpected innerText"));
        }
    }
}