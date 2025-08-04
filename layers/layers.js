var wms_layers = [];


        var lyr_Satellitehybrid_0 = new ol.layer.Tile({
            'title': 'Satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlemap_1 = new ol.layer.Tile({
            'title': 'Google map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Songsuoi_2 = new ol.format.GeoJSON();
var features_Songsuoi_2 = format_Songsuoi_2.readFeatures(json_Songsuoi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Songsuoi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Songsuoi_2.addFeatures(features_Songsuoi_2);
var lyr_Songsuoi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Songsuoi_2, 
                style: style_Songsuoi_2,
                popuplayertitle: 'Song suoi',
                interactive: false,
    title: 'Song suoi<br />\
    <img src="styles/legend/Songsuoi_2_0.png" /> Hong<br />\
    <img src="styles/legend/Songsuoi_2_1.png" /> SONGDA<br />\
    <img src="styles/legend/Songsuoi_2_2.png" /> Day<br />\
    <img src="styles/legend/Songsuoi_2_3.png" /> Song Nhue<br />\
    <img src="styles/legend/Songsuoi_2_4.png" /> Tich<br />\
    <img src="styles/legend/Songsuoi_2_5.png" /> Thao<br />\
    <img src="styles/legend/Songsuoi_2_6.png" /> Lo<br />\
    <img src="styles/legend/Songsuoi_2_7.png" /> NGOCTAO<br />\
    <img src="styles/legend/Songsuoi_2_8.png" /> Cam<br />\
    <img src="styles/legend/Songsuoi_2_9.png" /> Cau<br />\
    <img src="styles/legend/Songsuoi_2_10.png" /> Chau Giang<br />\
    <img src="styles/legend/Songsuoi_2_11.png" /> DaBac<br />\
    <img src="styles/legend/Songsuoi_2_12.png" /> Dai Hung<br />\
    <img src="styles/legend/Songsuoi_2_13.png" /> Dao<br />\
    <img src="styles/legend/Songsuoi_2_14.png" /> Day_Nhue<br />\
    <img src="styles/legend/Songsuoi_2_15.png" /> Duong<br />\
    <img src="styles/legend/Songsuoi_2_16.png" /> Duy Tien<br />\
    <img src="styles/legend/Songsuoi_2_17.png" /> Gua<br />\
    <img src="styles/legend/Songsuoi_2_18.png" /> Ha<br />\
    <img src="styles/legend/Songsuoi_2_19.png" /> HaLy<br />\
    <img src="styles/legend/Songsuoi_2_20.png" /> Han<br />\
    <img src="styles/legend/Songsuoi_2_21.png" /> HatMon<br />\
    <img src="styles/legend/Songsuoi_2_22.png" /> Hoa<br />\
    <img src="styles/legend/Songsuoi_2_23.png" /> HoangLong<br />\
    <img src="styles/legend/Songsuoi_2_24.png" /> KinhMon<br />\
    <img src="styles/legend/Songsuoi_2_25.png" /> KinhThay<br />\
    <img src="styles/legend/Songsuoi_2_26.png" /> La Khe<br />\
    <img src="styles/legend/Songsuoi_2_27.png" /> LachTray<br />\
    <img src="styles/legend/Songsuoi_2_28.png" /> LaiVu<br />\
    <img src="styles/legend/Songsuoi_2_29.png" /> Luc Nam<br />\
    <img src="styles/legend/Songsuoi_2_30.png" /> Luoc<br />\
    <img src="styles/legend/Songsuoi_2_31.png" /> Mia<br />\
    <img src="styles/legend/Songsuoi_2_32.png" /> Moi<br />\
    <img src="styles/legend/Songsuoi_2_33.png" /> Ngoai Do<br />\
    <img src="styles/legend/Songsuoi_2_34.png" /> NinhCo<br />\
    <img src="styles/legend/Songsuoi_2_35.png" /> Phu Xuyen<br />\
    <img src="styles/legend/Songsuoi_2_36.png" /> Phu XuyenB<br />\
    <img src="styles/legend/Songsuoi_2_37.png" /> QuanLieu<br />\
    <img src="styles/legend/Songsuoi_2_38.png" /> Song Day1<br />\
    <img src="styles/legend/Songsuoi_2_39.png" /> Splendora<br />\
    <img src="styles/legend/Songsuoi_2_40.png" /> Sun_ThuyDuc<br />\
    <img src="styles/legend/Songsuoi_2_41.png" /> Tac Giang<br />\
    <img src="styles/legend/Songsuoi_2_42.png" /> TamBac<br />\
    <img src="styles/legend/Songsuoi_2_43.png" /> ThaiBinh<br />\
    <img src="styles/legend/Songsuoi_2_44.png" /> Thuong<br />\
    <img src="styles/legend/Songsuoi_2_45.png" /> To Hien Thanh<br />\
    <img src="styles/legend/Songsuoi_2_46.png" /> TraLy<br />\
    <img src="styles/legend/Songsuoi_2_47.png" /> Troi_Taymo<br />\
    <img src="styles/legend/Songsuoi_2_48.png" /> TrungHung<br />\
    <img src="styles/legend/Songsuoi_2_49.png" /> Van Dinh<br />\
    <img src="styles/legend/Songsuoi_2_50.png" /> VanCocGate<br />\
    <img src="styles/legend/Songsuoi_2_51.png" /> VanUc<br />' });
var format_Tuyenkenhdan_3 = new ol.format.GeoJSON();
var features_Tuyenkenhdan_3 = format_Tuyenkenhdan_3.readFeatures(json_Tuyenkenhdan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuyenkenhdan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuyenkenhdan_3.addFeatures(features_Tuyenkenhdan_3);
var lyr_Tuyenkenhdan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuyenkenhdan_3, 
                style: style_Tuyenkenhdan_3,
                popuplayertitle: 'Tuyenkenhdan',
                interactive: true,
    title: 'Tuyenkenhdan<br />\
    <img src="styles/legend/Tuyenkenhdan_3_0.png" /> 1: Trung Hưng-Nghĩa Lộ (L5.1km,B20)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_1.png" /> 2: Nghĩa Lộ-NgọcTao (L4,5km, B20)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_2.png" /> 3: Kênh Cẩm Đình (L=10,2km)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_3.png" /> 4: Hiệp Thuận-Hàm Rồng(L=6,4km)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_4.png" /> 5: Hàm Rồng-Đan Hoài (L=1,4km)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_5.png" /> 6: Đan Hoài (L=2,4km)<br />\
    <img src="styles/legend/Tuyenkenhdan_3_6.png" /> 7: Đan Hoài - Liên Mạc (L7,3km;B20m)<br />' });
var format_Tuyendap_4 = new ol.format.GeoJSON();
var features_Tuyendap_4 = format_Tuyendap_4.readFeatures(json_Tuyendap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuyendap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuyendap_4.addFeatures(features_Tuyendap_4);
var lyr_Tuyendap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuyendap_4, 
                style: style_Tuyendap_4,
                popuplayertitle: 'Tuyendap',
                interactive: true,
    title: 'Tuyendap<br />\
    <img src="styles/legend/Tuyendap_4_0.png" /> Au Thuyen<br />\
    <img src="styles/legend/Tuyendap_4_1.png" /> T1.Minh Quang L=1200m<br />\
    <img src="styles/legend/Tuyendap_4_2.png" /> T2-L=710m-Thuần Mỹ<br />\
    <img src="styles/legend/Tuyendap_4_3.png" /> T3-883m<br />\
    <img src="styles/legend/Tuyendap_4_4.png" /> Tuyen Ha Luu Lô Hồng<br />\
    <img src="styles/legend/Tuyendap_4_5.png" /> Tuyen Hạ Luu Thao Da<br />' });
var format_DiemTV_5 = new ol.format.GeoJSON();
var features_DiemTV_5 = format_DiemTV_5.readFeatures(json_DiemTV_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiemTV_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiemTV_5.addFeatures(features_DiemTV_5);
var lyr_DiemTV_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiemTV_5, 
                style: style_DiemTV_5,
                popuplayertitle: 'DiemTV',
                interactive: true,
                title: '<img src="styles/legend/DiemTV_5.png" /> DiemTV'
            });

lyr_Satellitehybrid_0.setVisible(false);lyr_Googlemap_1.setVisible(true);lyr_Songsuoi_2.setVisible(true);lyr_Tuyenkenhdan_3.setVisible(true);lyr_Tuyendap_4.setVisible(true);lyr_DiemTV_5.setVisible(true);
var layersList = [lyr_Satellitehybrid_0,lyr_Googlemap_1,lyr_Songsuoi_2,lyr_Tuyenkenhdan_3,lyr_Tuyendap_4,lyr_DiemTV_5];
lyr_Songsuoi_2.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', });
lyr_Tuyenkenhdan_3.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', });
lyr_Tuyendap_4.set('fieldAliases', {'Name': 'Name', });
lyr_DiemTV_5.set('fieldAliases', {'Name': 'Name', });
lyr_Songsuoi_2.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Tuyenkenhdan_3.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Tuyendap_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_DiemTV_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Songsuoi_2.set('fieldLabels', {'Name': 'no label', 'Shape_Leng': 'no label', });
lyr_Tuyenkenhdan_3.set('fieldLabels', {'Name': 'header label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_Tuyendap_4.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_DiemTV_5.set('fieldLabels', {'Name': 'no label', });
lyr_DiemTV_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});