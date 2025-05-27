class Languages {
 constructor(languageList) {
   this.languageList = languageList;
   this.userProgress = {}; // user progress store
 }
 availableLanguage(targetLanguage, proficiencyLevel) {
   const lang = this.languageList.find(
     l => l.name.toLowerCase() === targetLanguage.toLowerCase()
   );
   if (!lang) {
     console.log(":x: Language not found.");
     return null;
   }
   const material = lang.materials.find(
     mat => mat.level.toLowerCase() === proficiencyLevel.toLowerCase()
   );
   if (!material) {
     console.log(":x: Proficiency level not found.");
     return null;
   }
   return {
     exercises: material.exercises,
     quiz: material.quiz.map(q => q.question),
     vocabulary: material.vocabulary,
     resources: material.resources
   };
 }
 complete(languageName, level, userAnswers) {
   const lang = this.languageList.find(l => l.name.toLowerCase() === languageName.toLowerCase());
   const material = lang?.materials.find(m => m.level.toLowerCase() === level.toLowerCase());
   if (!material) return "Material not found.";
   let score = 0;
   material.quiz.forEach((q, i) => {
     if (userAnswers[i]?.toLowerCase() === q.answer.toLowerCase()) score++;
   });
   const result = {
     score,
     total: material.quiz.length,
     percentage: ((score / material.quiz.length) * 100).toFixed(2) + "%"
   };
   const key = `${languageName}_${level}`;
   this.userProgress[key] = result;
   return result;
 }
 getProgress() {
   return this.userProgress;
 }
}
// Real quiz data and extra resources
const allLanguages = [
 {
   name: "French",
   materials: [
     {
       level: "Beginner",
       quiz: [
         { question: "What is 'hello' in French?", answer: "bonjour" },
         { question: "What is 'thank you' in French?", answer: "merci" },
         { question: "What is 'goodbye' in French?", answer: "au revoir" }
       ],
       exercises: ["Translate 5 simple sentences to French", "Practice French alphabet"],
       vocabulary: ["bonjour", "merci", "au revoir", "chat", "chien"],
       resources: {
         grammar: "https://www.lawlessfrench.com/grammar/",
         video: "https://www.youtube.com/watch?v=5MgBikgcWnY",
         dictionary: "https://www.wordreference.com"
       }
     }
   ]
 },
 {
   name: "English",
   materials: [
     {
       level: "Beginner",
       quiz: [
         { question: "What is the plural of 'child'?", answer: "children" },
         { question: "Which is a noun: run, apple, quickly?", answer: "apple" },
         { question: "What is the opposite of 'hot'?", answer: "cold" }
       ],
       exercises: ["Write 3 simple sentences", "Identify verbs in a short paragraph"],
       vocabulary: ["hello", "book", "run", "happy", "cold"],
       resources: {
         grammar: "https://www.ef.com/wwen/english-resources/english-grammar/",
         video: "https://www.youtube.com/watch?v=JvW2kPZc4CM",
         dictionary: "https://dictionary.cambridge.org"
       }
     }
   ]
 }
];
const learner = new Languages(allLanguages);
console.log("Available Materials:", learner.availableLanguage("French", "Beginner"));
const userAnswers = ["bonjour", "merci", " revoir"];
console.log("Quiz Result:", learner.complete("French", "Beginner", userAnswers));
console.log("Progress:", learner.getProgress());





