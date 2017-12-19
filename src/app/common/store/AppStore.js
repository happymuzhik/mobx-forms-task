import { observable, computed, reaction } from 'mobx';
import Field from './models/Field';
import Form from './models/Form';

const simpleValidate = function (value) {
    return !!(value && value.trim().length > 0)
}

class AppStore {
    @observable personalDataForm = new Form({
        title: 'Personal Data',
        fields: [
            new Field({
                name: 'first_name',
                defaultValue: '',
                type: 'text',
                placeholder: 'Enter your name',
                validator: simpleValidate
            }),
            new Field({
                name: 'second_name',
                defaultValue: '',
                type: 'text',
                placeholder: 'Enter your second name',
                validator: simpleValidate
            })
        ]
    });
    
    @observable payDataForm = new Form({
        title: 'Pay Data',
        fields: [
            new Field({
                name: 'card_number',
                defaultValue: '',
                type: 'text',
                placeholder: 'card number',
                validator: simpleValidate
            })
        ]
    });

    @observable finishForm = new Form({
        title: 'Submit Data',
    });

};

const appStore = new AppStore();

export default appStore;