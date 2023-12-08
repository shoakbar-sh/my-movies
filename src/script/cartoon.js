"use strict"

let mainContent = document.querySelector(".content"),
   sort = document.querySelector("#nomi");

// normalize data
let file = cartoons.map((item) => {
   return {
      title: item.title,
      year: item.year,
      id: item.imdbId,
      time: `${Math.trunc(item.runtime / 60)} H  ${item.runtime % 60} m`,
      youtube: `https://hdrezka.ag/films/${item.youtubeId}`,
      minImg: item.smallThumbnail,
      language: item.language,
   };
});

//dynamic elememnts (cards)

function renderData(file) {
   mainContent.innerHTML = "";

   file.length !== 0
   file.forEach((item) => {
      const card = document.createElement('div');
      card.setAttribute(
         "class",
         "card w-[330px] cursor-default bg-white min-h-[450px] rounded-lg shadow-xl border"
      )

      card.innerHTML = `
         <img src="${item.minImg}" alt="image" class="w-[330px] h-[200px] rounded-t-lg">
         <div class="card-bady px-5">
           <h1 class="text-green-700 text-2xl mt-2 font-semibold mb-1">${item.title}</h1>

             <ul>
               <li><strong>Year:</strong> ${item.year}</li>
               <li><strong>Runtime:</strong> ${item.time}</li>
             </ul>
           
             <div class="flex w-full mb-2 mt-3">
               <a href="${item.youtube}" target="_blank" class="bg-red-600 px-2 py-2 w-64 text-center rounded text-white focus:ring-2 focus:ring-red-400">Watch</a>
             </div>
         </div>
      `

      mainContent.append(card);
   })
};

renderData(file);