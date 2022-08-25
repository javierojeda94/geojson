import fs from 'fs'

const mapWithHolesText = JSON.parse(fs.readFileSync('./map_with_holes.geojson', "utf-8"))
mapWithHolesText.geometry.coordinates.push(mapWithHolesText.geometry.coordinates[0])

const helperMapText = JSON.parse(fs.readFileSync('./helper_map.geojson', "utf-8"))

var polygons = {
    "type": "FeatureCollection",
    "features": [mapWithHolesText, helperMapText]
  };

console.log(mapWithHolesText, helperMapText)
fs.writeFileSync('./result.geojson', JSON.stringify(polygons));