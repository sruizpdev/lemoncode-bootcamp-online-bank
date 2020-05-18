import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../account-list/account-list.api';
import { formValidation } from './transfer.validation';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { history, routes } from '../../core/router';
import { insertTrans } from './transfer.api';

let trans = {
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    email: ''
};

onUpdateField('iban', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        iban: value
    };
    formValidation.validateField('iban', trans.iban).then(result => {
        onSetError('iban', result);
    });
});
onUpdateField('name', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        name: value
    };
    formValidation.validateField('name', trans.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        amount: value
    };
    formValidation.validateField('amount', trans.amount).then(result => {
        onSetError('amount', result);
    });
});
onUpdateField('concept', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        concept: value
    };
    formValidation.validateField('concept', trans.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('day', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        day: value
    };
    formValidation.validateField('day', trans.day).then(result => {
        onSetError('day', result);
    });
});
onUpdateField('month', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        month: value
    };
    formValidation.validateField('month', trans.month).then(result => {
        onSetError('month', result);
    });
});
onUpdateField('year', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        year: value
    };
    formValidation.validateField('year', trans.year).then(result => {
        onSetError('year', result);
    });
});
onUpdateField('email', (event) => {
    const value = event.target.value;
    trans = {
        ...trans,
        email: value
    };
    formValidation.validateField('email', trans.email).then(result => {
        onSetError('email', result);
    });
});
onSubmitForm('transfer-button', () => {

    formValidation.validateForm(trans).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertTrans(trans).then(() => { history.push(routes.accountList) });

        }
    });


});
const params = history.getParams();
getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
});
