ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3395").setExtent([13390406.851522, -1402349.878074, 14729494.850877, -703695.269716]);
var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_indeks_bahaya_TSUNAMI_1 = new ol.format.GeoJSON();
var features_indeks_bahaya_TSUNAMI_1 = format_indeks_bahaya_TSUNAMI_1.readFeatures(json_indeks_bahaya_TSUNAMI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_indeks_bahaya_TSUNAMI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_TSUNAMI_1.addFeatures(features_indeks_bahaya_TSUNAMI_1);
var lyr_indeks_bahaya_TSUNAMI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_TSUNAMI_1, 
                style: style_indeks_bahaya_TSUNAMI_1,
                interactive: true,
    title: 'indeks_bahaya_TSUNAMI<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_1_0.png" /> sangat rendah<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_1_1.png" /> rendah<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_1_2.png" /> sedang<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_1_3.png" /> tinggi<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_1_4.png" /> sangat tinggi<br />'
        });
var format_indeks_bahaya_GEA_2 = new ol.format.GeoJSON();
var features_indeks_bahaya_GEA_2 = format_indeks_bahaya_GEA_2.readFeatures(json_indeks_bahaya_GEA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_indeks_bahaya_GEA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_GEA_2.addFeatures(features_indeks_bahaya_GEA_2);
var lyr_indeks_bahaya_GEA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_GEA_2, 
                style: style_indeks_bahaya_GEA_2,
                interactive: true,
    title: 'indeks_bahaya_GEA<br />\
    <img src="styles/legend/indeks_bahaya_GEA_2_0.png" /> sangat rendah<br />\
    <img src="styles/legend/indeks_bahaya_GEA_2_1.png" /> rendah<br />\
    <img src="styles/legend/indeks_bahaya_GEA_2_2.png" /> sedang<br />\
    <img src="styles/legend/indeks_bahaya_GEA_2_3.png" /> tinggi<br />\
    <img src="styles/legend/indeks_bahaya_GEA_2_4.png" /> sangat tinggi<br />'
        });
var format_LINE_SPELL_3 = new ol.format.GeoJSON();
var features_LINE_SPELL_3 = format_LINE_SPELL_3.readFeatures(json_LINE_SPELL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_LINE_SPELL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINE_SPELL_3.addFeatures(features_LINE_SPELL_3);
var lyr_LINE_SPELL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINE_SPELL_3, 
                style: style_LINE_SPELL_3,
                interactive: true,
                title: '<img src="styles/legend/LINE_SPELL_3.png" /> LINE_SPELL'
            });
var format_POINT_SPELL_4 = new ol.format.GeoJSON();
var features_POINT_SPELL_4 = format_POINT_SPELL_4.readFeatures(json_POINT_SPELL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_POINT_SPELL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINT_SPELL_4.addFeatures(features_POINT_SPELL_4);
var lyr_POINT_SPELL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POINT_SPELL_4, 
                style: style_POINT_SPELL_4,
                interactive: true,
    title: 'POINT_SPELL<br />\
    <img src="styles/legend/POINT_SPELL_4_0.png" /> Pelabuhan Indonesia (PELINDO)<br />\
    <img src="styles/legend/POINT_SPELL_4_1.png" /> Perencanaan SPEL PLTS<br />\
    <img src="styles/legend/POINT_SPELL_4_2.png" /> Pusat Beban<br />\
    <img src="styles/legend/POINT_SPELL_4_3.png" /> PLTS Maluku baru<br />\
    <img src="styles/legend/POINT_SPELL_4_4.png" /> PLTS Maluku Utara baru<br />\
    <img src="styles/legend/POINT_SPELL_4_5.png" /> PLTS Nusa Tenggara baru<br />\
    <img src="styles/legend/POINT_SPELL_4_6.png" /> PLTS Papua barat baru<br />\
    <img src="styles/legend/POINT_SPELL_4_7.png" /> PLTS Papua baru<br />\
    <img src="styles/legend/POINT_SPELL_4_8.png" /> Potensi Batubara<br />\
    <img src="styles/legend/POINT_SPELL_4_9.png" /> Sightseeing Tour<br />\
    <img src="styles/legend/POINT_SPELL_4_10.png" /> Pusat Beban<br />'
        });

lyr_google_0.setVisible(true);lyr_indeks_bahaya_TSUNAMI_1.setVisible(true);lyr_indeks_bahaya_GEA_2.setVisible(true);lyr_LINE_SPELL_3.setVisible(true);lyr_POINT_SPELL_4.setVisible(true);
var layersList = [lyr_google_0,lyr_indeks_bahaya_TSUNAMI_1,lyr_indeks_bahaya_GEA_2,lyr_LINE_SPELL_3,lyr_POINT_SPELL_4];
lyr_indeks_bahaya_TSUNAMI_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_indeks_bahaya_GEA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LINE_SPELL_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', 'KML_FOLDER': 'KML_FOLDER', 'open': 'open', });
lyr_POINT_SPELL_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_indeks_bahaya_TSUNAMI_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_indeks_bahaya_GEA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LINE_SPELL_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'tessellate': 'Range', 'KML_FOLDER': 'TextEdit', 'open': 'Range', });
lyr_POINT_SPELL_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_indeks_bahaya_TSUNAMI_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_indeks_bahaya_GEA_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LINE_SPELL_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', 'KML_FOLDER': 'no label', 'open': 'no label', });
lyr_POINT_SPELL_4.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_POINT_SPELL_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});