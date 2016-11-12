var jsMobileNav = function(obj){

    /*
      Properties:
      -----------
      buttonId: String
      menuId: String
      mainContentId: String
    */

    if (!obj.buttonId && !obj.menuId && !obj.mainContentId) {
      return;
    }

    console.log('all is well');

    obj.dom = {
      button: document.getElementById(obj.buttonId),
      close: document.getElementById(obj.closeId),
      menu: document.getElementById(obj.menuId),
      main: document.getElementById(obj.mainContentId)
    }

    obj.dom.button.addEventListener("click",function(e){
      obj.dom.main.className += ' menuOpen';
      obj.dom.menu.className += ' menuOpen';
    });

    obj.dom.close.addEventListener("click",function(e){
      obj.dom.main.className -= ' menuOpen';
      obj.dom.menu.className -= ' menuOpen';
    });

    obj.dom.menu.addEventListener("click",function(e){
      obj.dom.main.className -= ' menuOpen';
      obj.dom.menu.className -= ' menuOpen';
    });
}

window.onload = function(e){
  jsMobileNav({
    buttonId: 'menuButton',
    menuId: 'menuContainer',
    mainContentId: 'bodyContainer',
    closeId: 'menuButtonClose',
  });
};
