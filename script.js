document.addEventListener('DOMContentLoaded', () => {
    const balanceEl = document.getElementById('balance-amount');
    const parseCurrency = (str) => Number(str.replace(/[^0-9.-]+/g, ''));
    const formatCurrency = (num) => '$' + num.toLocaleString('en-US');
    const items = [];

    const getBalance = () => parseCurrency(balanceEl.textContent);

    const setBalance = (amount) => {
        balanceEl.textContent = formatCurrency(amount);
    };

    const updateButtons = () => {
        const balance = getBalance();

        items.forEach(item => {
            const canBuy = balance >= item.price;
            const canSell = item.quantity > 0;
            const maxQuantity = item.quantity + Math.floor(balance / item.price);

            item.buyBtn.disabled = !canBuy;
            item.sellBtn.disabled = !canSell;
            item.quantityEl.max = maxQuantity;
        });
    };

    document.querySelectorAll('.item').forEach(item => {
        const price = parseCurrency(item.querySelector('.price').textContent);
        const quantityEl = item.querySelector('.quantity');
        const buyBtn = item.querySelector('.buy');
        const sellBtn = item.querySelector('.sell');
        const itemState = {
            price,
            quantity: 0,
            quantityEl,
            buyBtn,
            sellBtn
        };

        const setQuantity = (quantity) => {
            itemState.quantity = quantity;
            quantityEl.value = quantity;
        };

        const buyOne = () => {
            const balance = getBalance();

            if (balance < price) {
                return;
            }

            setQuantity(itemState.quantity + 1);
            setBalance(balance - price);
            updateButtons();
        };

        const sellOne = () => {
            if (itemState.quantity === 0) {
                return;
            }

            setQuantity(itemState.quantity - 1);
            setBalance(getBalance() + price);
            updateButtons();
        };

        const setTypedQuantity = () => {
            const typedQuantity = Math.max(0, Math.floor(Number(quantityEl.value) || 0));
            const quantityDifference = typedQuantity - itemState.quantity;

            if (quantityDifference > 0) {
                const balance = getBalance();
                const affordableQuantity = Math.floor(balance / price);
                const quantityToBuy = Math.min(quantityDifference, affordableQuantity);

                setQuantity(itemState.quantity + quantityToBuy);
                setBalance(balance - (quantityToBuy * price));
            } else if (quantityDifference < 0) {
                const quantityToSell = Math.abs(quantityDifference);

                setQuantity(typedQuantity);
                setBalance(getBalance() + (quantityToSell * price));
            } else {
                setQuantity(itemState.quantity);
            }

            updateButtons();
        };

        setQuantity(0);
        items.push(itemState);

        buyBtn.addEventListener('click', buyOne);
        sellBtn.addEventListener('click', sellOne);
        quantityEl.addEventListener('change', setTypedQuantity);
        quantityEl.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                quantityEl.blur();
            }
        });
    });

    updateButtons();
});
