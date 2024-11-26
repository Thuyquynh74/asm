const topMenu = document.getElementById('cus-top-menu')
const searchBar = document.getElementById('searcch-bar')
 
  const toggleTopMenuicon = document.getElementById('cus-toggel-top-menu-icon')

  document.addEventListener('click', (e) => {
    if (toggleTopMenuicon.contains(e.target)) {
      topMenu.classList.toggle('hidden')
      topMenu.classList.toggle('cus-topmenu-expanded')
      searchBar.classList.toggle('hidden')
      searchBar.classList.toggle('cus-search-bar')
    }
  })