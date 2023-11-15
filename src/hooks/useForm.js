import {useState} from 'react';

const useForm = (onSubmitCallback, initialState = {}) => {
    const [currentFormValues, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({...currentFormValues, [event.target.name]: event.target.value});
        // console.log(formValues);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onSubmitCallback();
    }

    return {
        onChange,
        onSubmit,
        currentFormValues
    }
}


export default useForm;