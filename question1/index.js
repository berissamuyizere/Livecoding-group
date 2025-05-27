class Languages {
    constructor(language) {
        this.language = language;
    }
};

Languages.prototype.availableLanguage = function (targetLanguage, proficiencylevel) {
    for (lang in this.language) {
        if (lang.name === targetLanguage ) {
            return lang.exercises, lang.materials 
        }
        else console.log("language not found")
    }
}

Languages.prototype.complete = function(answers){
    

}
 const allLanguages = [{
        name: "French", proficiency: ["advanced", "intermediate", "beginner"],
        materials: [{ level: "Beginner", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] },
        { level: "Intermediate", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] },
        { level: "advanced", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }],
    }, {
        name: "English", proficiency: ["advanced", "intermediate", "beginner"],
        materials: [{ level: "Beginner", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] },
        { level: "Intermediate", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] },
        { level: "advanced", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }],
    }]

    const languages = new Languages(allLanguages);
    console.log(languages);
    languages.availableLanguage()

// const learnLanguage = (targetLanguage, proficiencylevel) => {

//     for (language in allLanguages) {
//         if (language.name === targetLanguage && language.materials.level === proficiencylevel) {
//             return language.exercises, language.quiz, language.vocabulary
//         }
//         else console.log("language not found")
//     }
// }
// learnLanguage("French", "Beginner")