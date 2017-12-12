import { observable, computed, reaction } from 'mobx';
import Field from './models/Field';
import Form from './models/Form';

class AppStore {
    @observable currentFormName = null;
    @observable personalDataForm = new Form({
        title: 'Personal Data',
        fields: [
            new Field({
                name: 'name',
                value: '',
                type: 'text',
                placeholder: 'Enter your name'
            }),
            new Field({
                name: 'second_name',
                value: '',
                type: 'text',
                placeholder: 'Enter your second name'
            })
        ]
    })
    @computed get currentTodo() {
        return true;
    }
};

const appStore = new AppStore();

export default appStore;