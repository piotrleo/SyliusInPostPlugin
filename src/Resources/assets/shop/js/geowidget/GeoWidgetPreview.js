import { API_POINTS } from "./config";


export class GeoWidgetPreview {
    constructor(node) {
        this.wrapper = node;
    }

    async renderFromCode(code) {
        try {
            if (!code) return false;

            const response = await fetch(`${API_POINTS}/${code}`);

            if (!response.ok) throw Error(response.statusText);

            const data = await response.json()

            this.renderTemplate(data)

        } catch (error) {

        }
    }

    renderTemplate(data) {
        this.wrapper.innerHTML = '';
        this.wrapper.insertAdjacentHTML('beforeend', `
            <img src="${data.image_url}" class="bb-inpost-point-img"/>
            <div class="bb-inpost-point-desc">
                <b>
                    ${data.name}
                </b>
                <p>
                    ${data.address.line1}<br>
                    ${data.address.line2}<br>
                    <small>${data.location_description}</small>
                </p>
            </div>
        `)
    }
}

export default GeoWidgetPreview;