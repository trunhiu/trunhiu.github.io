//Bai1:
function printRecangle (row, col) {
    let content = '';
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            content += '* ';
        }
        content += '<br>';
    }
    document.write(`<pre>${content}</pre>`);
}

printRecangle(5,5);

//Bai 2:

function printRecangleEmty (row, col) {
    let content = '';
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if ( i == 0 || i == row - 1 || j == 0 || j == col - 1 ) {
                content += '* ';
            } else {
                content += '  ';
            }
        }
        content += '<br>';
    }
    document.write(`<pre>${content}</pre>`);
}

printRecangleEmty(5,5);

//Bai 3: 
function printRecangleEmty1(side) {
    let content = '';
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            if ( i == j || i == side - j - 1  ) {
                content += '* ';
            } else {
                content += '  ';
            }
        }
        content += '<br>';
    }
    document.write(`<pre>${content}</pre>`);
}

printRecangleEmty1(5);


//Bài 4:
function printTriangle(side) {
    let content = '';
    for (let i = 1; i <=side; i++) {
        for (let j = 1; j <= i ; j++) {
            content += '* ';
        }
        content += '<br>';
    }
    document.write(`<pre>${content}</pre>`);
}

printTriangle(5);
