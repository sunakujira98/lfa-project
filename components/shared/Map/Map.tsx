'use client'

import L, { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styles from './map.module.css'

const DEFAULT_CENTER: LatLngExpression = [
  1.2772376664753105, 103.83748115513895,
]

const customIcon = L.icon({
  iconUrl: '/logo.jpg',
  iconSize: [50, 25],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const openGoogle = () => {
  window.open(
    'https://www.google.com/maps/place/153+Neil+Rd,+%2301+01,+Singapore+088881/@1.27705,103.832621,17z/data=!3m1!4b1!4m9!1m2!2m1!1s153+Neil+Road,+%2301-01,+S088881+LFA!3m5!1s0x31da196ef33e0971:0x2cc8169babe78a7b!8m2!3d1.2770446!4d103.8374919!15sCiIxNTMgTmVpbCBSb2FkLCAjMDEtMDEsIFMwODg4ODEgTEZBkgEQY29tcG91bmRfc2VjdGlvbuABAA?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D',
    '_blank',
  )
}

const Map = () => {
  return (
    <MapContainer
      className={styles.map}
      center={DEFAULT_CENTER}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer url='https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png?api_key=ef8499a0-5508-401e-8f55-38d964702ac4' />
      <a href='google.com'>
        <Marker
          position={DEFAULT_CENTER}
          icon={customIcon}
          eventHandlers={{ click: openGoogle }}
        />
      </a>
    </MapContainer>
  )
}

export default Map
