let productsObj=[
{
    img:"bs1.png",
    name:"Rose Plant",
    price:20,
},
{
    img:"bs2.png",
    name:"Agave Plant",
    price:35,
},
{
    img:"bs3.png",
    name:"Climbing fig",
    price:46,
},
{
    img:"bs4.png",
    name:"Snake Plant",
    price:15,
},
{
    img:"bs5.png",
    name:"Bellflower",
    price:10,
},
{
    img:"bs6.png",
    name:"Chrysanth Plant",
    price:26,
},
{
    img:"bs7.png",
    name:"Amaryllis Plant",
    price:44,
},
{
    img:"bs8.png",
    name:"zamioculcas Plant",
    price:53,
},


]




function productsData(displayData){
    let productData=" ";
displayData.forEach((data)=>{
   productData +=`<div>
        <img class="inline transition duration-300 hover:transform hover:-translate-y-2" src="./images/${data.img}">
        <h2 class="font-bold">${data.name}</h2>
        <p>$${data.price}</p>
    </div>`
  
})
document.getElementById("prodId").innerHTML=productData;
// console.log(productData)
}

window.onload = function () {
    productsData(productsObj);
}


function searchData(){
    let inpData=document.getElementById("inpSearch").value;
    let filteredData= productsObj.filter((data)=>{
          return data.name.toUpperCase().indexOf(inpData.toUpperCase()) != -1;
    })
    productsData(filteredData);
}


