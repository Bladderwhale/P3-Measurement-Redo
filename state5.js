demo.state5 = function(){};
demo.state5.prototype = {
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state5");
        addChangeStateEventListers();
    },
    update:function(){
        
    }
    
};