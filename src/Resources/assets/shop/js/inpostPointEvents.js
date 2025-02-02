import triggerCustomEvent from '../../common/js/utilities/triggerCustomEvent';
import {ValidateNextBtn} from './nextBtnValidation';

export class InpostPointEvents {
    constructor() {
        const inputs = [...document.querySelectorAll('[value="inpost_point"]')];
        this.shippingGroups = inputs.map((input) => [...document.querySelectorAll(`[name="${input.name}"]`)]);
    }

    init() {
        if (this.shippingGroups.length === 0) {
            throw new Error('InPostPlugin - Couldnt find any nodes in the DOM, regarding inpost points');
        }

        this.watchInputChanges();
    }

    watchInputChanges() {
        this.shippingGroups.forEach((groupFields) => {
            groupFields.forEach((field) => {
                field.addEventListener('change', () => {
                    triggerCustomEvent(
                        field,
                        `inpost.point.${field.value === 'inpost_point' ? 'selected' : 'deselected'}`
                    );
                });
                new ValidateNextBtn({node: field}).init();
            });
        });
    }
}

export default InpostPointEvents;
