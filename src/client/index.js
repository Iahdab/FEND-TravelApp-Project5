import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'

import './styles/style.scss';
// npm
document.getElementById('submittrip').addEventListener('click', handleSubmit);

export{handleSubmit,checkForName};