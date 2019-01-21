demo.state3 = function(){};
demo.state3.prototype = {
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state3");
        addChangeStateEventListers();
    },
    update:function(){
    }
    
};