import { observable } from 'mobx';

class Form {

    @observable title
    @observable valid
    @observable fields

    getValues() {
        let values = {};
        this.fields.map(field => values[field.name] = field.value)
        return values;
    }

    getField(name) {
        return this.fields.filter(field => field.name == name)[0]
    }

    validate() {
        this.valid = true;
        this.fields.map( field => {
            if(!field.validate()){
                this.valid = false
            }
        })
        return this.valid;
    }

    constructor(data) {
        this.title = data.title
        this.fields = data.fields || []

        // this.validate()
    }
}

export default Form;