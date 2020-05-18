import { getMovementsList } from './movements.api';
import { getAccount } from '../account/account.api'
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToVM } from './movements.mappers'
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';
import { mapAccountFromApiToVM } from '../account/account.mappers';

const params = history.getParams();



getMovementsList().then(movementList => {
    const viewModelMovementList = mapMovementListFromApiToVM(movementList, params.id);
    const totalBalance = viewModelMovementList.reduce((acc, item) => acc + parseInt(item.balance), 0);


    getAccount(params.id).then(apiAccount => {
        const account = mapAccountFromApiToVM(apiAccount);
        account.balance = totalBalance;

        onSetValues(account);
    });
    addMovementRows(viewModelMovementList);
});