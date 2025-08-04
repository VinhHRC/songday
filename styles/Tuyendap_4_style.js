var size = 0;
var placement = 'point';
function categories_Tuyendap_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Au Thuyen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'T1.Minh Quang L=1200m':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'T2-L=710m-Thuần Mỹ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'T3-883m':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tuyen Ha Luu Lô Hồng':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tuyen Hạ Luu Thao Da':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.8499999999999996}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Tuyendap_4 = function(feature, resolution){
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
    
    var style = categories_Tuyendap_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
