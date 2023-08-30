function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  var cont1 = 1; //variável pública criada fora da function
  var img1 = "1.png";
  var img2 = "3.png";
  var img3 = "4.png";
  var tempo = 1800; //1800(milessegundos) : 1000 (milessegundo) = 1.8s
  var exibir1 = setInterval("Exibindo1()", tempo);

  function Exibindo1()
  {
      document.images["slide"].src = eval("img" + cont1);

      if (cont1 == 1)
          document.querySelector("figcaption").innerHTML = "";
      else if (cont1 == 2)
          document.querySelector("figcaption").innerHTML = "";
      else
          document.querySelector("figcaption").innerHTML = "";

      if (cont1 < 3)
          cont1++;
      else
          cont1 = 1;
  }

  function Anterior()
  {
      clearInterval(exibir1);//interrompe o looping
      document.images["slide"].src = eval("img" + cont1);
     
      if (cont1 == 2)
          cont1 = 3;
      else if (cont1 == 3)
          cont1 = 1;
      else
          cont1 = 2;

      exibir1 = setInterval("Exibindo1()", tempo);
  }

  function Proximo()
  {
      clearInterval(exibir1);//interrompe o looping
      document.images["slide"].src = eval("img" + cont1);

      if (cont1 < 3)
          cont1++;
      else
          cont1 = 1;

      exibir1 = setInterval("Exibindo1()", tempo);
     
  }
 
