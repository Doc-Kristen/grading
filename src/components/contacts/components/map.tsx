import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/useMap';
import * as S from '../contacts.styled';
import { City } from 'types/city';
import { URL_MARKER_DEFAULT, URL_MARKER_SHADOW } from 'helpers/const';

type MapProps = {
    city: City;
};

const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    shadowUrl: URL_MARKER_SHADOW,
    iconSize: [40, 40],
    shadowSize: [40, 40],
    shadowAnchor: [20, 20],
    iconAnchor: [20, 20],
});

const Map = (props: MapProps): JSX.Element => {
    const { city } = props;
    const mapRef = useRef(null);
    const map = useMap(mapRef, city);
    useEffect(() => {
        if (map) {
            const marker = new Marker({
                lat: city.location.latitude,
                lng: city.location.longitude,
            });

            marker
                .setIcon(defaultCustomIcon)
                .addTo(map);
        }
    }, [city.location.latitude, city.location.longitude, map]);

    return <S.ContactsMap ref={mapRef} />;
};

export default Map;
