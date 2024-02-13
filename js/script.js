// function calculateTriangleArea (){
//     const inputBase = document.getElementById('base');
//     const inputText = inputBase.value;
//     const base = parseFloat(inputText);


//     const inputHeight = document.getElementById('height');
//     const inputText2 = inputHeight.value;
//     const height = parseFloat(inputText2);

//     const area = 0.5 * base * height;
//     console.log(area)

//     const triangleArea = document.getElementById('tri-area');
//     triangleArea.innerText = area;
// }

function calculateTriangleArea (){
    const base = triangleMethod('base');
    const height = triangleMethod('height');
    const area = 0.5 * base * height;
    triangleArea('tri-area', area)
}

function triangleMethod(triangleId){
    const inputBase = document.getElementById(triangleId);
    const inputText = inputBase.value;
    const value = parseFloat(inputText);
    return value;
}

function triangleArea(triangleAreaId, area){
    const triangleArea = document.getElementById(triangleAreaId);
    triangleArea.innerText = area;
}

