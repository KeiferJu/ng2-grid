import { Component} from '@angular/core';

@Component({
    selector: 'sequare',
    templateUrl:'sequare.component.html',
    styleUrls:['sequare.component.scss']
})
export class SequareComponent  {
  
    data = [
    //    {"id":1,"name":"examples","title":"第一张地图","description":"显示第一张地图.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/examples.html"},
    // {"id":2,"name":"add-control","title":"地图控件","description":"在地图上显示地图缩放条和比例尺控件.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/addcontrol.html"},
    // {"id":3,"name":"map-click","title":"地图事件","description":"点击地图获得经纬度、添加标注.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/mapclick.html"},
    // {"id":4,"name":"add-marker","title":"添加标注","description":"在地图的指定位置添加标注.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/addmarker.html"},
    // {"id":5,"name":"add-popup","title":"添加信息框","description":"在地图的指定位置显示信息框.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/addpopup.html"},
    // {"id":6,"name":"add-circle","title":"添加圆形","description":"在地图上绘制一个固定大小的圆.","icon": "../assets/1.png","groupId": "simaple","url": "examples/web/draw-circle.html"},
    {"id":101,"name":"scatter-weibo","title":"灯光图","description":"采用微博签到数据制作的灯光图.","icon": "./assets/0804_17.gif","groupId": "stats","url": "examples/web/stats/scatter-weibo.html"},
    {"id":102,"name":"scatter-station","title":"北京灯光图","description":"北京灯光图","icon": "./assets/0804_05.jpg","groupId": "stats","url": "examples/web/stats/scatter-station.html"},
    {"id":103,"name":"cluster-station","title":"按距离聚合","description":"按照公交站点在地图上显示的距离进行聚合.","icon": "./assets/0804_07.gif","groupId": "stats","url": "examples/web/stats/cluster-station.html"},
    {"id":104,"name":"hotmap-station","title":"热力图","description":"公交站点分布的热力图.","icon": "./assets/0804_15.gif","groupId": "stats","url": "examples/web/stats/hotmap-station.html"},
    {"id":105,"name":"hotmap-station2","title":"热力图2","description":"公交站点分布的热力图.","icon": "./assets/0804_09.gif","groupId": "stats","url": "examples/web/stats/hotmap-station2.html"},
    {"id":106,"name":"lines-airline","title":"全球航班航线图","description":"全球多城市间航班航线图.","icon": "./assets/0804_16.jpg","groupId": "stats","url": "examples/web/stats/lines-airline.html"},
    {"id":107,"name":"geo-line","title":"城市航班航线图","description":"多城市航班航线图.","icon": "./assets/0804_04.gif","groupId": "stats","url": "examples/web/stats/geo-line.html"},
    {"id":108,"name":"lines-bus","title":"公交流向图","description":"在地图上显示北京公交流向.","icon": "./assets/0804_18.gif","groupId": "stats","url": "examples/web/stats/lines-bus.html"}

    ]


    open(e:any){
        window.open('http://59.110.157.48/docs/'+e);

    }
}