fun main() {
    val user = LanguageLearning(
        arrayOf("english", "french", "spanish", "mandarin"),
        arrayOf("a", "b", "c", "d", "e"),
        arrayOf("exercise1", "exercise2", "exercise3"),
        arrayOf("w3-school", "geekfor-geeks"),
        arrayOf("grammar1", "grammar2", "grammar3"),
        arrayOf("quiz1", "quiz2", "quiz3")
    )
    
    println(user.availableLanguage("french"))
    println(user.score(arrayOf("a", "b", "c")))
    println(user.answerComplete(arrayOf("a", "b", "c")))
}
class LanguageLearning(
    var languages: Array<String>,
    var answers: Array<String>,
    var exercises: Array<String>,
    val resources: Array<String>,
    var grammar: Array<String>,
    var quizzes: Array<String>
) {
    fun availableLanguage(language: String): String {
         if (languages.contains(language.lowercase())) {
           return "Available resources: ${exercises.joinToString(", ")}, ${grammar.joinToString(", ")}, ${quizzes.joinToString(", ")}"
        } else {
           return "Language doesn't exist"
        }
    }
    fun answerComplete(answered: Array<String>): Boolean {
        return answered.size == answers.size
    }fun score(answered: Array<String>): Int {
      var count = 0
       for (i in answered) {
           for (x in answares) {
               if (i == x) {

                    ++count

                } else {
                    continue
                }
            }
        }
        return count
    }
    
    fun progress(map: HashMap<String, Any>) {
        for ((key, value) in map) {
            println("Progress for $key: $value")
        }
    }
}