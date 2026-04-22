function calculate() {
    const buyPrice = parseFloat(document.getElementById('buyPrice').value) || 0;
    const sellPrice = parseFloat(document.getElementById('sellPrice').value) || 0;
    const boostCount = parseInt(document.getElementById('boostCount').value) || 1;
    
    // Считаем стоимость рекламы: 25 за первое + 13 за каждое последующее
    let adFee = 25;
    if (boostCount > 1) {
        adFee += (boostCount - 1) * 13;
    }

    // 1. Комиссия сервиса 20%
    let afterFirstFee = sellPrice * 0.80;
    
    // 2. Комиссия за вывод 6%
    let finalReceived = afterFirstFee * 0.94;
    
    // 3. Итоговая прибыль
    let profit = finalReceived - adFee - buyPrice;
    let totalFees = (sellPrice - finalReceived) + adFee;

    // Вывод данных
    document.getElementById('feeAmount').innerText = totalFees.toFixed(2);
    document.getElementById('finalProfit').innerText = profit.toFixed(2);
    document.getElementById('resultBlock').style.display = 'block';
    
    const profitElement = document.getElementById('finalProfit');
    profitElement.style.color = profit < 0 ? "#fb7185" : "#4ade80";
}