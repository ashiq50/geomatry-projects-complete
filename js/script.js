function calculateTriangleArea (){
    // base
    const inputBase = document.getElementById('base');
    const inputText = inputBase.value;
    const base = parseFloat(inputText);
    // console.log(base)

    // height

    const inputHeight = document.getElementById('height');
    const inputText2 = inputHeight.value;
    const height = parseFloat(inputText2);
    // console.log(height)

    const area = 0.5 * base * height;
    console.log(area)

    // output show:
    const triangleArea = document.getElementById('tri-area');
    triangleArea.innerText = area;
}