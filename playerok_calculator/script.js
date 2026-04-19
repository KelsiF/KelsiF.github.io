function calculate() {
    const buyPrice = parseFloat(document.getElementById('buyPrice').value) || 0;
    const sellPrice = parseFloat(document.getElementById('sellPrice').value) || 0;
    const adFee = 25; // Фиксированная цена за рекламу
    
    let afterFirstFee = sellPrice * 0.80;
    
    let finalReceived = afterFirstFee * 0.94;
    
    let profit = finalReceived - adFee - buyPrice;
    let totalFees = (sellPrice - finalReceived) + adFee;

    document.getElementById('feeAmount').innerText = totalFees.toFixed(2);
    document.getElementById('finalProfit').innerText = profit.toFixed(2);
    document.getElementById('resultBlock').style.display = 'block';
    
    const profitElement = document.getElementById('finalProfit');
    profitElement.style.color = profit < 0 ? "#ef4444" : "#22c55e";
}