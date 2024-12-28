document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#input-section input');
    inputs.forEach(input => {
        input.addEventListener('input', calculateMetrics);
    });
});

function calculateMetrics() {
    const newLeads = parseFloat(document.getElementById('newLeads').value) || 0;
    const engagedLeads = parseFloat(document.getElementById('engagedLeads').value) || 0;
    const qualifiedLeads = parseFloat(document.getElementById('qualifiedLeads').value) || 0;
    const appointmentsBooked = parseFloat(document.getElementById('appointmentsBooked').value) || 0;
    const appointmentsShowed = parseFloat(document.getElementById('appointmentsShowed').value) || 0;
    const newSales = parseFloat(document.getElementById('newSales').value) || 0;
    const salesFromReferrals = parseFloat(document.getElementById('salesFromReferrals').value) || 0;
    const churnRate = parseFloat(document.getElementById('churnRate').value) || 0;
    const salesMarketingCosts = parseFloat(document.getElementById('salesMarketingCosts').value) || 0;
    const productOperationalCosts = parseFloat(document.getElementById('productOperationalCosts').value) || 0;

    const totalSales = newSales + salesFromReferrals;
    const totalRevenue = totalSales * 100; // Example revenue calculation
    const totalCosts = salesMarketingCosts + productOperationalCosts;
    const netProfit = totalRevenue - totalCosts;
    const grossProfitPerCustomer = totalRevenue / (newLeads + engagedLeads + qualifiedLeads);
    const cac = totalCosts / totalSales;
    const refundImpact = (churnRate / 100) * totalRevenue;
    const churnCosts = (churnRate / 100) * totalCosts;

    document.getElementById('netProfit').innerText = `$${netProfit.toFixed(2)}`;
    document.getElementById('grossProfit').innerText = `$${grossProfitPerCustomer.toFixed(2)}`;
    document.getElementById('cac').innerText = `$${cac.toFixed(2)}`;
    document.getElementById('refundImpact').innerText = `$${refundImpact.toFixed(2)}`;
    document.getElementById('churnCosts').innerText = `$${churnCosts.toFixed(2)}`;
}

function resetFields() {
    const inputs = document.querySelectorAll('#input-section input');
    inputs.forEach(input => {
        input.value = '';
    });
    calculateMetrics();
}
