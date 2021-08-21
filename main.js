// extraMemoryCost function

function extraMemoryCost(updatedMemoryCost) {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = updatedMemoryCost;
}

// extraStorageCost function

function extraStorageCost(updatedStorageCost) {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = updatedStorageCost;
}

// delivery cost function

function deliveryCost(updatedCost) {
    const freeDeliveryCostText = document.getElementById('delivery-charge');
    freeDeliveryCostText.innerText = updatedCost;
}

document.getElementById('8gb-memory').addEventListener('click', function () {
    extraMemoryCost(0);
});

document.getElementById('16gb-memory').addEventListener('click', function () {
    extraMemoryCost(180);
});

// storage
document.getElementById('256gb-ssd').addEventListener('click', function () {
    extraStorageCost(0);
});

document.getElementById('512gb-ssd').addEventListener('click', function () {
    extraStorageCost(100);
});

document.getElementById('1tb-ssd').addEventListener('click', function () {
    extraStorageCost(180);

});

// delivery option
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCost(0);
});

document.getElementById('paid-delivery').addEventListener('click', function () {
    deliveryCost(20);
});


// apply button event
document.getElementById('apply-button').addEventListener('click', function () {
    const applyInput = document.getElementById('apply-input');
    const totalPriceText = document.getElementById('total-price');
    const totalPriceNum = parseFloat(totalPriceText.innerText);
    const footerTotal = document.getElementById('footer-total');
    const offer = totalPriceNum / 20;
    if (applyInput.value == 'stevekaku') {
        footerTotal.innerText = totalPriceNum - offer;
    } else {
        footerTotal.innerText = totalPriceNum;
    }
})