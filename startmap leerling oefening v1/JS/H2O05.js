function _0x143a(){var _0x880c0c=['2VWuqmK','4hgsCsD','736958OJPfEl','2200396ZJNDil','2855104tsThyK','819715OOqRiQ','446778xzzrkf','40hhoxea','2055624acCUTC','12dlexka','1363197HMqMMr','8MgwnFJ'];_0x143a=function(){return _0x880c0c;};return _0x143a();}(function(_0x5c16fa,_0x16e3d3){var _0x44f5c4=_0x4ccd,_0xb046c3=_0x5c16fa();while(!![]){try{var _0x4097e8=-parseInt(_0x44f5c4(0x10f))/0x1*(-parseInt(_0x44f5c4(0x105))/0x2)+-parseInt(_0x44f5c4(0x10d))/0x3+-parseInt(_0x44f5c4(0x104))/0x4*(-parseInt(_0x44f5c4(0x108))/0x5)+parseInt(_0x44f5c4(0x10b))/0x6+-parseInt(_0x44f5c4(0x107))/0x7*(parseInt(_0x44f5c4(0x10e))/0x8)+parseInt(_0x44f5c4(0x109))/0x9*(parseInt(_0x44f5c4(0x10a))/0xa)+-parseInt(_0x44f5c4(0x106))/0xb*(parseInt(_0x44f5c4(0x10c))/0xc);if(_0x4097e8===_0x16e3d3)break;else _0xb046c3['push'](_0xb046c3['shift']());}catch(_0x52aed4){_0xb046c3['push'](_0xb046c3['shift']());}}}(_0x143a,0x5cb76));var aantalRijenRaster=0x6,aantalKolommenRaster=0x9,celGrootte,spriteJos,xJos,yJos;function preload(){brug=loadImage('images/backgrounds/dame_op_brug_1800.jpg'),spriteJos=loadImage('images/sprites/Jos100px/Jos_0.png');}function _0x4ccd(_0x3be450,_0x937762){var _0x143a5c=_0x143a();return _0x4ccd=function(_0x4ccd26,_0x1395c9){_0x4ccd26=_0x4ccd26-0x104;var _0xcd3b43=_0x143a5c[_0x4ccd26];return _0xcd3b43;},_0x4ccd(_0x3be450,_0x937762);}function setup(){canvas=createCanvas(0x385,0x259),celGrootte=width/aantalKolommenRaster,xJos=width/0x2-0x32,yJos=height/0x2;}function draw(){background(brug),tekenRaster(),image(spriteJos,xJos,yJos);}function tekenRaster(){push(),noFill(),stroke('grey');for(var _0x311e12=0x0;_0x311e12<aantalRijenRaster;_0x311e12++){for(var _0x3f778d=0x0;_0x3f778d<aantalKolommenRaster;_0x3f778d++){rect(_0x3f778d*celGrootte,_0x311e12*celGrootte,celGrootte,celGrootte);}}pop();}