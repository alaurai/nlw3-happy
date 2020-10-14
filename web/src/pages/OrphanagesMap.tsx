import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 69 ],
  popupAnchor: [170, 2]

})

function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marcador do mapa"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Pedregulho</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-20.2562227,-47.4810384]}
        zoom={16}
        style={{width: "100%", height: "100%"}}
      > 
      {/*<TileLayer  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      <Marker 
        position={[-20.2562227,-47.4810384]}
        icon={mapIcon}>
        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
          Lar das Meninas
          <Link to="orphanages/1">
            <FiArrowRight size={20} color="#fff"/>
          </Link>
        </Popup>
        </Marker>
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  )
}


export default OrphanagesMap;