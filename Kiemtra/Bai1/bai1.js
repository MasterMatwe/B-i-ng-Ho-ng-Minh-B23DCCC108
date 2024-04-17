function tinhToan(pheptoan) {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;

    if (isNaN(inputA) || isNaN(inputB)) {
        alert("Vui lòng nhập số!");
        return;
    }

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    let result;

    switch (pheptoan) {
        case 'SUM':
            result = a + b;
            break;
        case 'SUBTRACT':
            result = a - b;
            break;
        case 'MULTIPLY':
            result = a * b;
            break;
        case 'DIVIDE':
            if (b === 0) {
                alert("Lỗi chia cho 0!");
                return;
            }
            result = a / b;
            break;
    }

    document.getElementById('result').innerHTML = `Kết quả: ${result}`;
}

function reset() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerHTML = '';
}
