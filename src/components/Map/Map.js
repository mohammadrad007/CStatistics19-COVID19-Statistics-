import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../common/utils/util";

import "./map.css";

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <h2>maps</h2>
      <LeafletMap center={center} zoom={zoom} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
