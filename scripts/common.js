function clearData() {
    document.getElementById('dataInput').value = "";

    if (document.getElementById('negativeInput')) {
        document.getElementById('negativeInput').value = "";
    }
    if (document.getElementById('resultsTable')) {
        document.getElementById('resultsTable').style.display = 'none';
    }
    if (document.getElementById('missingTeamsTable')) {
        document.getElementById('missingTeamsTable').style.display = 'none';
    }
    if (document.getElementById('maximasTable')) {
        document.getElementById('maximasTable').style.display = 'none';
    }
    if (document.getElementById('statsTable')) {
        document.getElementById('statsTable').style.display = 'none';
    }
    if (document.getElementById('matchTable')) {
        document.getElementById('matchTable').style.display = 'none';
    }
}
