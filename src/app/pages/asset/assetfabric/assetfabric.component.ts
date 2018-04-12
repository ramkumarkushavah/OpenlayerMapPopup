import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { FormsModule } from '@angular/forms';

// declare let ol;

declare let $;

import * as ol from 'openlayers';

@Component({
  selector: 'app-assetfabric',
  templateUrl: './assetfabric.component.html',
  styleUrls: ['./assetfabric.component.css']
})
export class AssetfabricComponent implements OnInit, AfterViewInit {
  divTrueFalseA: boolean = false;
  assetData: boolean = true;
  oildata:string = '';
  gasdata:string = '';

  A = [ ];
  B = [ ];
  constructor(public CommonService: CommonService) { 

    this.CommonService.commonEmitter.subscribe(divTrueFalse => {
      this.divTrueFalseA = divTrueFalse;
      console.log("divTrueFalse Data is : ", this.divTrueFalseA);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.openlayermap();
    

  }
  openlayermap() {
    this.assetData = !this.assetData;


    /////////////Vector Layer//////////////

    var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point([0, 0]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });
    
    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../../../../favicon.ico'
      }))
    });
    
    iconFeature.setStyle(iconStyle);
    
    var vectorSource = new ol.source.Vector({
      features: [iconFeature]
    });
    
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });
  ////////Vector Layer Finish////////////

  ////////Raster Layar/////////////

  var rasterLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  })
  /////////Raster Layer Finish/////////////
    var map = new ol.Map({
      target: 'asset-main-div',
      layers: [rasterLayer, vectorLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      }),
      // renderer:'canvas'
    });

  ////////////Overlay Popup & Event Binding Start//////////// 
  
  var element = document.getElementById('popup');
  
  var popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false
  });
  map.addOverlay(popup);
  
  // display popup on click
  map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature, layer) {
          ////////////////Sementic Modal///////////
          $('.ui.modal')
          .modal('show')
        ;
          /////////////Sementic Modal Call////////
          return feature;
        });
    // if (feature) {
    //   popup.setPosition(evt.coordinate);
    //   $(element).popover({
    //     'placement': 'top',
    //     'html': true,
    //     'content': feature.get('name')
    //   });
    //   $(element).popover('show');
    // } else {
    //   $(element).popover('destroy');
    // }
  });
  
  // change mouse cursor when over marker
  map.on('pointermove', function(e) {
    if (e.dragging) {
      $(element).popover('destroy');
      return;
    }
    var pixel = map.getEventPixel(e.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    //map.getTarget().style.cursor = hit ? 'pointer' : '';
  });

  ///////////Overlay Popup & Event Binding Finish////////////
  }
  insert(){
    console.log(this.oildata);
    console.log(this.gasdata);

    this.A.push(this.oildata);
    this.B.push(this.gasdata);

    console.log(this.A);
    console.log(this.B);
    
    this.oildata = null;
    this.gasdata = null;
  }
}


