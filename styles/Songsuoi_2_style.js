var size = 0;
var placement = 'point';
function categories_Songsuoi_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Hong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SONGDA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.699999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Day':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Song Nhue':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tich':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Thao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NGOCTAO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cau':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chau Giang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DaBac':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dai Hung':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dao':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Day_Nhue':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Duong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Duy Tien':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HaLy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Han':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HatMon':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hoa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HoangLong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KinhMon':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KinhThay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'La Khe':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LachTray':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LaiVu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Luc Nam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Luoc':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Moi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ngoai Do':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NinhCo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Phu Xuyen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Phu XuyenB':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QuanLieu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Song Day1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Splendora':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sun_ThuyDuc':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tac Giang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TamBac':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ThaiBinh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Thuong':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'To Hien Thanh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TraLy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Troi_Taymo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TrungHung':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Van Dinh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VanCocGate':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VanUc':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,8,253,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Songsuoi_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Songsuoi_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
