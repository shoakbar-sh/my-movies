"use strict"

movies.splice(100)

let content = document.querySelector(".main-content"),
   input = document.querySelector(".input"),
   categories = document.querySelector("#categories"),
   sort = document.querySelector("#nomi");

let db = movies.map((item) => {
   return {
      title: item.title,
      year: item.year,
      category: item.categories,
      id: item.imdbId,
      reating: item.imdbRating,
      time: `${Math.trunc(item.runtime / 60)} H ${item.runtime % 60} m`,
      summary: item.summary,
      youtube: `https://www.youtube.com/embed/${item.youtubeId}`,
      maxImg: item.bigThumbnail,
      minImg: item.smallThumbnail,
      language: item.language,
   };
});

console.log(db);

// ======== cards ========

function cardRender() {
   db.forEach(item => {
      let card = document.createElement('div');
      card.setAttribute(
         "class",
         "card w-[330px] bg-white min-h-[550px] rounded-lg shadow-xl border"
      );

      card.innerHTML = `
         <img src="${item.maxImg}" alt="image" class="w-[330px] h-[200px] rounded-t-lg">
         <div class="card-bady px-5">
           <h1 class="text-green-700 text-2xl uppercase mb-1">${item.title}</h1>
             <ul>
               <li><strong>Year:</strong> ${item.year}</li>
               <li><strong>Language:</strong> ${item.language}</li>
               <li><strong>Category:</strong> ${item.category}</li>
               <li><strong>Runtime:</strong> ${item.time}</li>
               <li><strong>Rating:</strong><strong class="text-red-500 ml-1">${item.reating}</strong></li>
             </ul>

            <div class="flex w-full justify-between mt-4">
               <a href="${item.youtube}" target="_blank" class="bg-red-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-red-400">Watch</a>

               <button class="bg-sky-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-sky-400">Read more</button>
               
               <button class="bg-red-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-red-400">Read bookmark</button>
            </div>
         </div>
      `

      content.append(card)
   })
};

cardRender();


function renderCard(data) {

   content.innerHTML = "";
   data.forEach((e) => {
      let card = document.createElement('div');
      card.setAttribute(
         "class",
         "card w-[330px] bg-white min-h-[550px] rounded-lg shadow-xl border");

      card.innerHTML = `
         <img src="${e.bigThumbnail}" alt="image" class="w-[330px] h-[200px] rounded-t-lg">
         <div class="card-bady px-5">
           <h1 class="text-green-700 text-2xl uppercase mb-1">${e.title}</h1>
             <ul>
               <li><strong>Year:</strong> ${e.year}</li>
               <li><strong>Language:</strong> ${e.language}</li>
               <li><strong>Category:</strong> ${e.categories}</li>
               <li><strong>Runtime:</strong> ${e.runtime}</li>
               <li><strong>Rating:</strong><strong class="text-red-500 ml-1">${e.imdbRating}</strong></li>
             </ul>

            <div class="flex w-full justify-between mt-4">
               <a href="${e.youtube}" target="_blank" class="bg-red-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-red-400">Watch</a>

               <button class="bg-sky-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-sky-400">Read more</button>
               
               <button class="bg-red-600 px-2 py-2 rounded text-white focus:ring-2 focus:ring-red-400">Read bookmark</button>
            </div>
         </div>
      `

      content.append(card)
   })
};



// ======== cards end ==========


// ======== category ==========

function dynamicOption(db) {
   let sortCategory = [];
   db.forEach(value => {
      value.categories.forEach(item => {
         if (!sortCategory.includes(item)) {
            sortCategory.push(item)
         }
      })
   })

   console.log(sortCategory);

   sortCategory.forEach((value) => {
      let optionSelect = `
        <option value=${value}>${value}</option>
      `

      categories.insertAdjacentHTML("beforeend", optionSelect)
   })

};

cardRender(movies);
dynamicOption(movies);

function listener(db) {
   db.forEach(() => {
      category.addEventListener("change", (e) => {
         const sortTuri = movies.filter((item) => {
            return item.category.includes(e.target.value);
         })

         renderCard(sortTuri)
      })
   })
};
// ======== category end =========

// ======== alfavite =========

const sortName = () => {
   let sortMovie = movies.sort((a, b) => {
      return a.title.localeCompare(b.title)
   });

   console.log(sortMovie);
};

sortName();

sort.addEventListener("change", (e) => {
   if (e.target.value === "A-z") {
      let sortMovie = movies.sort((a, b) => {
         return a.title.localeCompare(b.title);
      });

      renderCard(sortMovie)
   } else {
      let sortMovie = movies.sort((a, b) => {
         return b.title.localeCompare(a.title);
      });

      renderCard(sortMovie)
   };
});

// ========= alfavit end =======

// ========= search ========

sort.addEventListener("keyup", (e) => {
   
   let filtrArr = movies.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
   );

   renderCard(filtrArr)
});