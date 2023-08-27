// react-leaflet.d.ts
import { LatLngExpression, Map } from 'leaflet';

declare module 'react-leaflet' {
  interface MapContainerProps {
    center?: LatLngExpression;
    zoom?: number;
    whenCreated?: Map;
  }
  interface TileLayerProps{
    attribution: string;
  }
}
