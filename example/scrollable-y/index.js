/*
 * index.js
 */

var Q = require('q'),
    qstart = require('qstart'),
    MButton = require('../../lib/index.js');

function main() {
    var h1 = document.querySelector('h1'),
        backBtn = new MButton.Touchend({
            el : document.getElementById('back'),
            f : function () {
                window.location = '../index.html';
            }
        }),
        btn1 = new MButton.ScrollableY.Touchend({
            tolerance: 10,
            el : document.getElementById('btn1'),
            f : function () {
                h1.style.color = 'rgb(219, 96, 96)';
            }
        }),
        btn2 = new MButton.ScrollableY.Touchend({
            tolerance: 10,
            el : document.getElementById('btn2'),
            f : function () {
                 h1.style.color = 'rgb(77, 158, 77)';
            }
        }),
        btn3 = new MButton.ScrollableY.Touchend({
            tolerance: 10,
            el : document.getElementById('btn3'),
            f : function () {
                h1.style.color = 'rgb(77, 136, 182)';
            }
        });

    backBtn.bind();
    btn1.bind();
    btn2.bind();
    btn3.bind();

}

qstart.then(main).done();
