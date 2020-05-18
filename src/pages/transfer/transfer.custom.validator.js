export const dayValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;
    return {
        succeeded,
        // message: succeeded
        //     ? ''
        //     : 'Error en el día',
        // type: '',


    }
};
export const monthValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;
    return {
        succeeded,
        message: succeeded
            ? ''
            : 'Error en el mes',
        type: '',


    }
};
export const yearValidator = ({ value }) => {
    const succeeded = parseInt(value) >= 2020;
    return {
        succeeded,
        message: succeeded
            ? ''
            : 'Error en el año',
        type: '',


    }
}