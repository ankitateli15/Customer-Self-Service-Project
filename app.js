document.getElementById('submitClaimForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Client-side validation 
    const policyNumber = document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const description = document.getElementById('description').value;

    if (policyNumber === '' || incidentDate === '' || description === '') {
        alert('All fields are required!');
        return;
    }

    const newClaim = {
        claimNumber: `CLM${Math.floor(Math.random() * 1000)}`,
        status: 'In Review',
        dateSubmitted: new Date().toISOString().split('T')[0]
    };

  
    const claimsTable = document.getElementById('claimsTable').getElementsByTagName('tbody')[0];
    const newRow = claimsTable.insertRow();
    newRow.insertCell(0).innerText = newClaim.claimNumber;
    newRow.insertCell(1).innerText = newClaim.status;
    newRow.insertCell(2).innerText = newClaim.dateSubmitted;

    document.getElementById('formSuccessMessage').style.display = 'block';

    // Clear the form
    document.getElementById('submitClaimForm').reset();
});

function openChat() {
    var chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'none') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
}



document.getElementById('searchQuery').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    const faqs = [
        { question: 'How do I file a claim?', answer: 'Click on "Submit a New Insurance Claim" and fill out the form.' },
        { question: 'What’s the status of my claim?', answer: 'Track your claim using the claims dashboard.' },
        { question: 'What is covered under my insurance?', answer: 'Refer to your insurance policy for coverage details.' }
    ];

    
    const results = faqs.filter(faq => faq.question.toLowerCase().includes(query));


    resultsDiv.innerHTML = '';
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `<strong>${result.question}</strong><p>${result.answer}</p>`;
        resultsDiv.appendChild(resultDiv);
    });


    
});
