// Helper component to fit map bounds to markers - Leaflet js
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

import type { Recommendation } from '@/types/index.ts';

type FitBoundsToMarkersProps = {
  recommendation: Recommendation;
  padding?: [number, number];
  maxZoom?: number;
};

export function FitBoundsToMarkers({
  recommendation,
  padding = [50, 50],
  maxZoom = 15,
}: FitBoundsToMarkersProps) {
  const map = useMap();
  const markers = recommendation.ai_response;

  useEffect(() => {
    if (!map) return;
    if (!markers || markers.length === 0) return;

    // Build an array of [lat, lng] pairs
    const latlngs = markers.map(
      (m) => [m.geocode.latitude, m.geocode.longitude] as [number, number]
    );

    // Create a LatLngBounds from the coordinates
    const bounds = L.latLngBounds(latlngs);

    if (latlngs.length === 1) {
      // If only one marker, center on it and choose a reasonable zoom
      map.setView(latlngs[0], maxZoom);
    } else {
      // Fit to bounds with some padding and an optional maxZoom
      map.fitBounds(bounds.pad(0.05), { padding, maxZoom });
    }
  }, [map, markers, padding, maxZoom]);

  return null;
}
