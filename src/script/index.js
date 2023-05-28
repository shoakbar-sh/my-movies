"use strict"

let mainContent = document.querySelector(".main-content"),
   sort = document.querySelector("#nomi");

// normalize data
let db = movies.map((item) => {
   return {
      title: item.title,
      year: item.year,
      id: item.imdbId,
      rating: item.imdbRating,
      time: `${Math.trunc(item.runtime / 60)} H  ${item.runtime % 60} m`,
      youtube: `https://gidonline.io/title/${item.youtubeId}`,
      minImg: item.smallThumbnail,
      language: item.language,
   };
});

//dynamic elememnts (cards)

function renderData(db) {
   mainContent.innerHTML = "";

   db.length !== 0
      ? db.forEach((item) => {
         const card = document.createElement('div');
         card.setAttribute(
            "class",
            "card w-[330px] cursor-default bg-white min-h-[470px] rounded-lg shadow-xl border"
         )

         card.innerHTML = `
         <img src="${item.minImg}" alt="image" class="w-[330px] h-[200px] rounded-t-lg">
         <div class="card-bady px-5">
           <h1 class="text-green-700 text-2xl mt-2 font-semibold mb-1">${item.title}</h1>

             <ul>
               <li><strong>Year:</strong> ${item.year}</li>
               <li><strong>Language:</strong> ${item.language}</li>
               <li><strong>Runtime:</strong> ${item.time}</li>
               <li><strong>Rating:</strong><strong class="text-red-500 ml-1">${item.rating}</strong></li>
             </ul>
           
             <div class="flex w-full mt-4">
               <a href="${item.youtube}" target="_blank" class="bg-red-600 px-2 py-2 w-64 text-center rounded text-white focus:ring-2 focus:ring-red-400">Watch</a>
             </div>
         </div>
      `

         mainContent.append(card);
      })
      : (mainContent.innerHTML = `<h1 class="bg-red-100 py-4 px-5 rounded-lg text-xl text-center flex items-center justify-center h-[65px] mx-auto">MA'LUMOT TOPILMADI</h1>`);
};

renderData(db);