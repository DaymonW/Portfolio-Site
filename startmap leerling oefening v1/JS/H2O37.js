var _0x269b7e=_0x2886;function _0x2886(_0x209096,_0x4849b1){var _0x16f610=_0x16f6();return _0x2886=function(_0x288671,_0x437e1d){_0x288671=_0x288671-0xa6;var _0x2ccb5a=_0x16f610[_0x288671];return _0x2ccb5a;},_0x2886(_0x209096,_0x4849b1);}(function(_0x30d953,_0x2bf24a){var _0x15b0ae=_0x2886,_0x3f7c08=_0x30d953();while(!![]){try{var _0x269272=-parseInt(_0x15b0ae(0xab))/0x1+-parseInt(_0x15b0ae(0xaf))/0x2*(parseInt(_0x15b0ae(0xb7))/0x3)+-parseInt(_0x15b0ae(0xb2))/0x4*(parseInt(_0x15b0ae(0xa9))/0x5)+-parseInt(_0x15b0ae(0xb1))/0x6+parseInt(_0x15b0ae(0xb0))/0x7*(-parseInt(_0x15b0ae(0xbb))/0x8)+parseInt(_0x15b0ae(0xae))/0x9*(parseInt(_0x15b0ae(0xb9))/0xa)+-parseInt(_0x15b0ae(0xb6))/0xb*(-parseInt(_0x15b0ae(0xb5))/0xc);if(_0x269272===_0x2bf24a)break;else _0x3f7c08['push'](_0x3f7c08['shift']());}catch(_0xe53229){_0x3f7c08['push'](_0x3f7c08['shift']());}}}(_0x16f6,0xdf27b));class Knikker{constructor(){var _0x36da4c=_0x2886;this['diameter']=0x28,this[_0x36da4c(0xac)]=this[_0x36da4c(0xba)]/0x2,this['x']=random(this[_0x36da4c(0xac)],canvas[_0x36da4c(0xa8)]-this['straal']),this['y']=random(this[_0x36da4c(0xac)],canvas['height']-this[_0x36da4c(0xac)]),this[_0x36da4c(0xa6)]=random(0x1,0xa),this['snelheidY']=random(0x1,0xa);}[_0x269b7e(0xaa)](){var _0x37bf9d=_0x269b7e;this['x']+=this[_0x37bf9d(0xa6)],this['y']+=this[_0x37bf9d(0xb3)],(this['x']<this[_0x37bf9d(0xac)]||this['x']>canvas[_0x37bf9d(0xa8)]-this['straal'])&&(this[_0x37bf9d(0xa6)]*=-0x1),(this['y']<this[_0x37bf9d(0xac)]||this['y']>canvas[_0x37bf9d(0xb8)]-this[_0x37bf9d(0xac)])&&(this[_0x37bf9d(0xb3)]*=-0x1);}[_0x269b7e(0xad)](){var _0x3421ae=_0x269b7e;fill(0xff,0xff,0xff,0x1),ellipse(this['x'],this['y'],this[_0x3421ae(0xba)]);}}var knikkerVerzameling=[];function setup(){var _0x45a245=_0x269b7e;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),colorMode(RGB,0xff,0xff,0xff,0x1),background(0x0,0x0,0x4b,0x1),noStroke();for(i=0x0;i<0xa;i++){knikkerVerzameling[_0x45a245(0xb4)](new Knikker());}}function _0x16f6(){var _0x489f66=['1569315etMjTv','straal','teken','11025MMPxAh','152472irJqdp','6456058pskrjQ','7786098KYYIHr','7097972zheCjR','snelheidY','push','828516DYjFWF','1111klHLSi','45LNJvIG','height','5290FaakhG','diameter','8uFUUKE','snelheidX','length','width','5PmtFyA','beweeg'];_0x16f6=function(){return _0x489f66;};return _0x16f6();}function draw(){var _0x2a9604=_0x269b7e;background(0x0,0x0,0x4b,0.2);for(k=0x0;k<knikkerVerzameling[_0x2a9604(0xa7)];k++){knikkerVerzameling[k][_0x2a9604(0xad)](),knikkerVerzameling[k]['beweeg']();}}