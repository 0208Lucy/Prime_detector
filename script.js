function generatePrimes() {
    const n = document.getElementById('numberInput').value;
    if (!n || n < 2 || !Number.isInteger(Number(n))) {
        alert('請輸入一個正整數N');
        return;
    }

    const primesContainer = document.getElementById('primesContainer');
    primesContainer.innerHTML = ''; // 清空先前的結果

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
            const primeElem = document.createElement('div');
            primeElem.className = 'prime';
            primeElem.textContent = i;
            primesContainer.appendChild(primeElem);
        } else {
            const numberElem = document.createElement('div');
            numberElem.className = 'number';
            numberElem.textContent = i;
            primesContainer.appendChild(numberElem);
        }
    }

    // 處理倍數顏色，同時保留質數的紅色和粗體樣式
    primes.forEach((prime, index) => {
        const hue = (360 / primes.length) * index;
        document.querySelectorAll(`.prime, .multiple`).forEach(el => {
            if (el.textContent == prime || Number(el.textContent) % prime === 0) {
                el.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
                if (el.textContent == prime) {
                    el.style.color = 'red'; // 保持質數的字體顏色
                    el.style.fontWeight = 'bold'; // 保持質數的粗體
                }
                el.className = 'multiple';
            }
        });
    });
}

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
