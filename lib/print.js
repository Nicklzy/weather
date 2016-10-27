/**
 * Created by NICK on 2016/10/27.
 */
function printDefault(obj){
    var data = obj.results[0]
    console.log('城市',data.currentCity);
    var everyday = data.weather_data;
    everyday.forEach(function (arr) {
        console.log(arr.date,arr.weather,arr.temperature+' ',arr.wind)
    })
    console.log('生活指数')
    var life = obj.results[0].index;
    life.forEach(function (arr) {
        console.log(arr.des)
    })
}


function print(obj) {
    console.log('城市',obj.basic.city)
    console.log('当前天气',obj.now.cond.txt,'当前温度',obj.now.tmp+'度','相对湿度',obj.now.hum+'%',obj.now.wind.dir,'风力' + obj.now.wind.sc+'级')
    console.log('7天天气预报')
    var dayCast = obj.daily_forecast;
    dayCast.forEach(function (data) {
        if(dayCast[0]==data){
            console.log(data.date+'(今天)',data.cond.txt_n,'温度',data.tmp.min+'~'+data.tmp.max+'℃',' 相对湿度',data.hum+'%',data.wind.dir,'风力' + data.wind.sc+'级')
            return
        }
        console.log(data.date,data.cond.txt_n,'温度',data.tmp.min+'~'+data.tmp.max+'℃',' 相对湿度',data.hum+'%',data.wind.dir,'风力' + data.wind.sc+'级')
    })
    console.log('生活指数')

    var lifeList = obj.suggestion;
    for(var key in lifeList){
        console.log(lifeList[key].txt)
    }
}


module.exports ={
    print: print,
    printDefault: printDefault
}