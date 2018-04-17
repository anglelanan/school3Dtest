
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="stylesheet" href="./assects/bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_597570_8dlcvxfnv10grpb9.css">
    <script type="text/javascript" src="./assects/js/jquery.js"></script>
    <script type="text/javascript" src="./assects/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="assects/js/arcgis_js_v45_api/arcgis_js_api/library/4.5/esri/css/main.css">
    <script src="assects/js/arcgis_js_v45_api/arcgis_js_api/library/4.5/init.js"></script>
    <link rel="stylesheet" href="assects/js/my/mycss.css">
    <script type="text/javascript" src="assects/js/my/websocket.js"></script>
    <script  type="text/javascript" src="assects/js/my/myarcgisapi.js"></script>
    <script type="text/javascript" src="assects/js/my/time.js"></script>
    <script type="text/javascript" src="assects/js/my/buttomcstyle.js"></script>
</head>

<body onload="startTime()">
<div id="zuobiao">
    <p>纬度</p><div id="lat"></div>
    <p>经度</p><div id="long"></div>
    <p>高度</p><div id="height"></div>
</div>
<div id="viewDiv"></div>
<div id="overviewDiv">
    <div id="extentDiv"></div>
</div>
<div id="search"></div>
<div id="daohang" class="btn"><i class="icon iconfont icon-jixiao1 fontdh"></i></div>
<div id="daohangonetoone">

</div>
<div id="clock">
    <div id="txt"></div>
</div>
<div id="daohanglan">
    <div id="home" class="btn"><p><i class="icon iconfont icon-shouye fontdhl"></i>主页</p></div>
    <div id="edtsd" class="btn"><p><i class="icon iconfont icon-shouye2 fontdhl"></i>去盖</p></div>
    <div id="jiagai" class="btn"><p><i class="icon iconfont icon-shouye2 fontdhl"></i>加盖</p></div>
    <div id="intro" class="btn"><p><i class="icon iconfont icon-icon fontdhl"></i>介绍</p></div>
    <div id="bianqian" class="btn"><p><i class="icon iconfont icon-icon1 fontdhl"></i>nihao</p></div>
    <div id="shaixuan" class="btn"><p><i class="icon iconfont icon-icon2 fontdhl"></i>筛选</p></div>
    <div id="gaoliang" class="btn"><p><i class="icon iconfont icon-shouye4 fontdhl"></i>高亮</p></div>
    <div id="tianjia" class="btn"><p><i class="icon iconfont icon-shouye4 fontdhl"></i>加桌</p></div>
    <div id="jianshao" class="btn"><p><i class="icon iconfont icon-shouye4 fontdhl"></i>减桌</p></div>
</div>
<div id="login" class="btn"><p><i class="icon iconfont icon-shouye1 loginicon" data-toggle="modal" data-target="#myModal"></i></p></div>
<div id="loginspace">

</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
                </button>
                <form class="form-horizontal col-sm-offset-3 col-md-offset-3" id="register_form">
                    <h3 class="form-title">登陆账号</h3>
                    <div class="col-sm-9 col-md-9">
                        <div class="form-group">
                            <h4 class="form-title">选择你的身份：</h4>
                            <select class="selectpicker">
                                <option value="1">学生</option>
                                <option value="2">老师</option>
                                <option value="3">管理员</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <h4 class="form-title">用户名：</h4>
                            <input class="form-control required" type="text" placeholder="Username" name="username" autofocus="autofocus"/>
                        </div>
                        <div class="form-group">
                            <h4 class="form-title">密码：</h4>
                            <input class="form-control required" type="password" placeholder="Password" id="register_password" name="password"/>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-default pull-right" data-dismiss="modal">关闭</button>
                            <input type="submit" class="btn btn-success pull-right" value="登陆"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
<div id="tourtext"></div>
<div id="slide">
    <div id="createSlideDiv">
        New slide: <input type="text" id="createSlideTitleInput" size="10" />
        <button id="createSlideButton">Create</button>
    </div>
    <div id="slidesDiv"></div>
</div>
<div id="optionsDiv">
    <div><b>选择需要查看的楼层:</b>
        <select id="floorSelect">
            <option value="1=1">显示楼层</option>
            <option value="Floor = '1'">第一层</option>
            <option value="Floor = '2'">第二层</option>
            <option value="Floor = '3'">第三层</option>
            <option value="Floor = '4'">第四层</option>
            <option value="Floor = '5'">第五层</option>
        </select>
    </div>
</div>
<div id="shaixuanright"></div>
<div id="shaixuanlend"></div>
<div id="gaolianglist" class="panel-side">
    <h2>Office rooms</h2>
    <ul id="roomsList">
        <li>Loading&hellip;</li>>
    </ul>
</div>

</body>
</html>