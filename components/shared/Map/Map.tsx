'use client'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import styles from './map.module.css'

const DEFAULT_CENTER = [1.304472255009184, 103.79674786648242]

const customIcon = L.icon({
  iconUrl: '/logo.jpg',
  iconSize: [50, 25],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

const openGoogle = () => {
  window.open(
    'https://www.google.com/maps/place/LemonFridge+Studio/@1.3044812,103.796762,15z/data=!4m2!3m1!1s0x0:0xd82d4185f431e53e?sa=X&ved=1t:2428&ictx=111',
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
      <TileLayer url='https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png' />
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
