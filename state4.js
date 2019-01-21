demo.state4 = function(){};
demo.state4.prototype = {
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state4");
        addChangeStateEventListers();

    },
    update:function(){
    }
    
};
