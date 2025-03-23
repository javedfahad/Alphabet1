function UPPER(){
    document.getElementById("d1").style.textTransform="uppercase"
    document.getElementById("t1").style.textTransform="uppercase"
}
function LOWER(){
    document.getElementById("d1").style.textTransform="lowercase"
    document.getElementById("t1").style.textTransform="lowercase"

}
function th(){
    A=document.getElementById("t1").value
    switch(A)
    {
                case "a":
                    document.getElementById("d1").innerHTML="a for apple"
                    document.getElementById("d2").style.backgroundImage="url(imag/apple.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    document.getElementById("d2").style.backgroundRepeat = "no-repeat";
                    var audio=new Audio('audio/apple.mp3');
                    audio.play();
                    break;
                case "A":
                    document.getElementById("d1").innerHTML="A FOR APPLE" 
                    document.getElementById("d2").style.backgroundImage="url(imag/apple.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/apple.mp3');
                    audio.play();
                    break;  
                case "b":
                    document.getElementById("d1").innerHTML="b for ball" 
                    document.getElementById("d2").style.backgroundImage="url(imag/ball.jpg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/ball.mp3');
                    audio.play();
                    break; 
                case "B":
                    document.getElementById("d1").innerHTML="B FOR BALL" 
                    document.getElementById("d2").style.backgroundImage="url(imag/ball.jpg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/ball.mp3');
                    audio.play();
                    break;
                case "c":
                    document.getElementById("d1").innerHTML="c for cat" 
                    document.getElementById("d2").style.backgroundImage="url(imag/cat.jpg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/cat.mp3');
                    audio.play();
                break; 
                case "C":
                    document.getElementById("d1").innerHTML="C FOR CAT" 
                    document.getElementById("d2").style.backgroundImage="url(imag/cat.jpg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/cat.mp3');
                    audio.play();
                    break;
                case "d":
                    document.getElementById("d1").innerHTML="d for dog" 
                    document.getElementById("d2").style.backgroundImage="url(imag/dog.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/dog.mp3');
                    audio.play();
                break; 
                case "D":
                    document.getElementById("d1").innerHTML="D FOR DOG" 
                    document.getElementById("d2").style.backgroundImage="url(imag/dog.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/dog.mp3');
                    audio.play();
                    break;
                case "e":
                    document.getElementById("d1").innerHTML="e for egg" 
                    document.getElementById("d2").style.backgroundImage="url(imag/egg.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/egg.mp3');
                    audio.play();
                break; 
                case "E":
                    document.getElementById("d1").innerHTML="E FOR EGG" 
                    document.getElementById("d2").style.backgroundImage="url(imag/egg.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/egg.mp3');
                    audio.play();
                    break;
                case "f":
                    document.getElementById("d1").innerHTML="f for fan"
                    document.getElementById("d2").style.backgroundImage="url(imag/fan.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"  
                    var audio=new Audio('audio/fan.mp3');
                    audio.play();
                break; 
                case "F":
                    document.getElementById("d1").innerHTML="F FOR FAN" 
                    document.getElementById("d2").style.backgroundImage="url(imag/fan.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/fan.mp3');
                    audio.play();
                    break;
                case "g":
                    document.getElementById("d1").innerHTML="g for goat" 
                    document.getElementById("d2").style.backgroundImage="url(imag/goat.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/goat.mp3');
                    audio.play();
                break; 
                case "G":
                    document.getElementById("d1").innerHTML="G FOR GOAT" 
                    document.getElementById("d2").style.backgroundImage="url(imag/goat.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/goat.mp3');
                    audio.play();
                    break;
                case "h":
                    document.getElementById("d1").innerHTML="h for house"
                    document.getElementById("d2").style.backgroundImage="url(imag/house.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/house.mp3');
                    audio.play();
                break; 
                case "H":
                    document.getElementById("d1").innerHTML="H FOR HOUSE"
                    document.getElementById("d2").style.backgroundImage="url(imag/house.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/house.mp3');
                    audio.play();
                    break;
                case "i":
                    document.getElementById("d1").innerHTML="i for ice" 
                    document.getElementById("d2").style.backgroundImage="url(imag/ice.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/ice.mp3');
                    audio.play();
                break; 
                case "I":
                    document.getElementById("d1").innerHTML="I FOR ICE" 
                    document.getElementById("d2").style.backgroundImage="url(imag/ice.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/ice.mp3');
                    audio.play();
                    break;
                case "j":
                    document.getElementById("d1").innerHTML="j for jam" 
                    document.getElementById("d2").style.backgroundImage="url(imag/jam.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/jam.mp3');
                    audio.play();
                break; 
                case "J":
                    document.getElementById("d1").innerHTML="J FOR JAM" 
                    document.getElementById("d2").style.backgroundImage="url(imag/jam.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/jam.mp3');
                    audio.play();
                    break;
                case "k":
                    document.getElementById("d1").innerHTML="k for kite" 
                    document.getElementById("d2").style.backgroundImage="url(imag/kite.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/kite.mp3');
                    audio.play();
                break; 
                case "K":
                    document.getElementById("d1").innerHTML="K FOR KITE" 
                    document.getElementById("d2").style.backgroundImage="url(imag/kite.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/kite.mp3');
                    audio.play();
                    break;
                case "l":
                    document.getElementById("d1").innerHTML="l for light" 
                    document.getElementById("d2").style.backgroundImage="url(imag/light.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/light.mp3');
                    audio.play();
                break; 
                case "L":
                    document.getElementById("d1").innerHTML="L FOR LIGHT"
                    document.getElementById("d2").style.backgroundImage="url(imag/mat.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/light.mp3');
                    audio.play();
                    break;
                case "m":
                    document.getElementById("d1").innerHTML="m for mat" 
                    document.getElementById("d2").style.backgroundImage="url(imag/mat.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/mat.mp3');
                    audio.play();
                break; 
                case "M":
                    document.getElementById("d1").innerHTML="M FOR MAt" 
                    document.getElementById("d2").style.backgroundImage="url(imag/mat.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/mat.mp3');
                    audio.play();
                    break;
                case "n":
                    document.getElementById("d1").innerHTML="n for net"
                    document.getElementById("d2").style.backgroundImage="url(imag/net.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/net.mp3');
                    audio.play();
                break; 
                case "N":
                    document.getElementById("d1").innerHTML="N FOR NET" 
                    document.getElementById("d2").style.backgroundImage="url(imag/net.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/net.mp3');
                    audio.play();
                    break;
                case "o":
                    document.getElementById("d1").innerHTML="o for orange"
                    document.getElementById("d2").style.backgroundImage="url(imag/orange.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/orange.mp3');
                    audio.play();
                break; 
                case "O":
                    document.getElementById("d1").innerHTML="O FOR ORANGE" 
                    document.getElementById("d2").style.backgroundImage="url(imag/orange.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/orange.mp3');
                    audio.play();
                    break;
                case "p":
                    document.getElementById("d1").innerHTML="p for parrot"
                    document.getElementById("d2").style.backgroundImage="url(imag/parrot.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/parrot.mp3');
                    audio.play();
                break;
                case "P":
                    document.getElementById("d1").innerHTML="P FOR PARROT"
                    document.getElementById("d2").style.backgroundImage="url(imag/parrot.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/parrot.mp3');
                    audio.play();
                    break; 
                case "q":
                    document.getElementById("d1").innerHTML="q for queen" 
                    document.getElementById("d2").style.backgroundImage="url(imag/queen.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/queen.mp3');
                    audio.play();
                break; 
                case "Q":
                    document.getElementById("d1").innerHTML="Q FOR QUEEN"
                    document.getElementById("d2").style.backgroundImage="url(imag/queen.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/queen.mp3');
                    audio.play();
                    break;
                case "r":
                    document.getElementById("d1").innerHTML="r for rocket" 
                    document.getElementById("d2").style.backgroundImage="url(imag/rocket.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/rocket.mp3');
                    audio.play();
                break; 
                case "R":
                    document.getElementById("d1").innerHTML="A FOR ROCKET"
                    document.getElementById("d2").style.backgroundImage="url(imag/rocket.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/rocket.mp3');
                    audio.play();
                    break;
                case "s":
                    document.getElementById("d1").innerHTML="s for salt" 
                    document.getElementById("d2").style.backgroundImage="url(imag/salt.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/salt.mp3');
                    audio.play();
                break; 
                case "S":
                    document.getElementById("d1").innerHTML="S FOR SALT"
                    document.getElementById("d2").style.backgroundImage="url(imag/salt.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/salt.mp3');
                    audio.play();
                    break;
                case "t":
                   document.getElementById("d1").innerHTML="t for tree" 
                   document.getElementById("d2").style.backgroundImage="url(imag/tree.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/tree.mp3');
                   audio.play();
                break; 
                case "T":
                    document.getElementById("d1").innerHTML="T FOR TREE" 
                    document.getElementById("d2").style.backgroundImage="url(imag/tree.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/tree.mp3');
                    audio.play();
                    break;
                case "u":
                   document.getElementById("d1").innerHTML="u for umbrella" 
                   document.getElementById("d2").style.backgroundImage="url(imag/umb.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/umberalla.mp3');
                   audio.play();
                break; 
                case "U":
                    document.getElementById("d1").innerHTML="U FOR UMBRELLA" 
                    document.getElementById("d2").style.backgroundImage="url(imag/umb.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/umberalla.mp3');
                    audio.play();
                    break;
                case "v":
                   document.getElementById("d1").innerHTML="v for van" 
                   document.getElementById("d2").style.backgroundImage="url(imag/van.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/van.mp3');
                    audio.play();
                break; 
                case "V":
                    document.getElementById("d1").innerHTML="V FOR VAN " 
                    document.getElementById("d2").style.backgroundImage="url(imag/van.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/van.mp3');
                    audio.play();
                    break;
                case "w":
                   document.getElementById("d1").innerHTML="w for wood" 
                   document.getElementById("d2").style.backgroundImage="url(imag/wood.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/wood.mp3');
                    audio.play();
                break; 
                case "W":
                    document.getElementById("d1").innerHTML="W FOR WOOD" 
                    document.getElementById("d2").style.backgroundImage="url(imag/wood.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/wood.mp3');
                    audio.play();
                    break;
                case "x":
                   document.getElementById("d1").innerHTML="x for x-ray" 
                   document.getElementById("d2").style.backgroundImage="url(imag/xray.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/xray.mp3');
                   audio.play();
                break;
                case "X":
                    document.getElementById("d1").innerHTML="X FOR X-RAY" 
                    document.getElementById("d2").style.backgroundImage="url(imag/xray.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/xray.mp3');
                    audio.play();
                    break;
                case "y":
                   document.getElementById("d1").innerHTML="y for yak" 
                   document.getElementById("d2").style.backgroundImage="url(imag/yak.jpeg)"
                   document.getElementById("d2").style.backgroundSize="100% 100%"
                   var audio=new Audio('audio/yak.mp3');
                   audio.play();
                break; 
                case "Y":
                    document.getElementById("d1").innerHTML="Y FOR YAK"
                    document.getElementById("d2").style.backgroundImage="url(imag/yak.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%" 
                    var audio=new Audio('audio/yak.mp3');
                    audio.play();
                    break;
                case "z":
                    document.getElementById("d1").innerHTML="z for zebra" 
                    document.getElementById("d2").style.backgroundImage="url(imag/zebra.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/zebra.mp3');
                    audio.play();
                break;  
                case "Z":
                    document.getElementById("d1").innerHTML="Z FOR ZEBRA" 
                    document.getElementById("d2").style.backgroundImage="url(imag/zebra.jpeg)"
                    document.getElementById("d2").style.backgroundSize="100% 100%"
                    var audio=new Audio('audio/zebra.mp3');
                    audio.play();
                    break;
                default:
                break;                 
    }
}