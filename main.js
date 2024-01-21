let result = document.getElementById('screen');

function input(a) {
    result.value += a;
}

const insert = (a) => {
    if (a == 'clear') {
        result.value = '';
    } else if (a == 'del') {
        result.value = result.value.slice(0, -1);
    } else if (a == 'action') {
        try {
            result.value = eval(result.value);
        } catch (error) {
            alert('Maaf Silahkan Masukan Perintah Aritmatika Dengan Benar');
        }
    } else if (a == 'plusMinus') {
        // Mengubah nilai menjadi negatif atau positif
        result.value = parseFloat(result.value) * -1;
    } else if (a == 'percent') {
        // Menghitung nilai persen dan memperbarui result.value
        const currentValue = parseFloat(result.value);
        const percentValue = currentValue / 100;
        result.value = percentValue.toString();
    } else {
        result.value += a;
    }
}

// Menambahkan event listener untuk mendengarkan input keyboard
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Memastikan bahwa hanya karakter kalkulator yang diizinkan
    if (/[\d.+\-*/%]/.test(key)) {
        if (key === '%') {
            // Jika key adalah '%', panggil fungsi insert dengan argumen 'percent'
            insert('percent');
        } else {
            // Jika karakter lainnya, panggil fungsi input dengan karakter tersebut sebagai argumen
            input(key);
        }
    } else if (key === 'Enter') {
        insert('action');
    } else if (key === 'Backspace') {
        insert('del');
    } else if (key === 'Escape') {
        insert('clear');
    }
});

// Menghapus event listener bawaan dari tombol backspace
document.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
    }
});