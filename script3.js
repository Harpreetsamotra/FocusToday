const circle = document.querySelectorAll(".circle");
const inputFields = document.querySelectorAll(".inputs");
const progressBar = document.querySelector(".labels");
const info=document.querySelector(".info");
const barTwo=document.querySelector(".bar-2")

const allGoals=JSON.parse(localStorage.getItem("allGoals"))||{};


inputFields.forEach((input) => {
    if (allGoals[input.id]) {
      input.value = allGoals[input.id].name
  
      if (allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
      }
    }
  
    input.addEventListener('focus', () => {
      progressBar.classList.remove('error')
    })
  
    input.addEventListener('input', (e) => {
      if (allGoals[input.id] && allGoals[input.id].completed) {
        input.value = allGoals[input.id].name
        return
      }
  
      if (allGoals[input.id]) {
        allGoals[input.id].name = input.value
      } else {
        allGoals[input.id] = {
          name: input.value,
          completed: false,
        }
      }
  
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
  })