function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo')

  if(tabMenu.length && tabContent.length) {
      function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('dt')
  const activeClass = 'ativo'

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function accordionShow(event) {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((accordionItem) => {
      accordionItem.addEventListener('click', accordionShow)
    })   
  } 
}
initAccordion()

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()