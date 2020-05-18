import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        user: [Validators.required, Validators.email],
        password: [Validators.required]
    }
};

export const formValidation = createFormValidation(validationShema);