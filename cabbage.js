var zimuSprite = cc.Sprite.extend({
    name_zimu:null,
    position:null,

    ctor:function(filename, zimu_name,position){
        this._super(filename);
        this.name_zimu = zimu_name;
        this.position = position;
        cc.log("x:"+position.x+" y:"+position.y);
    },
    setZimuName:function(zimu_name){
        this.name_zimu = zimu_name;
    },
    getZimuName:function(){
        return this.name_zimu;
    },
    setPosition:function(position){
        this.position = position;
    },
    getPosition:function(){
        return this.position;
    }

});

var targetSprite = cc.Sprite.extend({
    name_zimu:null,
    zimu_status:null,

    ctor:function(filename, zimu_name,status){
        this._super(filename);
        this.name_zimu = zimu_name;
        this.zimu_status = status;
    },
    setZimuName:function(zimu_name){
        this.name_zimu = zimu_name;
    },
    getZimuName:function(){
        return this.name_zimu;
    },
    setStatus:function(status){
        this.zimu_status = status;
    },
    getStatus:function(){
        return this.zimu_status;
    }
});


var cabbageLayer=cc.Layer.extend({
    array_sprite_target:null,
    array_sprite_zimu:null,
    array_zimu:null,
    sprite_background:null,
    n:null,
    n_index:null,
    ctor:function(){
        this._super();
        this.array_zimu=["C","A","B","B","A","G","E"];
        this.array_sprite_target=[];
        this.array_sprite_zimu=[];
        this.n=[0,0,0,0,0,0,0];
        this.n_index=0;
        var size=cc.winSize;
        var layerColor=new cc.LayerColor(cc.color(200,55,228),1136,640);
        this.addChild(layerColor,0);
        this.sprite_background=new cc.Sprite("res/second/101juanxincai.png");
        this.sprite_background.x = size.width / 2;
        this.sprite_background.y = size.height / 2;
        this.addChild(this.sprite_background, 1);

        for(var i=0;i<7;i++){
            this.array_sprite_target[i]=new targetSprite("res/second/cabbage/"+this.array_zimu[i]+"3.png",this.array_zimu[i],false);
            this.array_sprite_target[i].x=size.width/2-320+i*111;
            this.array_sprite_target[i].y=size.height/2-226;
            this.addChild(this.array_sprite_target[i],2);
        }

        this.array_sprite_zimu[0]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[0]+".png",this.array_zimu[0],{x:size.width/2-170-132,y:size.height/2-80+120*0});
        this.array_sprite_zimu[1]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[1]+"1.png",this.array_zimu[1],{x:size.width/2-132-170+620*1,y:size.height/2-80+120*0});
        this.array_sprite_zimu[2]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[2]+"1.png",this.array_zimu[2],{x:size.width/2-132-230+15,y:size.height/2-80+120*1+15});
        this.array_sprite_zimu[3]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[3]+"2.png",this.array_zimu[3],{x:size.width/2-132-170+650*1+15,y:size.height/2-80+120*1+15});
        this.array_sprite_zimu[4]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[4]+"2.png",this.array_zimu[4],{x:size.width/2-132-170+15,y:size.height/2+80+110*1+15});
        this.array_sprite_zimu[5]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[5]+".png",this.array_zimu[5],{x:size.width/2-132-200+600*1+15,y:size.height/2+80+110*1+15});
        this.array_sprite_zimu[6]=new zimuSprite("res/second/cabbage/"+"3"+this.array_zimu[6]+".png",this.array_zimu[6],{x:size.width/2,y:size.height/2+80+110*1+15});
        
        for(var i=0;i<7;i++){
        this.array_sprite_zimu[i].x=this.array_sprite_zimu[i].getPosition().x;
        this.array_sprite_zimu[i].y=this.array_sprite_zimu[i].getPosition().y;
        this.addChild(this.array_sprite_zimu[i],2);
        }

        this.backcartoon();



        var self = this;
        var sprite_listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());                                                                         
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);                                                                
                if (cc.rectContainsPoint(rect, locationInNode)) { target.runAction(new cc.scaleTo(0.5,1.2)) ; return true;}
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
           
                var goal_rect = target.getBoundingBox();
                var sprite_0_rect =self.array_sprite_target[0].getBoundingBox();
                var sprite_1_rect =self.array_sprite_target[1].getBoundingBox();
                var sprite_2_rect =self.array_sprite_target[2].getBoundingBox();
                var sprite_3_rect =self.array_sprite_target[3].getBoundingBox();
                var sprite_4_rect =self.array_sprite_target[4].getBoundingBox();
                var sprite_5_rect =self.array_sprite_target[5].getBoundingBox();
                var sprite_6_rect =self.array_sprite_target[6].getBoundingBox();
        
                if(self.array_sprite_target[0].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_0_rect)){   
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+0*111;
                    target.y = size.height / 2.0 -226;
                    alert("C success") 
                    self.array_sprite_target[0].setStatus(true);
                    if(!self.n[0]){self.n_index++;self.n[0]=1}
                    if(self.n_index==7){
                    self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                    self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }                                                           
                }else if(!self.array_sprite_target[1].getStatus()&&self.array_sprite_target[1].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_1_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+1*111;
                    target.y = size.height / 2.0 -226;
                    alert("A success") 
                    self.array_sprite_target[1].setStatus(true);
                    if(!self.n[1]){
                        self.n_index++;self.n[1]=1}
                    if(self.n_index==7){
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                }else if(!self.array_sprite_target[2].getStatus()&&self.array_sprite_target[2].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_2_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+2*111;
                    target.y = size.height / 2.0 -226;
                    alert("B success") 
                    self.array_sprite_target[2].setStatus(true);
                    if(!self.n[2]){
                        self.n_index++;self.n[2]=1}
                    if(self.n_index==7){
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                }else if(!self.array_sprite_target[3].getStatus()&&self.array_sprite_target[3].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_3_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+3*111;
                    target.y = size.height / 2.0 -226;
                    alert("B success") 
                    self.array_sprite_target[3].setStatus(true);
                    if(!self.n[3]){
                        self.n_index++;self.n[3]=1}
                    if(self.n_index==7){
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                }else if(!self.array_sprite_target[4].getStatus()&&self.array_sprite_target[4].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_4_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+4*111;
                    target.y = size.height / 2.0 -226;
                    alert("A success") 
                    self.array_sprite_target[4].setStatus(true);
                    if(!self.n[4]){
                        self.n_index++;self.n[4]=1}
                    if(self.n_index==7){
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                }else if(!self.array_sprite_target[5].getStatus()&&self.array_sprite_target[5].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_5_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+5*111;
                    target.y = size.height / 2.0 -226;
                    alert("G success") 
                    self.array_sprite_target[5].setStatus(true);
                    if(!self.n[5]){
                        self.n_index++;self.n[5]=1}
                    if(self.n_index==7){
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                }else if(!self.array_sprite_target[6].getStatus()&&self.array_sprite_target[6].getZimuName() == target.getZimuName() && cc.rectIntersectsRect(goal_rect, sprite_6_rect)){                       
                    target.runAction(new cc.scaleTo(0.5,1)) ;
                    target.x = size.width / 2.0 -320+6*111;
                    target.y = size.height / 2.0 -226;
                    alert("E success") 
                    self.array_sprite_target[6].setStatus(true);
                    if(!self.n[6]){
                        self.n_index++;self.n[6]=1}
                    if(self.n_index==7){
                        // self.scheduleOnce(self.vegetableAction,1.2);
                        // self.vegetableAction();
                        self.scheduleOnce(function(){ alert("gongxi xuehui dan ci cabbage")},1.2);
                        self.scheduleOnce(function(){ cc.director.pushScene(new cc.TransitionSlideInR(2, new tomatoScence()));},1.3);
                    }     
                                                                         
                } else{
                        target.runAction(new cc.scaleTo(0.5,1)) ;
                        //target.removeAllActions();
                        // var action = new cc.scaleTo(0.5,1);
                        // cc.log(action);
                        // target.runAction(new cc.moveBy(0.5,100,100));
                        target.x = target.getPosition().x;
                        target.y = target.getPosition().y;
                        alert("failed");
                }
            }
                               
        });

        cc.eventManager.addListener(sprite_listener,  this.array_sprite_zimu[0]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[1]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[2]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[3]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[4]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[5]);
        cc.eventManager.addListener(sprite_listener.clone(), this.array_sprite_zimu[6]);
 
},
vegetableAction:function(){
    for(var i=0;i<7;i++){
        this.array_sprite_zimu[i].runAction(new cc.moveBy(1,cc.p(0,200)));
    }
},
backcartoon:function(){
        var action1=new cc.rotateBy(0.6,15);
        var action=new cc.RepeatForever.create(cc.Sequence.create(action1,action1.reverse()));
        this.sprite_background.runAction(action);  
    },

});

var cabbageScence = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new cabbageLayer();
        this.addChild(layer);
    }
});