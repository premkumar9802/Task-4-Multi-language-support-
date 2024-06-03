const translations = {
    en: {
        heading: "Welcome Null Internship",
        paragraph: "This is a sample text in English."
    },
    fr: {
        heading: "Bienvenue",
        paragraph: "Ceci est un texte exemple en français."
    },
    hi: {
        heading: "स्वागत है",
        paragraph: "यह हिंदी में एक नमूना पाठ है।"
    }
};

function changeLanguage(language) {
    document.getElementById('heading').innerText = translations[language].heading;
    document.getElementById('paragraph').innerText = translations[language].paragraph;
}
changeLanguage('en');
