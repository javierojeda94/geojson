import { union } from '@turf/turf'
import fs from 'fs'

const text = fs.readFileSync('./divided_map.geojson', "utf-8")
const features = JSON.parse(text).features
let finalFeature = features[0]

for(let i=1;i<features.length;i++) {
    console.log(`Combining feature #${i}/${features.length}`)
    finalFeature = union(finalFeature, features[i])
}

console.log(finalFeature)
fs.writeFileSync('./result.geojson', JSON.stringify(finalFeature));