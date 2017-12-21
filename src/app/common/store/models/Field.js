import { observable } from 'mobx';

const DEFAULT_ERROR_TEXT = 'Something went wrong';

class Field {

    @observable value
    @observable valid

    setValue(value) {
        this.value = value;
    }

    onChange(value) {
        this.setValue(value)
    }

    validate() {
        if (this.hasValidator) {
            const { valid, error_text } = this.validator(this.value)
            this.valid = valid;
            this.error_text = error_text || DEFAULT_ERROR_TEXT;
        } else {
            this.valid = true
        }
        return this.valid
    }

    constructor(data) {
        this.name = data.name;
        this.defaultValue = data.defaultValue;
        this.value = data.defaultValue;
        this.type = data.type;
        this.placeholder = data.placeholder;
        this.validator = data.validator;
        this.error_text = DEFAULT_ERROR_TEXT;

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.hasValidator = !!(typeof this.validator == 'function');
        if (this.hasValidator) {
            this.validator = this.validator.bind(this);
        }

        this.valid = true;
        // this.validate()
    }
}

export default Field;