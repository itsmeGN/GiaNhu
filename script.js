function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    const readmore = document.getElementById('content-read-more')
    readmore.classList.toggle('content-read-more-dark')
   
    const item = document.getElementsByClassName('item')
    for (const items of item) {
        items.classList.toggle('item-dark');
      }
  
    
    var nav = document.getElementById('navbar')
    nav.classList.toggle('navbar-dark')
    
   
    const navitem = document.getElementsByClassName('nav-items')
    // navitem.classList.add('nav-item-dark')

    
    for (const nav of navitem) {
        nav.classList.toggle('nav-item-dark');
      }


   
 }