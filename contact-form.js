var Webflow = Webflow || []; // Initialize Webflow Variable
Webflow.push(function() { // Push a Function into the Webflow Array
  console.log('webflow push worked')

  const nameInputWrapper = document.getElementById('contact-name');
  const emailInputWrapper = document.getElementById('contact-email');
  const phoneInputWrapper = document.getElementById('contact-phone');
  const messageInputWrapper = document.getElementById('contact-message');

  const nameInput = nameInputWrapper.querySelector('input');
  const nameErrorMsgWrapper = nameInputWrapper.querySelector('.input-error-wrapper');
  const nameErrorMsgText = nameErrorMsgWrapper.querySelector('.error-message-text');

  const emailInput = emailInputWrapper.querySelector('input');
  const emailErrorMsgWrapper = emailInputWrapper.querySelector('.input-error-wrapper');
  const emailErrorMsgText = emailErrorMsgWrapper.querySelector('.error-message-text');

  const phoneInput = phoneInputWrapper.querySelector('input');
  const phoneErrorMsgWrapper = phoneInputWrapper.querySelector('.input-error-wrapper');
  const phoneErrorMsgText = phoneErrorMsgWrapper.querySelector('.error-message-text');

  const messageInput = messageInputWrapper.querySelector('textarea');
  const messageErrorMsgWrapper = messageInputWrapper.querySelector('.input-error-wrapper');
  const messageErrorMsgText = messageErrorMsgWrapper.querySelector('.error-message-text');


    function addErrorMessage(wrapper, textElem, errorMessage) {
        // console.log('addErrorMessage:', errorMessage)
        wrapper.classList.add('is-error');
        textElem.textContent = errorMessage;
    }

    function removeErrorMessage(wrapper) {
        wrapper.classList.remove('is-error');
    }

    function checkInputLength(input, wrapper, textElem, minLength, errorMessage) {
        console.log('input.value.length:', input.value.length, 'minLength:', minLength)
        if (input.value.length < minLength) {
            addErrorMessage(wrapper, textElem, errorMessage)
            return true;
        } else {
            removeErrorMessage(wrapper)
            return false;
        }
    }

    function checkEmptyInput(input, wrapper, textElem, errorMessage) {
        console.log('checkEmptyInput')
        if (!input.value) {
            addErrorMessage(wrapper, textElem, errorMessage)
            console.log('checkEmptyInput - ERROR')
            return true;
        } else {
            removeErrorMessage(wrapper)
            return false;
        }
    }

    function checkNameInput(input, wrapper, textElem) {
        const checks = [
            () => checkEmptyInput(input, wrapper, textElem, 'Please enter your name'),
            () => checkInputLength(input, wrapper, textElem, 2, 'Minimum 2 characters'),
        ];

        console.log('Checks array:', checks);

        const hasError = checks.some((check, index) => {
            const error = check(); // Call the function
            console.log(`Iteration ${index}, error:`, error);
            return error; // Return the error directly since it's already a boolean
        });
        
        if (hasError) {
            return true;
        } else {
            return false;
        }
    }

    function validateEmail(input, wrapper, textElem, errorMessage) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // return emailRegex.test(email);

        if (!emailRegex.test(input.value)) {
            addErrorMessage(wrapper, textElem, errorMessage)
            // console.log('checkEmptyInput - ERROR')
            return true;
        } else {
            removeErrorMessage(wrapper)
            return false;
        }
    }

    function isNumericAndLength(input, wrapper, textElem, minLength, errorMessage) {
        // Regular expression to check if the value contains only digits
        const onlyNumbers = /^[0-9]+$/;

        // Check if the value matches the regular expression and has the specified length
        if (!onlyNumbers.test(input.value) || input.value.length < minLength) {
            addErrorMessage(wrapper, textElem, errorMessage)
            // console.log('isNumericAndLength errors')
            return true;
        } else {
            removeErrorMessage(wrapper)
            // console.log('isNumericAndLength NO errors')
            return false;
        }
    }

    function checkPhoneInput(input, wrapper, textElem) {
        const checks = [
            () => checkEmptyInput(input, wrapper, textElem, 'Please enter your phone number'),
            () => isNumericAndLength(input, wrapper, textElem, 10, 'Please enter valid phone number'),
        ];

        // console.log('Checks array:', checks);

        const hasError = checks.some((check, index) => {
            const error = check(); // Call the function
            // console.log(`Iteration ${index}, error:`, error);
            return error; // Return the error directly since it's already a boolean
        });
        
        if (hasError) {
            return true;
        } else {
            return false;
        }
    }

    function checkEmailInput(input, wrapper, textElem) {
        const checks = [
            () => checkEmptyInput(input, wrapper, textElem, 'Please enter your email'),
            () => validateEmail(input, wrapper, textElem, 'Please enter valid email'),
        ];

        // console.log('Checks array:', checks);

        const hasError = checks.some((check, index) => {
            const error = check(); // Call the function
            // console.log(`Iteration ${index}, error:`, error);
            return error; // Return the error directly since it's already a boolean
        });
        
        if (hasError) {
            return true;
        } else {
            return false;
        }
    }

    function checkMessageInput(input, wrapper, textElem) {
        const checks = [
            () => checkEmptyInput(input, wrapper, textElem, 'Please enter your message'),
            () => checkInputLength(input, wrapper, textElem, 10, 'Minimum 10 characters'),
        ];

        // console.log('Checks array:', checks);

        const hasError = checks.some((check, index) => {
            const error = check(); // Call the function
            // console.log(`Iteration ${index}, error:`, error);
            return error; // Return the error directly since it's already a boolean
        });
        
        if (hasError) {
            return true;
        } else {
            return false;
        }
    }



    /* 
    Need to add this custom element wr-type="submit" to the submit button. 
    It can't also be the default submit button. You need to remove this and create
    your own using a text block.
    */
    $('[wr-type="submit"]').click(function() { 
    let isOk = runFormSubmitChecks(); // Use this to define whether isOk is true or false

    if (isOk) {
        console.log('submitting')
        const successNameTextElem = document.getElementById('success-name-text');
        successNameTextElem.innerHTML = nameInput.value;
        $(this).parents('form').submit()
        // $(document).on("submit");
        // form.submit();
    } else {
        console.log('not submitting')
    }
  }); // end submit



  function runFormSubmitChecks() {
    console.log('runFormSubmitChecks')

    let errors = [];

    errors.push(checkNameInput(nameInput, nameErrorMsgWrapper, nameErrorMsgText));
    errors.push(checkEmailInput(emailInput, emailErrorMsgWrapper, emailErrorMsgText));
    errors.push(checkPhoneInput(phoneInput, phoneErrorMsgWrapper, phoneErrorMsgText));
    errors.push(checkMessageInput(messageInput, messageErrorMsgWrapper, messageErrorMsgText));
    console.log('submit error: ', errors)
    if (errors.includes(true)) {
        alert('Please check contact form errors')
        return false;
    } else {
        console.log('No Errors - continue')
        return true;
    }
  }

}); // end webflow.push()