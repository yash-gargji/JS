// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
        // if there is not break it will execute all the below staements except default
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}