function rhombusCalculator (){
    const d1Calculation = document.getElementById('rhombus-d1');
    const d1Value = d1Calculation.value;
    const d1 = parseFloat(d1Value);
    console.log(d1)

    const d2Calculation = document.getElementById('rhombus-d2');
    const d2Value = d2Calculation.value;
    const d2 = parseFloat(d2Value);
    console.log(d2);

    const area = 0.5 * d1 * d2;

    const areaValue4 = document.getElementById('area-rhombus');
    areaValue4.innerText = area;
}