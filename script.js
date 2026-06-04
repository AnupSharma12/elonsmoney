document.addEventListener('DOMContentLoaded', () => {
    const balanceEl = document.getElementById('balance-amount');
    const parseCurrency = (str) => Number(str.replace(/[^0-9.-]+/g, ''));
    const formatCurrency = (num) => '$' + num.toLocaleString('en-US');

    const updateBalance = (amount) => {
        const current = parseCurrency(balanceEl.textContent);
        const newBalance = current - amount;
        balanceEl.textContent = formatCurrency(newBalance);
    };

    document.querySelectorAll('.item').forEach(item => {
        const price = parseCurrency(item.querySelector('.price').textContent);
        const buyBtn = item.querySelector('.buy');
        const sellBtn = item.querySelector('.sell');
        buyBtn.addEventListener('click', () => {
            updateBalance(price);
        });
        // Increase balance when selling (add back the price)
        sellBtn.addEventListener('click', () => {
            const current = parseCurrency(balanceEl.textContent);
            const newBalance = current + price;
            balanceEl.textContent = formatCurrency(newBalance);
        });
    });
});
