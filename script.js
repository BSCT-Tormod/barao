console.log("Bonjour Barao !");
window.addEventListener("scroll", () => {
      console.log(window.scrollY);

      // Pour faire disparaitre le header-video
      document.querySelector("#header-video").style.opacity = 100-(50*(window.scrollY)/1000) + "%"; // La deuxieme valeur est a changer pour changer la vitesse de disparition


      if(window.scrollY < 1600){
            document.querySelector(".header").style.top = -window.scrollY*1.1 + "px";
            document.querySelector("#barao-title").style.top = -window.scrollY*0.31+220 + "px";
            document.querySelector("#barao-title").style.fontSize = 300-(70*window.scrollY/1600) + "px";
      } else if (window.scrollY > 1600){
            document.querySelector(".header").style.top = -1600*1.1 + "px";
            document.querySelector("#barao-title").style.top = -1600*0.31+220 + "px";
            document.querySelector("#barao-title").style.fontSize = 300-(70*1600/1600) + "px";
      }
      
      if(window.scrollY < 1200){
            document.querySelector("#bar").style.right = window.scrollY*0.2-192 + "px";
      } else if (window.scrollY > 1200){
            document.querySelector("#bar").style.right = 48 + "px";
      }
      if(window.scrollY < 1400){
            document.querySelector("#bar2").style.right = window.scrollY*0.2-232 + "px";
      } else if (window.scrollY > 1400){
            document.querySelector("#bar2").style.right = 48 + "px";
      }
      if(window.scrollY < 1600){
            document.querySelector("#bar3").style.right = window.scrollY*0.2-272 + "px";
      } else if (window.scrollY > 1600){
            document.querySelector("#bar3").style.right = 48 + "px";
      }



      // Mouvement du sous-titre
      document.querySelector("#barao-subtitle").style.top = -window.scrollY*.2+100 + "px";
});