const PI = 3.1415;
const area = PI * radius * radius;
let numPlant = 80 ; //Values to choose from:20  40 and 80
let plantArea = numPlant*0.8
let availableSpace =area-plantArea;
switch ( numPlant ) {
    case 20 :
        console.log("week 1");
        console.log("Available space:", availableSpace)
        if (plantArea > 0.8*area){
            console.log("Prune your plants")
        } else if (0.5*area < plantArea < 0.8*area) {
            console.log("Monitored: acceptable rate")
              } else {
                console.log("Keep planting")
            }
        break;
    case 40 :
        console.log("week 2");
        console.log("Available space:", availableSpace)
        if (plantArea > 0.8*area){
            console.log("Prune your plants")
        } else if (0.5*area < plantArea < 0.8*area) {
            console.log("Monitored: acceptable rate")
              } else {
                console.log("Keep planting")
            }
        break;
    case 80 :
        console.log("week 3");
        console.log("Available space:", availableSpace)
        if (plantArea > 0.8*area){
            console.log("Prune your plants")
        } else if (0.5*area < plantArea < 0.8*area) {
            console.log("Monitored: acceptable rate")
              } else {
                console.log("Keep planting")
            }
        break;
    default :
            console.log("outside param");
            break;





            //----- while
            let x = 10
            while (x >= 0){
                console.log('{x} ,x')

            }