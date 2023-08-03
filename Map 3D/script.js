

    require([
      "esri/config",
      "esri/Map",
      "esri/views/SceneView"
  ], function(esriConfig,Map, SceneView) {

  esriConfig
    Map
    SceneView

        
        esriConfig.apiKey = "AAPKe485dacca8c74aee95f7c4ebd77eff3e6UTR37VH-zDEdEAcZs-7HibDHWOZ8sS76ZCdT4B_sIrbO1JE74dssiFuK6mBsUR2";

        const map = new Map({
          basemap: "arcgis-topographic", //Basemap layer service
          ground: "world-elevation", //Elevation service
        });

        let position = {
          x: -118.808, //Longitude
          y: 33.961, //Latitude
          z: 2000 //Meters
        }

        const view = new SceneView({
          container: "viewDiv",
          map: map,
          camera: {
            position: position,
            tilt: 75
          }
          });

        let btn = document.getElementById('btn')
        btn.onclick = function() {
            btn.style.backgroundColor = 'red'

            view.goTo({
              center: [-126, 49]
            })
            .catch(function(error) {
              if (error.name != "AbortError") {
                 console.error(error, ': Recenter failed.');
              }
            });

        };

    })

