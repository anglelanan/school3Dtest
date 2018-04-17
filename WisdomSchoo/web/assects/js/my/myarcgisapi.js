
require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/WebScene",
    "esri/core/urlUtils",
    "esri/core/watchUtils",
    "dojo/dom",
    "dojo/promise/all",
    "esri/widgets/Sketch/SketchViewModel",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "dojo/query",
    "dojo/on",
    "esri/Camera",
    "esri/webscene/Slide",
    "dojo/dom-construct",
    "dojo/dom-class",
    "esri/widgets/Legend",
    "esri/widgets/LayerList",
    "esri/tasks/support/Query",
    "esri/layers/FeatureLayer",
    "dojo/domReady!myarcgisapi"
], function(
    Map,
    SceneView,
    MapView,
    Search,
    WebScene,
    urlUtils,
    watchUtils,
    dom,
    all,
    SketchViewModel,
    Graphic,
    GraphicsLayer,
    query,
    on,
    Camera,
    Slide,
    domConstruct,
    domClass,
    Legend,
    LayerList,

    Query,FeatureLayer) {
    point = {
        type: "point",
        z: 1010
    };
    markerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],
        outline: {
            color: [255, 255, 255],
            width: 2
        }
    };
    /*window.onload = function () {
        sock.emit('query');
        on(dom.byId("tianjia"), "click", function(evt) {
            sock.emit('tianjia');
        });
        on(dom.byId("jianshao"), "click", function(evt) {
            sock.emit('jianshao');
        });
    };*/
    var map = new Map({
        basemap: "streets",
        ground: "world-elevation",
        slider:false,
        logo: false
    });
    var overviewMap = new Map({
        basemap: "osm"
    });
    var tempGraphicsLayer = new GraphicsLayer();
    var mapView = new MapView({
        container: "overviewDiv",
        map: overviewMap,
        layer:[tempGraphicsLayer]
    });

    mapView.ui.components = [];

    var extentDiv = dom.byId("extentDiv");

    var scene = new WebScene({
        portalItem: {
            id: "938b2a957d254417869569116e2c6c10"
        }
    });
    var view = new SceneView({
        container: "viewDiv",
        map: scene,
        heading: 90, // face due east
        tilt: -120,
        center:[120.033348,30.2283141],
        scale:3000,
        environment: {
            atmosphere: {
                quality: "high"
            },
            lighting: {
                date: new Date(),
                directShadowsEnabled: true,
                cameraTrackingEnabled: false
            }
        },
        highlightOptions: {
            color: [0, 255, 255],
            fillOpacity: 0.6
        },
    });
    var highlight = null;
    view.ui.empty("top-left");
    var tourtext = document.getElementById("tourtext");
    //特层图层popup渲染
    var renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [{
                type: "extrude"
            }]
        },
        visualVariables: [{
            type: "size",
            field: "state",
            stops: [
                {
                    value: 1,
                    size: 2,
                    label: "1,000"
                },
                {
                    value: 0,
                    size: 0,
                    label: ">150,000"
                }]
        }]
    };
    var zhuozilayer = new FeatureLayer({
        url: "http://10.12.12.201/arcgis/rest/services/postgis_23_sample_postgres_desk/FeatureServer/0",
        renderer: renderer,
        elevationInfo:{
            mode:"relative-to-ground",
            offset:5,
            unit:"meters"
        }
    });
    scene.add(zhuozilayer);
    urlUtils.addProxyRule({
        urlPrefix: "route.arcgis.com",
        proxyUrl: "/sproxy/"
    });
    /*********************************************************************
     标签
     *********************************************************************/
    dom.byId("slidesDiv").style.visibility = "visible";
    var slides = scene.presentation.slides;
    slides.forEach(createSlideUI);
    on(dom.byId("createSlideButton"), "click", function() {
        Slide.createFrom(view).then(function(slide) {
            slide.title.text = dom.byId("createSlideTitleInput")
                .value;
            scene.presentation.slides.add(slide);
            createSlideUI(slide, "first");
        });
    });
    function createSlideUI(slide, placement) {
        var slideElement = domConstruct.create("div", {
            id: slide.id,
            className: "slide"
        });

        var position = placement ? placement : "last";
        domConstruct.place(slideElement, "slidesDiv", position);
        domConstruct.create("div", {
            textContent: slide.title.text,
            className: "title"
        }, slideElement);
        domConstruct.create("img", {
            src: slide.thumbnail.url,
            title: slide.title.text
        }, slideElement);
        on(slideElement, "click", function() {
            query(".slide").forEach(function(node) {
                domClass.remove(node, "active");
            });
            domClass.add(slideElement, "active");
            slide.applyTo(view);
        });
    };
    //WebSocket
    var graphicLayer = new GraphicsLayer();
    var pointGraphic = new Graphic();
    var point={type:"point",
        z:1010};
    var markerSymbol = {
        type:"simple-marker",
        color:[226,119,40],
        outline:{
            color:[255,255,255],
            width:2
        }
    };
    setInterval(function () {
        graphicLayer.add(pointGraphic);
        var lat=document.getElementById('lat');

        var long=document.getElementById('long');
        var height=document.getElementById('height');

        console.log("zzzzzzzzzzzzzzzzzzzz"+lat.innerHTML);
        console.log("kkkkkkkkkkkkkkkkkkkk"+long.innerHTML);
        console.log("kkkkkkkkkkkkkkrrrrrrrrrrr"+height.innerHTML);
        graphicLayer.add(pointGraphic);
        scene.add(graphicLayer);
        var l = parseFloat(long.innerHTML);
        var la = parseFloat(lat.innerHTML);
        point.longitude = l;
        point.latitude = la;
        pointGraphic.geometry = point;
        graphicLayer.load();
        pointGraphic.symbol = markerSymbol;
    },2000);
    setInterval(function () {
        graphicLayer.remove(pointGraphic);
        scene.remove(graphicLayer);
    },3000);
    //2D与3D跟随功能
    view.then(function() {
        console.log(view.extent);
        view.goTo({
                heading: -30,
                tilt: 90,
                center:[120.0421357155,30.2335793886],
                scale:3000,
            },
            {
                animate: true,
                duration: 100000
            });
        mapView.then(function() {
            view.goTo({
                heading: 0,
                tilt: 80,
                center:[120.0421357155,30.2335793886],
                scale:3000,
            });
            view.watch("extent", updateOverviewExtent);
            mapView.watch("extent", updateOverviewExtent);
            watchUtils.when(view, "stationary", updateOverview);
            function updateOverview() {
                mapView.goTo({
                    center: view.center,
                    scale: view.scale * 1 * Math.max(view.width /
                        mapView.width,
                        view.height / mapView.height)
                });
            }

            function updateOverviewExtent() {
                var extent = view.extent;
                var bottomLeft = mapView.toScreen(extent.xmin, extent.ymin);
                var topRight = mapView.toScreen(extent.xmax, extent.ymax);
                extentDiv.style.top = topRight.y + "px";
                extentDiv.style.left = bottomLeft.x + "px";
                extentDiv.style.height = (bottomLeft.y - topRight.y) + "px";
                extentDiv.style.width = (topRight.x - bottomLeft.x) + "px";
            };

        });
        /*********************************************************************
         高亮
         *********************************************************************/
        var officeSceneLayer = scene.allLayers.filter(function(elem) {
            return elem.title === "rooms1";
        }).items[0];
        var container = document.getElementById("roomsList");
        view.whenLayerView(officeSceneLayer).then(function(
            officeLayerView) {
            officeLayerView.watch("updating", function(val) {
                if (!val) {
                    officeLayerView.queryFeatures().then(
                        function(result) {
                            container.innerHTML = "";
                            result.forEach(function(feature) {
                                var attributes = feature.attributes;
                                if (attributes.room_number!==null) {
                                    var li = document.createElement(
                                        "li");
                                    li.setAttribute("class",
                                        "panel-result");
                                    li.innerHTML = "Room " + attributes.room_number;
                                    li.addEventListener("click",
                                        function(evt) {
                                            var target = evt.target;
                                            var objectId = feature.attributes.objectid;
                                            var queryExtent = new Query({
                                                objectIds: [objectId]
                                            });
                                            officeLayerView.queryExtent(
                                                queryExtent).then(
                                                function(result) {
                                                    view.goTo(result.extent
                                                        .expand(7), {
                                                        speedFactor: 0.5
                                                    });
                                                });
                                            if (highlight) {
                                                highlight.remove();
                                            }
                                            highlight = officeLayerView.highlight(
                                                [objectId]);
                                        });
                                    container.appendChild(li);
                                }
                            });
                        },function () {
                            console.log("内函数错误")
                        });
                }
            });
        },function () {
            console.log("错误函数")
        });
    });

    scene.then(function () {
        /*********************************************************************
         筛选
         *********************************************************************/
        var foundLayer = scene.layers.find(function(l) {
            return l.title === "xinxi_FFCER";
        });
        on(dojo.query("#edtsd"), "click", function(){
            scene.allLayers.remove(foundLayer);
        });
        on(dojo.query("#jiagai"), "click", function(){
            scene.allLayers.add(foundLayer);
        });
        var officeLayer = scene.layers.find(function(l) {
            return l.title === "rooms1";
        });
        var officeTypes = [
            "办公室", "实验室",
            "机房", "配电室", "女厕","男厕"
        ];
        var classroombuildinglayer = scene.layers.find(function(l) {
            console.log(l.title);
            return l.title === "ClassroomBuilding";
        });
        classroombuildinglayer.outFields=["*"];
        var template = {
            title: "欢迎来到浙江工业大学，这里是{name}",
            content: "<p>该楼建造于{time},属于{college},{introduce}",
        };
        classroombuildinglayer.popupTemplate = template;
        function displayOfficeTypes() {
            var query = officeLayer.createQuery();
            query.outFields = ["room_type"];
            officeLayer.queryFeatures(query).then(function(results) {
                var typesCounter = {};
                var othersCounter = 0;
                results.features.forEach(function(feature) {
                    var spaceType = feature.attributes.room_type;
                    if (typesCounter[spaceType]) {
                        typesCounter[spaceType]++;
                    } else {
                        typesCounter[spaceType] = 1;
                        console.log(typesCounter[spaceType]);
                    };
                    if (officeTypes.indexOf(spaceType) === -1) {
                        othersCounter++;
                    };
                });
                var newRenderer = officeLayer.renderer.clone();
                officeTypes.forEach(function(value, i) {
                    newRenderer.uniqueValueInfos[i].label = value +
                        ": " + (typesCounter[value] || 0) + " rooms";
                });
                newRenderer.defaultLabel = "Other types: " +
                    othersCounter + " rooms";
                officeLayer.renderer = newRenderer;
            },function () {
                console.log("错误函数")
            });
        };
        displayOfficeTypes();
        function showFloors(evt) {
            console.log("floorselecttttt");
            var floorQuery = evt.target.value;
            scene.layers.forEach(function(layer) {
                if (layer.title !== "xinxi_FFCER" && layer.title !== "Dormitorys" && layer.title !== "trees1" && layer.title !== "trees_2" && layer.title !== "trees3"
                    && layer.title !== "Light" && layer.title !== "Driveway" && layer.title !== "Walkway" && layer.title !== "river" && layer.title !== "Track"
                    && layer.title !== "Canteen" && layer.title !== "Library_FFCER" && layer.title !== "Pavilion_1" && layer.title !== "ClassroomBuilding"
                    && layer.title !== "ClassroomBuilding" && layer.title !== "Gymnasium1" && layer.title !== "Grass") {
                    if (floorQuery === "Floor = '1'"){
                        layer.definitionExpression ="1=1";
                        if (layer.title !== "Wall1_3D"
                            && layer.title !== "Door1_3D"){
                            layer.definitionExpression =floorQuery;
                        }
                    }else if(floorQuery === "Floor = '2'"){
                        layer.definitionExpression ="1=1";
                        if (layer.title !== "Wall2_3D"
                            && layer.title !== "Door2_3D"){
                            layer.definitionExpression =floorQuery;
                        }
                    }else if (floorQuery === "Floor = '3'"){
                        layer.definitionExpression ="1=1";
                        if (layer.title !== "Wall3_3D"
                            && layer.title !== "Door3_3D"){
                            layer.definitionExpression =floorQuery;
                        }
                    }else if (floorQuery === "Floor = '4'"){
                        layer.definitionExpression ="1=1";
                        if (layer.title !== "Wall4_3D"
                            && layer.title !== "Door4_3D"){
                            layer.definitionExpression =floorQuery;
                        }
                    }else if (floorQuery === "Floor = '5'"){
                        layer.definitionExpression ="1=1";
                        if (layer.title !== "Wall5_3D"
                            && layer.title !== "Door5_3D"){
                            layer.definitionExpression =floorQuery;
                        }
                    }else {
                        layer.definitionExpression =floorQuery;
                    }

                }
            });
            displayOfficeTypes();
        }
        on(dom.byId("floorSelect"), "change", showFloors);
        var layerList = new LayerList({
            view: view,
            container:"shaixuanright"
        });
    });
    //回到首页
    on(dojo.query("#home"), "click", function(){
        view.goTo({
                heading: -30, // face due east
                tilt: 60,
                center:[120.0421357155,30.2335793886],
                scale:3000,
            },
            {
                speedFactor: 0.3,

            });
    });
    //120.0301730633,30.2231506502, 正大门口1
    //120.0301623344,30.2255609458 图书馆门口2
    //120.0311601162,30.2260893489 理学楼路上3
    //120.0317072868,30.225171594 理学楼abc4
    //120.0322544575,30.2261542403 语林楼5
    //120.0322437286,30.225171594 健行楼6
    //120.0328230858,30.2277857816 广之楼C7
    //120.0341856480,30.2278135917 体育馆8
    //120.0358271599,30.2284810325 枝干路9
    //120.0373935699,30.2275818404 垃圾街10
    //120.0431871414,30.2317162019 新校区门口11
    //120.0423395634,30.2329027130 经过12
    //120.0424683094,30.2339872457 信息学院13
    var options = {
        speedFactor: 0.1,
        duration:10,
        easing: "in-out-cubic" ,
    };
    var camera1 = Camera({
        heading: 0,
        tilt: 80,
        position:[
            120.0301730633,
            30.2231506502,
            15,
        ]
    });
    var camera2 = Camera({
        heading:0,
        tilt:80,
        position:[
            120.0301623344,
            30.2255609458,
            15,
        ]
    });
    var camera3 = Camera({
        heading:45,
        tilt:80,
        position:[
            120.0311601162,
            30.2260893489,
            15,
        ]
    });
    var camera4 = Camera({
        heading:-90,
        tilt:80,
        position:[
            120.0317072868,
            30.225171594,
            15,
        ]
    });
    var camera5 = Camera({
        heading:90,
        tilt:80,
        position:[
            120.0322544575,
            30.2261542403,
            15,
        ]
    });
    var camera6 = Camera({
        heading:-90,
        tilt:80,
        position:[
            120.0322437286,
            30.2270534454,
            15,
        ]
    });
    var camera7 = Camera({
        heading:150,
        tilt:80,
        position:[
            120.0328230858,
            30.2277857816,
            15,
        ]
    });
    var camera8 = Camera({
        heading:150,
        tilt:80,
        position:[
            120.0341856480,
            30.2278135917,
            15,
        ]
    });
    var camera9 = Camera({
        heading:90,
        tilt:80,
        position:[
            120.0358271599,
            30.2284810325,
            15,
        ]
    });
    var camera10 = Camera({
        heading:150,
        tilt:80,
        position:[
            120.0373935699,
            30.2275818404,
            15,
        ]
    });
    var camera11 = Camera({
        heading:90,
        tilt:80,
        position:[
            120.0431871414,
            30.2317162019,
            15,
        ]
    });
    var camera12 = Camera({
        heading:30,
        tilt:80,
        position:[
            120.0423395634,
            30.2329027130,
            15,
        ]
    });
    var camera13 = Camera({
        heading:90,
        tilt:80,
        position:[
            120.0424683094,
            30.2339872457,
            15,
        ]
    });
    on(dojo.query("#intro"), "click", function(){
        view.goTo(camera1,options)
            .then(function () {
                tourtext.innerHTML = "从正大门出发前往图书馆";
                return view.goTo(camera2,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往理学楼，理学楼属于理学院，有着数据分析数据挖掘技术专业";
                return view.goTo(camera3,options);
            })
            .then(function () {

                return view.goTo(camera4,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往语林楼，语林楼比较文艺，大多数英语试听课都在该楼进行";

                return view.goTo(camera5,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往健行楼，上课、财务、上机等都在健行";

                return view.goTo(camera6,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往广之C楼";

                return view.goTo(camera7,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往体育馆，体育馆分为两个，分别为大小体育馆，大型活动都在这里进行";

                return view.goTo(camera8,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往支干路，枝干路是教学区和宿舍区的一个分界线，路两边的树很漂亮";

                return view.goTo(camera9,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往小吃街，小吃街有很多美食";

                return view.goTo(camera10,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往刚建成的新校区的门口";

                return view.goTo(camera11,options);
            })
            .then(function () {
                tourtext.innerHTML = "接下来前往目的地信息学院";
                return view.goTo(camera12,options);
            })
            .then(function () {
                tourtext.innerHTML = "信息学院到了，欢迎下次再来";
                return view.goTo(camera13,options);

            })
            .then(function () {
                tourtext.innerHTML = "";
            })

    });
});