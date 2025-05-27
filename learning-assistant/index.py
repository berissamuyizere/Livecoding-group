languages = [
    {
        'name': 'French', 
        'proficiency-levels':{
            'beginner': {
                'quizzes': ['quiz1', 'quiz2'],
                'answers': ['answer1', 'answer2']
                },
            'intermediate': {
                'quizzes': ['quiz1', 'quiz2'],
                'answers': ['answer1', 'answer2']
            },
            'advanced': {
                'quizzes': ['quiz1', 'quiz2'],
                'answers': ['answer1', 'answer2']
                }
        },
        'resources':['resource1', 'resource2', 'resource3'],
        'exercises':[{'exercise': ['question1', 'question2']}],
        'vocabularies': {'english-word': 'french-name'}
    }
]


def language_to_learn(language, proficiency_level):
    quizes = None
    for lang in languages:
        if lang['name'] == language:
            for level in lang['proficiency-levels']:
                if level == proficiency_level:
                    return f'Happy learning'
                else:
                    return f'please choose a valid level'  
            print(lang) 
        else:
            return f'{language} not available'
       
print(language_to_learn('French', 'beginner'))

def display_content(language, proficiency_level): 
    for lang in languages:
        if lang['name'] == language:
            for level in lang['proficiency-levels']:
                if level == proficiency_level:
                    print(lang['proficiency-levels'][level]['quizzes'])
                    print(lang['vocabularies'])
                    print(lang['exercises'])
                    print(lang['resources'])
    

print(display_content('French', "beginner"))

def check_isCompleted(language, answered_quizzes):
     for lang in languages:
        if lang['name'] == language:
            for level in lang['proficiency-levels']:
                if len(answered_quizzes['answers']) == len(lang['proficiency-levels'][level]['quizzes']):
                    return f'Allquestions have been answered'
                else:
                    return f'Please answer all the questions'
                
print(check_isCompleted('French',{'quizzes': ['quiz1', 'quiz2'],'answers': ['answer1', 'answer2'] } ))

def check_isCorrect(language, answered_quizzes):
     for lang in languages:
        if lang['name'] == language:
            for level in lang['proficiency-levels']:
                # if all(answered_quizzes['answers']) in lang['proficiency-levels'][level]['answers']:
                for answer in answered_quizzes['answers']:
                    for ans in lang['proficiency-levels'][level]['answers']:
                        if answer == ans:
                            score += 1
                            return score
                        else:
                            return f'question failed'
                        
print(check_isCorrect('French',{'quizzes': ['quiz1', 'quiz2'],'answers': ['answer1', 'answer2'] } ))
