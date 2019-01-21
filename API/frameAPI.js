var debugXPos = 0;
var debugYPos = 0;

//Global Uses

//--Scale Canvas With Window: 
//scalingCanvasWindow(width, height, gameInstance)

//--Limit Input TextBox with only numbers: 
//limitNumberInput()                             ||||||||||||||||||||||||||||||
//Sample Usage: "<input id="textbox" type="text" onkeydown="limitNumberInput()" name="answer" autofocus/>"

//--Limit Input TextBox with limited number length:  
//inputNumberValidation(id, maxLength, maxNumber)

//--Update HTML DOM element with Phaser Canvas:  (xOffSet not very accurate, do make fine tuning)
//updateInputBoxPosition(defaultFontSize, id, xOffSet, yOffSet, debugMode, gameInstance)

//Debug Uses

//--Object follow cursor to find position: 
//cursorUpdate(obj, xOffSet, yOffSet, gameInstance)

//--To be used with "Update HTML DOM element with Phaser Canvas" 
//with up down left right button to debug position: 
//keyboardInputDebugging(gameInstance)

//--To debug cursorUpdate position in render function: 
//debugInRender(obj, hasPosition, hasAnchor, hasRotation, gameInstance)


function scalingCanvasWindow(width, height, gameInstance) {
    gameInstance.input.maxPointers = 1;

    if (gameInstance.game.device.desktop) {
        gameInstance.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        gameInstance.stage.forcePortrait = true;
        gameInstance.scale.setScreenSize = true;
    } else {
        gameInstance.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        gameInstance.scale.forceLandScape = true;
    }
    gameInstance.scale.setMinMax(128, 72, width, height);
    gameInstance.scale.pageAlignHorizontally = true;
    gameInstance.scale.pageAlignVertically = true;

    gameInstance.game.canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };

}

//Used for positioning debugging
function cursorUpdate(obj, xOffSet, yOffSet, gameInstance) {
    if (typeof obj != "undefined") {
        if (obj != null) {
            obj.x = gameInstance.game.input.mousePointer.x + xOffSet;
            obj.y = gameInstance.game.input.mousePointer.y + yOffSet;
        }
    }
}

function debugInRender(obj, hasPosition, hasAnchor, hasRotation, gameInstance) {
    if (typeof obj != "undefined") {
        if (obj != null) {
            if (hasPosition)
                gameInstance.game.debug.text('xPos:' + obj.x + '/yPos:' + obj.y, 400, 400);
            if (hasAnchor)
                gameInstance.game.debug.text('X Anchor:' + obj.anchor.x + '/Y Anchor:' + obj.anchor.y, 400, 300);
            if (hasRotation)
                gameInstance.game.debug.text('Rotation:' + obj.angle, 400, 350);
        }
    }
}

function limitNumberInput() {
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if (key < 48 || key > 57) {
        if (key == 8 || key == 46) {

        } else {
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;
        }
    }
}

function inputNumberValidation(id, maxLength, maxNumber) {
    cacheValue = document.getElementById(id).value;
    //090 or 009 are not allow as such of the number 0
    if (cacheValue.length > 1 && cacheValue.charAt(0) == '0') {
        document.getElementById(id).value = cacheValue.slice(1, 10);
    }
    //Slice the values to maxLength of numbers
    if (cacheValue.length > maxLength) {
        document.getElementById(id).value = cacheValue.slice(0, maxLength);
    }
    //Limit Numbers up to 100 without changing user input
    if (cacheValue > maxNumber && cacheValue < (maxNumber * 10)) {
        if (cacheValue != maxNumber)
            document.getElementById(id).value = cacheValue.slice(0, ((""+maxNumber).length - 1));
    }
    //document.getElementById(id).focus();
}

function keyboardInputDebugging(gameInstance) {
    if (gameInstance.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        debugXPos--;
    }
    if (gameInstance.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        debugXPos++
    }
    if (gameInstance.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        debugYPos++;
    }
    if (gameInstance.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        debugYPos--;
    }
}

function updateInputBoxPosition(defaultFontSize, id, xOffSet, yOffSet, width, height, debugMode, gameInstance) {
    if (document.getElementById(id) == null) {
        console.log(id);
    }
    //BUGFIX TODO: Offset of X is not very accurate, needed fine tuning
    if (debugMode) {
        keyboardInputDebugging(gameInstance);
        x = gameInstance.game.scale.offset.x * gameInstance.game.scale.scaleFactorInversed.x + debugXPos;
        y = gameInstance.game.scale.offset.y + (debugYPos * gameInstance.game.scale.scaleFactorInversed.y);
        console.log("dxPos:" + debugXPos + ",dyPos:" + debugYPos);
        keyboardInputDebugging(gameInstance);
    } else {
        x = gameInstance.game.scale.offset.x + gameInstance.game.scale.scaleFactorInversed.x * xOffSet;
        y = gameInstance.game.scale.offset.y + (yOffSet * gameInstance.game.scale.scaleFactorInversed.y);
    }
    textScale = gameInstance.game.scale.scaleFactorInversed.x;
    widthScale = gameInstance.game.scale.scaleFactorInversed.x;
    heightScale = gameInstance.game.scale.scaleFactorInversed.y;
    document.getElementById(id).style.fontSize = (defaultFontSize * textScale) + "em";
    document.getElementById(id).style.width = ((width * widthScale) + "px");
    document.getElementById(id).style.height = ((height * heightScale) + "px");
    document.getElementById(id).style.left = (x + "px");
    document.getElementById(id).style.top = (y + "px");
}