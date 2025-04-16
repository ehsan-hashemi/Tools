      // جدول ابجد
const abjadTable = {
    'ا': 1, 'ب': 2, 'ج': 3, 'د': 4,
    'ه': 5, 'و': 6, 'ز': 7, 'ح': 8,
    'ط': 9, 'ی': 10, 'ک': 20, 'ل': 30,
    'م': 40, 'ن': 50, 'س': 60, 'ع': 70,
    'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200,
    'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600,
    'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000
};

// محاسبه عدد ابجد
function calculateAbjad() {
    const name = document.getElementById('nameInput').value;
    let total = 0;

    for (const char of name) {
        if (abjadTable[char]) {
            total += abjadTable[char];
        }
    }
    document.getElementById('result').innerText = `عدد ابجد: ${total}`;
}

// تبدیل عدد ابجد به حروف
function convertToName() {
    const abjadNumber = parseInt(document.getElementById('abjadInput').value, 10);
    let remaining = abjadNumber;
    let result = '';

    const entries = Object.entries(abjadTable).sort((a, b) => b[1] - a[1]);

    for (const [letter, value] of entries) {
        while (remaining >= value) {
            result += letter;
            remaining -= value;
        }
    }

    document.getElementById('nameResult').innerText = `نام پیشنهادی: ${result}`;
}
