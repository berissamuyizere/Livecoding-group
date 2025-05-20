fun main() {
    val user = LanguageLearning(
        arrayOf("english", "french", "spanish", "mandarin"),
        arrayOf("a", "b", "c", "d", "e"),
        arrayOf("exerecise1", "exercise2", "exercise3"),
        arrayOf("w3-school", "geekfor-giks"),arrayOf("grammar1","grammar2","grammar3"),arrayOf("quize1", "queze2", "queze3")
    )
   println( user.availableLanguage("french"))
    println(user.score(arrayOf("a","b","c")))
    println(user.answareComplete(arrayOf("a","b","c")))
}


class LanguageLearning(var languages: Array<String>, var answares: Array<String>, var exercises: Array<String>, val resource: Array<String>,var grammar: Array<String>,var quizes: Array<String>) {
    fun availableLanguage(language: String) {
        if (languages.contains(language.lowercase())) {
            println("$exercises;$exercises;$grammar;$quizes")
        } else {
            println("language doesn't exist")
        }
    }

    fun answareComplete(answered: Array<String>): Boolean {
        return answered.count() === answares.count()

    }

    fun score(answered: Array<String>): Int {
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
            println("fun score(): $quizes")
        }}
}
