import { observable } from 'mobx';

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
        if (typeof this.validator == 'function') {
            this.valid = this.validator(this.value)
            console.log('this.valid', this.valid)
        } else {
            this.valid = true
        }
        return this.valid
    }

    constructor(data) {
        this.name = data.name
        this.defaultValue = data.defaultValue
        this.value = data.value        
        this.type = data.type
        this.placeholder = data.placeholder
        this.validator = data.validator

        this.onChange = this.onChange.bind(this)
        this.validate = this.validate.bind(this)

        this.valid = true
        // this.validate()
    }
}

export default Field;