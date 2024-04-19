'use client'

import L, { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styles from './map.module.css'

const DEFAULT_CENTER: LatLngExpression = [
  1.2957330959121642, 103.83992040671865,
]

const customIcon = L.icon({
  iconUrl: '/logo.jpg',
  iconSize: [50, 25],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const openGoogle = () => {
  window.open(
    'https://www.google.com/maps/place/LFA+-+Commercial+Interior+Design+Studio/@1.2957499,103.8402423,18z/data=!4m6!3m5!1s0x31da19ff09f0bc75:0x596d09a3bdbf523c!8m2!3d1.2957579!4d103.8399365!16s%2Fg%2F11l6y9m_j8?entry=ttu',
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
