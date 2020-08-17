import { inputData } from './inputData';
import { getAPI } from './getAPI';
import { updateUI } from './update';


function handleSubmit() {
    //select submit button by ID
    const submit = document.getElementById('generate');

    //Adding event listener for click event 
    submit.addEventListener('click', function(event) {
        event.preventDefault();

        //Clicking submit button will process and validate data entered in the form
        const trip = inputData();

        //passing the data to another function to trigger fetch calls to server
        getAPI(trip).then(data => {
            //Rendering the results on the screen
            updateUI(data);
        })
    })
}

export { handleSubmit }