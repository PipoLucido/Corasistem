
var aText = new Array(
    "Profundo analisis desde un punto de vista Filosofico",
    "sobre la regulacion cientifica en puntos criticos de las",
    "tecnicas humanas y el desarollo que estas impulsan." 
    
    );
    var iSpeed = 50;
    var iIndex = 0; 
    var iArrLength = aText[0].length;
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 200);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

    let openArticuloAudio = new Audio();

    openArticuloAudio.src = "./sounds/mgsvgz/sfx_s_terminal_cursol.mp3";

    function dosDiesiciocho(){
    
     openArticuloAudio.play()

     document.getElementById('contenidoSeleccionado').innerHTML = "<div id='tituloArticulo' style='display: block;'> <h1>EL SOFTWARE SE ESTA COMIENDO AL MUNDO</h1><br> <p>En un articulo publicado en THE WALL STREET JOURNAL por el fundador de Netscape(Navegador web) describia como las ultimas tecnologias pueden desarollar un crecimiento en nuestra economia y nuestra forma de hacer negocios. En el articulo Marc Andreessen cita 'El software se esta comiendo al mundo' y es la que da inicio a este analisis sobre estas mismas palabras.</p> <br><p>Como es eso de que el software se esta comiendo al mundo? donde esta? como lo podemos ver? y eso de que manera me incumbe? Finalizando 2018 los conflictos mundiales siguen siendo obra de la venta de armas. los humanos parecen no cambiar su manera de hacer las cosas. llegan noticias sobre Ucrania y Rusia a travez de Twitter. en Netflix hay series que tocan este conflico a cambio de ofrecer una historia genial sin mas que decir, asi es, una noticia tan suave como la de una posible guerra nos llegan a travez de estos medios de comunicacion en forma de entretenimiento. esto quiere decir que tanto la manera de informarnos como la de consumir entretenimiento van de la mano con desarollo de estas tecnologias. El software es algo de lo que todos deberiamos informarnos. 1760-1840 La revolucion industrial fue un proceso en el que la tecnologia cambio y genero un proceso de transformacion economica social muchas personas se quedaban sin empleo por no saber ejercer ni manipular las nuevas formas de usar la tecnologia. aunque este proceso trajo un avance en el mundo tambien trajo mucha crisis pero volviendo al presente. No esta pasando algo parecido?</p> <br><img class='imagenArticulo1' src='https://cleventy.com/wp-content/uploads/2014/05/ID-100126961.jpg' alt='El mundo en tus manos'> <br><br><p>Mobilizaciones feministas se ven mas que nunca global mente por una lucha contra la violencia machista y una serie de temas similares. al parecer la sociedad ya no se ve con la necesidad de ejercer la fuerza bruta. La fuerte mano de obra ya no es necesaria para manipular maquinarias pesadas. softwares de control del area de la mecatronica simplifican estos problemas eliminando la necesidad de un humano para estos trabajos almenos en las acciones de riesgo que es donde la fuerza se aplica.</p> <br><p>Desde que el arma de fuego se invento se acabaron los hombres decia mi abuela. El desarollo de un arma requiere de tecnicas de ingenieria mecanica y su mejora puede extenderse a un desarollo mas complicado Matematicas analiticas, Discretas, Electronica y si tambien analizamos a las armas nucleares necesitamos de quimica. Los hombres que ejercen la violencia antes de usar tecnologias son inutiles para el desarollo tanto armamental como industrial en esta era.</p> <br><p>En pocas palabras doy inicio a este blog personal declarando una nueva revolucion en el mundo de la mano del software ya que con este,un gran avance se esta propagando en el sector industrial, economico y militar.</p> <br> <img src='https://i.pinimg.com/236x/2b/e5/24/2be52407eb20ac32e162edbb43e4b700--forget-him-anonymous.jpg' alt='REvolution'></div>";

    }

    function openTw(){
     window.open('https://twitter.com/Pipo_lucido')
    }

    function openFb(){
     window.open('https://www.facebook.com/shemademekillmyself')
    }

    function openLn(){
     window.open('https://www.linkedin.com/in/rodrigo-pereyra-051411151/')
    }

    function openGh(){
     window.open('https://github.com/PipoLucido')
    }