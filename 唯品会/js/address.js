var list = [
    {
        "name": "北京市",
        "citys": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "海淀区", "丰台区", "石景山区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "门头沟区", "密云区", "延庆区"]
    },
    {
        "name": "广东省",
        "citys": ["广州", "深圳", "珠海", "汕头", "韶关", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"]
    },
    {
        "name": "上海市",
        "citys": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明区"]
    },
    {
        "name": "天津市",
        "citys": ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "北辰区", "津南区", "武清区", "宝坻区", "静海县", "宁河县", "蓟县"]
    },
    {
        "name": "重庆市",
        "citys": ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南区", "荣昌区", "璧山区", "大足区", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江区", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县"]
    },
    {
        "name": "辽宁省",
        "citys": ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"]
    },
    {
        "name": "江苏省",
        "citys": ["南京", "苏州", "无锡", "常州", "镇江", "南通", "泰州", "扬州", "盐城", "连云港", "徐州", "淮安", "宿州"]
    },
    {
        "name": "湖北省",
        "citys": ["武汉", "黄石", "十堰", "荆州", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "黄冈", "咸宁", "随州", "仙桃", "天门", "潜江", "神农架"]
    },
    {
        "name": "四川省",
        "citys": ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳"]
    },
    {
        "name": "陕西省",
        "citys": ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"]
    },
    {
        "name": "河北省",
        "citys": ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"]
    },
    {
        "name": "山西省",
        "citys": ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"]
    },
    {
        "name": "河南省",
        "citys": ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "焦作"]
    },
    {
        "name": "吉林省",
        "citys": ["吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜自治区"]
    },
    {
        "name": "黑龙江省",
        "citys": ["哈尔滨", "齐齐哈尔", "鹤岗", "双鸭山", "鸡西", "大庆", "伊春", "牡丹江", "佳木斯", "七台河", "黑河", "绥远", "大兴安岭地区"]
    },
    {
        "name": "内蒙古自治区",
        "citys": ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "锡林郭勒盟", "兴安盟", "阿拉善盟"]
    },
    {
        "name": "山东省",
        "citys": ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽"]
    },
    {
        "name": "安徽省",
        "citys": ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"]
    },
    {
        "name": "浙江省",
        "citys": ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"]
    },
    {
        "name": "福建省",
        "citys": ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"]
    },
    {
        "name": "湖南省",
        "citys": ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "滨州", "永州", "怀化", "娄底"]
    },
    {
        "name": "广西壮族自治区",
        "citys": ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"]
    },
    {
        "name": "江西省",
        "citys": ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"]
    },
    {
        "name": "贵州省",
        "citys": ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "毕节"]
    },
    {
        "name": "云南省",
        "citys": ["昆明", "曲靖", "玉溪", "保山", "邵通", "丽江", "普洱", "临沧"]
    },
    {
        "name": "西藏自治区",
        "citys": ["拉萨", "那曲地区", "昌都地区", "林芝地区", "山南区", "阿里区", "日喀则"]
    },
    {
        "name": "海南省",
        "citys": ["海口", "三亚", "五指山", "琼海", "儋州", "文昌", "万宁", "东方", "澄迈县", "定安县", "屯昌县", "临高县"]
    },
    {
        "name": "甘肃省",
        "citys": ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏", "甘南"]
    },
    {
        "name": "宁夏回族自治区",
        "citys": ["银川", "石嘴山", "吴忠", "固原", "中卫"]
    },
    {
        "name": "青海省",
        "citys": ["西宁", "海东地区", "海北藏族自治区", "海南藏族自治区", "黄南藏族自治区", "果洛藏族自治区", "玉树藏族自治州", "还西藏族自治区"]
    },
    {
        "name": "新疆维吾尔自治区",
        "citys": ["乌鲁木齐", "克拉玛依", "吐鲁番地区", "哈密地区", "和田地区", "阿克苏地区", "喀什地区", "克孜勒苏柯尔克孜", "巴音郭楞蒙古自治区", "昌吉回族自治州", "博尔塔拉蒙古自治区", "石河子", "阿拉尔", "图木舒克", "五家渠", "伊犁哈萨克自治区"]
    }
];

var citys = document.getElementById("city");
var index = 0;

initAdress();
function initAdress(){
    var word = document.getElementById("word-city");
    var hdWord = document.getElementById("hid-wd");
    var bg = document.getElementsByClassName("big-bg")[0];
    var pro = document.getElementById("pro");    
    getPro(pro);
    pro.onclick = function (e) {
        var target = e.target;
        if (target.nodeName == "SPAN") {
            index = target.index;
            citys.innerHTML && (citys.innerHTML = "");
            getCity();
            changeAddre(1);
            word.innerHTML = target.innerHTML;
        }
    }
    citys.onclick = function (e) {
        var target = e.target;
        if (target.nodeName == "SPAN") {
            var text = target.innerHTML;            
            hdWord.innerHTML = text;
            word.innerHTML = text;                        
            bg.style.display = "block";
            setTimeout(function(){
                bg.removeAttribute("style");
                changeAddre(0); 
                document.getElementsByClassName("close-btn")[0].onclick();             
            },800);
        }
    }
}
function getPro(pro){
    for (var i in list) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.index = i;
        span.innerHTML = list[i].name;        
        li.appendChild(span);
        pro.appendChild(li);
    }
    getCity();
}
function getCity() {
    var cityList = list[index].citys;
    for (var i in cityList) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = cityList[i];
        li.appendChild(span)
        citys.appendChild(li);
    }
}
function changeAddre(no){
    var btn = document.getElementsByClassName("pro-city")[0].getElementsByTagName("li"),
        cnt = document.getElementsByClassName("list-hid"),
        other = no==1?0:1;
    btn[no].className = "select";
    cnt[no].style.display = "block";  
    btn[other].removeAttribute("class");
    cnt[other].style.display = "none";    
}