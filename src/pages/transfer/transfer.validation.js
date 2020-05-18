import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { dayValidator, monthValidator, yearValidator } from './transfer.custom.validator';

const validationShema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },
            {
                validator: iban.validator,
                message: 'Iban no válido'

            }

        ],
        name: [Validators.required],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },
            {
                validator: positiveNumber.validator,
                message: 'Debe ser un valor numérico positivo',

            }
        ],
        concept: [Validators.required],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: dayValidator,
                message: 'Día no valido',
            }
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: monthValidator,
            }
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: yearValidator,
            }],


        email: [Validators.email],

    }
};

export const formValidation = createFormValidation(validationShema);