
window.onload = function(){
cc.game.onStart = function(){


    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(1136, 640, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);



    cc.director.runScene(new cabbageScence());
 
};
cc.game.run();
};
