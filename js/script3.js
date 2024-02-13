function parallelogramCalculation(){

    // base solution:
    const paraBase = document.getElementById('base-parallelogram');
    const paraInput = paraBase.value;
    const base = parseFloat(paraInput);
    console.log(base)

    // height solution:
    const paraHeight = document.getElementById('height-parallelogram');
    const paraHeightInput = paraHeight.value;
    const height = parseFloat(paraHeightInput);
    console.log(height);

    // area set:
    const area = base * height;

    // final output count:

    const areaValue2 = document.getElementById('parallelogram');
    areaValue2.innerText = area;
    console.log(area)
    

}