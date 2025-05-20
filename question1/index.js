// class Languages {
//     constructor(name, vocabulary, quizes, exercises, answers, resources) {
//         this.name = name;
//         this.vocabulary = vocabulary;
//         this.quizes = quizes;
//         this.exercises = exercises;
//         this.answers = answers;
//         this.resources = resources
//     }
// };

// Languages.prototype.availableLanguage = function (targetLanguage, proficiencylevel) {
//     for (lang in this.language) {
//         if (lang === targetLanguage && this.language.proficiency) {

//         }
//     }

// }

const learnLanguage = ( targetLanguage, proficiencylevel) =>{

const allLanguages = [{
    name: "French", proficiency: ["advanced", "intermediate", "beginner"],
    materials: [{ level: "Beginner", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }, 
    { level: "Intermediate", quiz: ["question1", "question2", "question3"] , exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"]},
     { level: "advanced", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }],
}, {
    name: "English", proficiency: ["advanced", "intermediate", "beginner"],
    materials: [{ level: "Beginner", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }, 
    { level: "Intermediate", quiz: ["question1", "question2", "question3"] , exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"]},
     { level: "advanced", quiz: ["question1", "question2", "question3"], exercises: ["exercise1", "exercises2", "exercises3"], answers: ["okay", "by", "hello"], vocabulary: ["verbs", "proverbes", "nouns"] }],
}]

    for (language in allLanguages){
        if(language.name === targetLanguage  && language.proficiency === proficiencylevel){
            
        }
    }
}