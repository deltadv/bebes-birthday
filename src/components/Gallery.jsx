import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";

const texts = [
  "I carry your heart with me; I carry it in my heart. She is not merely the muse, but the heart of my art.", // e.e. cummings
  "Hope is the thing with feathers that perches in her soul; it sings the tune without the words and never stops at all.", // Emily Dickinson
  "The soul selects her own society; her presence is the sun’s sharp clarity, warming even the most distant hearts.", // Emily Dickinson
  "Because I could not stop for Death, he kindly stopped for her; but she refused, for her soul moves only forward, unyielding and eternal.", // Emily Dickinson
  "I am in awe of her spirit; it soars like the falcon, higher than the reach of ordinary hearts.", // Adapted from William Blake
  "The woods are lovely, dark, and deep, but her gaze is deeper still—a promise, a dream, a leap.", // Robert Frost
  "Do I dare disturb the universe? In her presence, every atom dares to dance.", // T.S. Eliot
  "I have measured out my life with her smiles; they are teaspoons of eternity.", // T.S. Eliot
  "The mind is its own place, and in her mind, I see a world more beautiful than paradise itself.", // John Milton
  "Two roads diverged in a wood, and she took the one ablaze with fire, forging a path no one had dared.", // Robert Frost
  "Had I the heavens’ embroidered cloths, enriched with golden and silver light, I’d spread them under her feet—she needs no light but her own.", // W.B. Yeats
  "A thing of beauty is a joy forever; she is the fountain where such joy springs eternal.", // John Keats
  "She walks in beauty, like the night of cloudless climes and starry skies; and all that's best of dark and bright meet in her aspect and her eyes.", // Lord Byron
  "Do not go gentle into that good night; her rage burns bright against the dying light, a beacon to all who follow.", // Dylan Thomas
  "I love thee freely, as men strive for right; her love is the quiet strength of unshakable might.", // Elizabeth Barrett Browning
  "I loved you first: but afterwards your love, To me, was long and vast and deep, A sea of calm.", // Christina Rossetti
];

const Gallery = () => {
  return (
    <div className="w-full h-auto p-4 sm:p-20 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="grid gap-4">
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo15}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[0]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo14}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[1]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo13}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[2]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo4}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[3]}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo16}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[4]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo6}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[5]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo9}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[6]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo8}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[7]}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo3}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[8]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo5}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[9]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo1}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[10]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo2}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[11]}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo7}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[12]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo10}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[13]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo12}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[14]}
              </span>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-auto max-w-full rounded-md object-cover object-center"
              src={photo11}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-md flex justify-center items-center transition-all duration-300 ease-in-out">
              <span className="text-yellow-200 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal opacity-0 group-hover:opacity-100 text-center p-2 sm:p-2 md:p-3 lg:p-4 transition-opacity duration-300 ease-in-out">
                {texts[15]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
