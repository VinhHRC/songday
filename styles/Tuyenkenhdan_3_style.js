var size = 0;
var placement = 'point';
function categories_Tuyenkenhdan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1: Trung Hưng-Nghĩa Lộ (L5.1km,B20)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2: Nghĩa Lộ-NgọcTao (L4,5km, B20)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3: Kênh Cẩm Đình (L=10,2km)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4: Hiệp Thuận-Hàm Rồng(L=6,4km)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5: Hàm Rồng-Đan Hoài (L=1,4km)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6: Đan Hoài (L=2,4km)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7: Đan Hoài - Liên Mạc (L7,3km;B20m)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Tuyenkenhdan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "15.600000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
    var style = categories_Tuyenkenhdan_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
