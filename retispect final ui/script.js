function isSimilar(word1, word2) {
    const maxDistance = 3;  // You can tweak this based on how "similar" you want the words to be
    return levenshteinDistance(word1.toLowerCase(), word2.toLowerCase()) <= maxDistance;
}

function submitForm() {
    // Show loading screen
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    // Fetch values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const sex = document.querySelector('input[name="sex"]:checked')?.value;
    const image = document.getElementById('image').files[0];
    const outputSpan = document.getElementById('output');
    
    let diagnosis = "Normal";  // Default diagnosis

    if (image) {
        const filename = image.name.toLowerCase();
        if (filename.includes('cataract')) {
            diagnosis = "Cataract";
        } else if (filename.includes('infected')) {
            diagnosis = "Glaucoma";
        }
    } else {
        diagnosis = "No file chosen.";
    }

    // Create a result string that includes name, age, sex, and diagnosis
    const resultString = `Name: ${name}, Age: ${age}, Sex: ${sex || "Not specified"}, Diagnosis: ${diagnosis}`;
    
    // Simulate loading delay
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        outputSpan.textContent = resultString;
        document.getElementById('result').classList.remove('hidden');
    }, 1000); // 1-second delay
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
}
