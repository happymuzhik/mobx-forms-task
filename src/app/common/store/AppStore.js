import { observable, computed, reaction } from 'mobx';
import Field from './models/Field';
import Form from './models/Form';

class AppStore {
    @observable currentFormName = null;

    @observable personalDataForm = new Form({
        title: 'Personal Data',
        fields: [
            new Field({
                name: 'first_name',
                defaultValue: '',
                type: 'text',
                placeholder: 'Enter your name'
            }),
            new Field({
                name: 'second_name',
                defaultValue: '',
                type: 'text',
                placeholder: 'Enter your second name'
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
                placeholder: 'card number'
            })
        ]
    });

    @observable finishForm = new Form({
        title: 'Submit Data',
    });

};

const appStore = new AppStore();

export default appStore;