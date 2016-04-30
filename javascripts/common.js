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
