import { observable } from 'mobx';

class Field {

    @observable value
    @observable valid

    validate() {
        if (typeof this.validator == 'function') {
            this.valid = this.validator(this.value)
        } else {
            this.valid = true
        }
        return this.valid
    }

    constructor(data) {
        this.name = data.name
        this.value = data.value
        this.type = data.type
        this.placeholder = data.placeholder
        this.validator = data.validator

        this.validate()
    }
}

export default Field;