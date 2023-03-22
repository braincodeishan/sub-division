// const circle = [
//     {
//         id: 0,
//         name: "Andhra Pradesh",
//         region: [
//             {
//                 name: "Kurnool Region",
//                 division: [
//                     {
//                         name: "Anantapur Division",
//                         subDivision: [
//                             {
//                                 name: "Anantpur Sub Division"
//                             },
//                             {
//                                 name: "Guntakal Sub Division"
//                             },
//                             {
//                                 name: "Kalyandurg Sub Division"
//                             },
//                             {
//                                 name: "Raidurg Sub Division"
//                             },
//                             {
//                                 name: "Tadipatri Sub Division"
//                             },
//                         ]
//                     },
//                     {
//                         name: "Chittoor Division",
//                         subDivision: [
//                             {
//                                 name: "Anantpur Sub Division"
//                             },
//                             {
//                                 name: "Guntakal Sub Division"
//                             },
//                             {
//                                 name: "Kalyandurg Sub Division"
//                             },
//                             {
//                                 name: "Raidurg Sub Division"
//                             },
//                             {
//                                 name: "Tadipatri Sub Division"
//                             },
//                         ]
//                     },
//                     {
//                         name: "Anantapur Division",
//                         subDivision: [
//                             {
//                                 name: "Anantpur Sub Division"
//                             },
//                             {
//                                 name: "Guntakal Sub Division"
//                             },
//                             {
//                                 name: "Kalyandurg Sub Division"
//                             },
//                             {
//                                 name: "Raidurg Sub Division"
//                             },
//                             {
//                                 name: "Tadipatri Sub Division"
//                             },
//                         ]
//                     },
//                     {
//                         name: "Anantapur Division",
//                         subDivision: [
//                             {
//                                 name: "Anantpur Sub Division"
//                             },
//                             {
//                                 name: "Guntakal Sub Division"
//                             },
//                             {
//                                 name: "Kalyandurg Sub Division"
//                             },
//                             {
//                                 name: "Raidurg Sub Division"
//                             },
//                             {
//                                 name: "Tadipatri Sub Division"
//                             },
//                         ]
//                     },
//                 ]
//             },
//             {
//                 name: "",
//             },
//             {
//                 name: "",
//             },
//         ]

//     }
// ]

// console.log(data['UttarPradesh']);





// const abc = document.getElementsByTagName('option')
// var crd = ["", "", ""];
// var subdn;
// var j = 0;
// for (i = 0; i < abc.length; i++) {
//     if (abc[i].outerHTML.includes('selected') && abc[i].innerHTML !== "Select SubDivision") {
//         crd[j++] = abc[i].innerHTML;

//     }

// }

// let circle=crd[0];
// let region=crd[1];
// let division=crd[2]

// var abc1 = document.getElementById('ContentPlaceHolder1_DDLSubDivision').getElementsByTagName('option');
// j=0;
// for (i = 0; i < abc1.length; i++) {
//     if (abc1[i].innerHTML !== "Select SubDivision" && abc1[i].innerHTML !== "All SubDivision") {
//         subdn[j++]=abc1[i].innerHTML
//     }

// }
// var data={
//     circle:circle,
//     region:region,
//     division:division,
//     subdivision:subdn
// }
// fetch("http://localhost:3002",{
//     method:'POST',
//     headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data)
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e);
// })