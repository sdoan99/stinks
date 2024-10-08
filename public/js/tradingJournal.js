document.addEventListener('DOMContentLoaded', () => {
    const tradeForm = document.getElementById('trade-form');
    const tradeBody = document.getElementById('trade-body');

    // Load trades from localStorage
    const trades = JSON.parse(localStorage.getItem('trades')) || [];
    renderTrades();

    tradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(tradeForm);
        const trade = Object.fromEntries(formData.entries());
        trades.push(trade);
        localStorage.setItem('trades', JSON.stringify(trades));
        renderTrades();
        tradeForm.reset();
    });

    function renderTrades() {
        tradeBody.innerHTML = '';
        trades.forEach((trade, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${trade.date}</td>
                <td>${trade.symbol}</td>
                <td>${trade.action}</td>
                <td>${trade.price}</td>
                <td>${trade.quantity}</td>
                <td>${trade.notes}</td>
                <td><button onclick="deleteTrade(${index})">Delete</button></td>
            `;
            tradeBody.appendChild(row);
        });
    }

    window.deleteTrade = function(index) {
        trades.splice(index, 1);
        localStorage.setItem('trades', JSON.stringify(trades));
        renderTrades();
    };
});