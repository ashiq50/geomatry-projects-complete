// function rectangleArea(){
//     const rectangleWidth = document.getElementById('width');
//     const rectangleValue = rectangleWidth.value;
//     const width = parseFloat(rectangleValue);

//     const inputLength = document.getElementById('length');
//     const lengthValue = inputLength.value;
//     const length = parseFloat(lengthValue);

//     const area = width * length;

//     const areaValue = document.getElementById('rec-area');
//     areaValue.innerText = area;
    
    
// }




// function rectangleArea(){
//     const width = rectangleAreaMethod('width');
//     const length = rectangleAreaMethod('length');
//     const area = width * length;
//     rectangleArea('rec-area', area)
// }



// function rectangleAreaMethod(rectangle){
//     const rectangleWidth = document.getElementById(rectangle);
//     const rectangleValue = rectangleWidth.value;
//     const value = parseFloat(rectangleValue);
//     return value;

// }

// function rectangleArea (rectangleId, area){
//     const rectangleArea1 = document.getElementById(rectangleId);
//     rectangleArea1.innerText = area;
// }

function rectangleArea(){
    const width = rectangleAreaMethod('width');
    const length = rectangleAreaMethod('length');
    const area = width * length;
    rectangleAreaOutput('rec-area', area);
}

function rectangleAreaMethod(rectangleId){
    const rectangleElement = document.getElementById(rectangleId);
    const rectangleValue = rectangleElement.value;
    const value = parseFloat(rectangleValue);
    return value;
}

function rectangleAreaOutput(rectangleId, area){
    const rectangleAreaElement = document.getElementById(rectangleId);
    rectangleAreaElement.innerText = area;
}
