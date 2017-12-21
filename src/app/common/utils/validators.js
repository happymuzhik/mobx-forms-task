const emptyValidate = function (value) {
    const valid = !!(value && value.trim().length > 0);
    const error_text = 'Field can\'t be empty';
    return {
        valid,
        error_text
    }
};

export {
    emptyValidate
};