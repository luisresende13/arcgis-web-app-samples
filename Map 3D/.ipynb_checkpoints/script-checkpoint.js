async function local_json(path) {
    let res = await fetch(path)
    let obj = await res.json()
    return obj
}

// local_path = 'https://pluvia-360323.ue.r.appspot.com/'
// local_path = 'http://127.0.0.1:5000/'
// let local_path = './'
let local_path = './../Python/bolsao-api/'

let month_avg = local_json(local_path + 'static/month_average_city.json')
document.getElementById('btn').innerHTML += ' - Teste'

require([
  "esri/config",
  "esri/Map",
  "esri/views/SceneView"
], function(esriConfig,Map, SceneView) {

    function buildMap() {
    
        esriConfig.apiKey = "AAPKe485dacca8c74aee95f7c4ebd77eff3e6UTR37VH-zDEdEAcZs-7HibDHWOZ8sS76ZCdT4B_sIrbO1JE74dssiFuK6mBsUR2";

        const positions = {
            '0': {
                x: -118.808, //Longitude
                y: 33.961, //Latitude
                z: 2000 //Meters
                },
            '1': {
                x: -0, //Longitude
                y: 0, //Latitude
                z: 2000 //Meters
                },
            '2': {
                x: 22, //Longitude
                y: 22, //Latitude
                z: 2000 //Meters
                }
        }

        const cluster_ids = ['0', '1', '2']
        let current = '0'
        let position = positions[current]

        function centerMapBy(i) {
            function centerMap() {
                current = i
            }
            return centerMap
        }

        for (let i of cluster_ids) {
            document.getElementById(i).onclick = centerMapBy(i)
        }

        // Build map

        const map = new Map({
          basemap: "arcgis-topographic", //Basemap layer service
          ground: "world-elevation", //Elevation service
        });

        let viewDiv = document.getElementById('viewDiv')
        const view = new SceneView({
          container: viewDiv,
          map: map,
          camera: {
            position: position,
            tilt: 75
          }
        });

    }
    
    buildMap()        
        
    });

