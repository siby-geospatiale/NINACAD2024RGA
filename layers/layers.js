var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_COMMUNES_1 = new ol.format.GeoJSON();
var features_COMMUNES_1 = format_COMMUNES_1.readFeatures(json_COMMUNES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNES_1.addFeatures(features_COMMUNES_1);
var lyr_COMMUNES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNES_1, 
                style: style_COMMUNES_1,
                popuplayertitle: "COMMUNES",
                interactive: true,
                title: '<img src="styles/legend/COMMUNES_1.png" /> COMMUNES'
            });
var format_Parcelles_NINACAD_By_COMMUNE_2 = new ol.format.GeoJSON();
var features_Parcelles_NINACAD_By_COMMUNE_2 = format_Parcelles_NINACAD_By_COMMUNE_2.readFeatures(json_Parcelles_NINACAD_By_COMMUNE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_NINACAD_By_COMMUNE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_NINACAD_By_COMMUNE_2.addFeatures(features_Parcelles_NINACAD_By_COMMUNE_2);
var lyr_Parcelles_NINACAD_By_COMMUNE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_NINACAD_By_COMMUNE_2, 
                style: style_Parcelles_NINACAD_By_COMMUNE_2,
                popuplayertitle: "Parcelles_NINACAD_By_COMMUNE",
                interactive: true,
                title: '<img src="styles/legend/Parcelles_NINACAD_By_COMMUNE_2.png" /> Parcelles_NINACAD_By_COMMUNE'
            });
var format_Parcelles_NINACAD_ND_3 = new ol.format.GeoJSON();
var features_Parcelles_NINACAD_ND_3 = format_Parcelles_NINACAD_ND_3.readFeatures(json_Parcelles_NINACAD_ND_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_NINACAD_ND_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_NINACAD_ND_3.addFeatures(features_Parcelles_NINACAD_ND_3);
var lyr_Parcelles_NINACAD_ND_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_NINACAD_ND_3, 
                style: style_Parcelles_NINACAD_ND_3,
                popuplayertitle: "Parcelles_NINACAD_ND",
                interactive: true,
                title: '<img src="styles/legend/Parcelles_NINACAD_ND_3.png" /> Parcelles_NINACAD_ND'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_COMMUNES_1.setVisible(true);lyr_Parcelles_NINACAD_By_COMMUNE_2.setVisible(true);lyr_Parcelles_NINACAD_ND_3.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_COMMUNES_1,lyr_Parcelles_NINACAD_By_COMMUNE_2,lyr_Parcelles_NINACAD_ND_3];
lyr_COMMUNES_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'REGION': 'REGION', 'GID_2': 'GID_2', 'CERCLE': 'CERCLE', 'GID_3': 'GID_3', 'ARRONDISSE': 'ARRONDISSE', 'COMMUNE': 'COMMUNE', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Parcelles_NINACAD_By_COMMUNE_2.set('fieldAliases', {'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'COMMUNES': 'COMMUNES', 'TYPE_4': 'TYPE_4', });
lyr_Parcelles_NINACAD_ND_3.set('fieldAliases', {'surface': 'surface', 'perimetre': 'perimetre', 'numero_dep': 'numero_dep', 'code_rga': 'code_rga', 'localite': 'localite', 'nom': 'nom', 'prenom': 'prenom', });
lyr_COMMUNES_1.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'REGION': 'TextEdit', 'GID_2': 'TextEdit', 'CERCLE': 'TextEdit', 'GID_3': 'TextEdit', 'ARRONDISSE': 'TextEdit', 'COMMUNE': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Parcelles_NINACAD_By_COMMUNE_2.set('fieldImages', {'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'COMMUNES': 'TextEdit', 'TYPE_4': 'TextEdit', });
lyr_Parcelles_NINACAD_ND_3.set('fieldImages', {'surface': 'TextEdit', 'perimetre': 'TextEdit', 'numero_dep': 'TextEdit', 'code_rga': 'TextEdit', 'localite': 'TextEdit', 'nom': 'TextEdit', 'prenom': 'TextEdit', });
lyr_COMMUNES_1.set('fieldLabels', {'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'REGION': 'inline label - always visible', 'GID_2': 'hidden field', 'CERCLE': 'inline label - always visible', 'GID_3': 'hidden field', 'ARRONDISSE': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', });
lyr_Parcelles_NINACAD_By_COMMUNE_2.set('fieldLabels', {'NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'NAME_3': 'hidden field', 'COMMUNES': 'inline label - always visible', 'TYPE_4': 'hidden field', });
lyr_Parcelles_NINACAD_ND_3.set('fieldLabels', {'surface': 'inline label - always visible', 'perimetre': 'inline label - always visible', 'numero_dep': 'inline label - always visible', 'code_rga': 'inline label - always visible', 'localite': 'inline label - always visible', 'nom': 'inline label - always visible', 'prenom': 'inline label - always visible', });
lyr_Parcelles_NINACAD_ND_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});