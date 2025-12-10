// Leaflet js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import pin from '@/assets/alfiler.png';
import { FitBoundsToMarkers } from './FitBoundsToMarkers.tsx';

import type { Recommendation } from '@/types/index.ts';

type RecommendationsProps = {
  recommendation: Recommendation;
  setRecommendation: (recommendation: Recommendation | null) => void;
};

const pinIcon = new Icon({
  iconUrl: pin,
  iconSize: [38, 38],
  iconAnchor: [12, 41],
});

/* 
    Example input: "A place with cheap food and vibrant nightlife in Europe"
    */

export function DisplayRecommendation({
  recommendation,
  setRecommendation,
}: RecommendationsProps) {
  console.log(recommendation);

  return (
    <div className='relative flex min-h-screen w-full flex-col overflow-hidden md:w-8/12 m-auto'>
      <div className='flex flex-col min-h-full p-4 pt-12'>
        <div className='flex-shrink-0 space-y-4'>
          <div className='rounded-xl bg-gray-200 dark:bg-gray-700 p-4'>
            <p className='text-gray-900 dark:text-white'>
              {recommendation.userInput}
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <div className='flex-shrink-0'>
              <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center'>
                <span className='material-symbols-outlined text-white !text-xl'>
                  auto_awesome
                </span>
              </div>
            </div>
            <div className='rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-4'>
              <div className='text-gray-900 dark:text-white'>
                Here are several recommendations that match your description:
                <br />
                <br />
                {/* Loop through recommendation array to display each recommendation in an unordered list: */}
                {recommendation.ai_response?.map((rec, index) => (
                  <div key={index} className='mb-4'>
                    <strong>
                      {rec.city}, {rec.country}
                    </strong>
                    : {rec.explanation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <MapContainer
          center={[48.8566, 2.3522]}
          zoom={13}
          className='mt-4 min-h-80 rounded-xl overflow-hidden'
        >
          <FitBoundsToMarkers recommendation={recommendation} />

          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
          />
          {recommendation.ai_response?.map((rec, index) => (
            <Marker
              key={index}
              position={[rec.geocode.latitude, rec.geocode.longitude]}
              icon={pinIcon}
            >
              <Popup>{rec.explanation}</Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className='flex-shrink-0 pb-4 mt-4'>
          <button
            className='flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary text-white text-base font-bold leading-normal font-display shadow-lg'
            onClick={() => setRecommendation(null)}
          >
            <span className='material-symbols-outlined'>search</span>
            <span className='truncate'>Search new destinations</span>
          </button>
        </div>
      </div>
    </div>
  );
}
