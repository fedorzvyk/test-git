const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { age, skills } = plan
        const langs = skills.languages.join(' ').toUpperCase()
        console.log(`Мне ${age} и я владею языками: ${langs}`)
        
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter)

function showExperience(plan) {
    const { exp } = plan.skills
    console.log(exp)
    return exp
}

showExperience(personalPlanPeter)

//////////////////////////////////

function showProgrammingLangs(plan) {
    const { programmingLangs } = plan.skills;
    let res = ''
    for (let lang in programmingLangs) {
        res += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`
    }
    console.log(res)
    return res
}

showProgrammingLangs(personalPlanPeter)