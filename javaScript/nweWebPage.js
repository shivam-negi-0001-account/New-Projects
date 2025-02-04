function changeColor() {
    let data = document.getElementById("top");
    let header = document.getElementById("head");
    let SectionHeading = document.getElementById("headingTg");
    let pera = document.getElementById("pera");
    // let aTeg = document.getElementById("tag")




    let welcome = document.getElementById("welcome");
    data.style.backgroundColor = "green";
    data.style.transition = '1s';
    header.style.backgroundColor = "green";
    SectionHeading.style.color = 'yellow';
    pera.style.color = 'yellow';
    welcome.style.color = 'yellow';

    // aTeg.style.color = 'white';
}


function privice() {
    let data = document.getElementById("top");
    let header = document.getElementById("head");
    let SectionHeading = document.getElementById("headingTg");



    data.style.backgroundColor = "turquoise";
    data.style.transition = '1s';
    header.style.backgroundColor = "turquoise";
    SectionHeading.style.color = 'white';
    pera.style.color = 'white';
}

//  ===================== (SECTION THREE )

function settTime() {

    setInterval(() => {
        let nextDatte = new Date(' july 25 , 2024 , 12:00:00').getTime();
        // console.log(nextDatte);

        let curentDate = new Date().getTime();
        // console.log(curentDate);

        let difrence = nextDatte - curentDate;
        // console.log(difrence);

        let day = Math.floor(difrence / (1000 * 60 * 60 * 24));
        // console.log(day);

        let hour = Math.floor(difrence / (1000 * 60 * 60));
        // console.log(hour);

        let minute = Math.floor(difrence % (1000 * 60 * 60) / (1000 * 60));
        // console.log(minute);


        let secound = Math.floor(difrence % (1000 * 60) / (1000));
        // console.log(secound);

        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("secound").innerHTML = secound;

    }, 1000);
}
settTime();

// // ===================== ( SECTION FOUR) =====================

// async function productsItem() {

//     const response  = await fetch(`https://fakestoreapi.com/products`)
//     // console.log(res);

//     const Data =  await response .json();
//     // console.log(Data);

//     document.write('<table  border = "2" >');
//     document.write(' <tr>  <td> Id </td>  <td> Title </td>  <td> Price </td>  <td> Category </td>  <td> Image </td>  </tr>')

//     let productsShow = "";

//         for (i = 0; i < Data.length; i++) {
//             document.write("<tr>")
//             document.write(`<td> ${Data[i].id} </td>`)
//             document.write(`<td> ${Data[i].title} </td>`)
//             document.write(` <td> ${Data[i].price} </td>`)
//             document.write(` <td> ${Data[i].category} </td>`)
//             document.write(` <td> <img src = ${Data[i].image} width='100px' height'100px' </td>`)
//             document.write("</tr>")

            
//         }
//         document.write("</table>");
//         document.getElementById("showData").innerHTML = productsShow;
//     }
//     productsItem();

