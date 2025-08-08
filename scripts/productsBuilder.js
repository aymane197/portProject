const projectsArea = document.getElementById('projects');

products.forEach((item)=>{

projectsArea.innerHTML += `
  <div class="border border-slate-200 p-2 shadow-md rounded-lg overflow-hidden w-96 h-[380px] flex flex-col transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">

    <div class="h-48 w-full overflow-hidden">
      <img 
        class="w-full h-full object-cover rounded-t-sm transition-transform duration-300 hover:scale-105" 
        style="filter: saturate(0.95) brightness(0.97);" 
        src="${item.image}" 
        alt="${item.name}">
    </div>

    <div class="flex flex-col justify-between flex-1 px-4 py-3 space-y-3">
      <div>
        <h3 class="font-bold text-lg text-slate-800 dark:text-gray-100 tracking-tight">
          ${item.name}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          ${item.description}
        </p>
      </div>

      <a href="${item.link}" 
         rel="noopener noreferrer" 
         class="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md transition-all duration-200 group">
         Visit 
         <i class="ri-arrow-right-up-long-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
      </a>
    </div>
  </div>
`;

  console.log(projectsArea);



});