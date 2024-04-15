// CONVERT DATA TO JSON FORMAT 
// fetch('https://fakestoreapi.com/products').then((data)=>{
//     // console.log(data);
//     return data.json()  // DATA CONVERTED 
// }).then((objectData)=>{
//     console.log(objectData);

//     let tableData = " ";
//     objectData.map((values)=>{
//         tableData+= `
//         <tr>
//             <td>${values.title}</td>
//             <td>${values.description}</td>
//             <td>${values.price}</td>
//             <td>${values.image }</td>
//         </tr>
//         `
//     });
//     document.getElementById("table_body").
//     innerHTML=tableData;
// }).catch((err)=>{
//     alert("There is an Error");
// })