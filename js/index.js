var app=angular.module("myApp",[]);
app.controller("control",["$scope","$filter",function($scope,$filter){
    $scope.data=[
        {id:2,name:"javascript",price:100,num:15},
        {id:3,name:"php",price:50,num:4},
        {id:4,name:"java",price:200,num:4}
    ];
    //获得购物车总数量
    $scope.getNum=function(){
        var sum=0;
        $scope.data.forEach(function(val,index){
            var newNum=val.num;
            if(parseInt(newNum)>0&&parseInt(newNum)){
                sum+=parseInt(newNum);
                val.num=parseInt(newNum);
            }else{
                val.num=0;
            }
        })
        return sum;
     }

     $scope.getPrice=function () {
         var sum=0;
         $scope.data.forEach(function(val,index){
             sum+=val.price*val.num;
             })
             return sum;
     }
     $scope.del=function (para) {
         $scope.data.forEach(function (val,index) {
             if(val.id===para){
                 $scope.data.splice(index,1);
             }
         })
     }
     $scope.clear=function(){
        $scope.data=[];
     }

     //加
    $scope.add=function(para){
         $scope.data.forEach(function(val,index){
             if (val.id===para){
                 val.num++;
             }
         })
    }

    $scope.reduce=function(para){
        $scope.data.forEach(function (val,index) {
            if(val.id===para){
                val.num--;
            }
        })
    }




}])