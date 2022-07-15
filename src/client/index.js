import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'
import { CountDownTimer } from './js/countdown'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


export {
    checkForName,
    handleSubmit,
    postData,
    CountDownTimer
   }


console.log(checkForName);


CountDownTimer('07/19/2022 10:1 AM', 'countdown');

alert("I EXIST")
console.log("CHANGE!!");
