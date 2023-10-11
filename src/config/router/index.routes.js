import {views} from "@controllers/controller.js";


let root = document.getElementById("root");

const router = async (route) => {
    root.innerHTML = "";
    const goRoute =vista=> root.appendChild(vista)
    switch (route) {
        case "": {
            return goRoute(views.home());
        }
        case "#/": {
            return goRoute(views.home());
        } // checklist
        case "#/checklist_a": {
            return goRoute(views.checklist());
        }
        case "#/checklist_b": {
            return goRoute(views.checklist());
        }
        case "#/checklist_c": {
            return goRoute(views.checklist());
        }
        case "#/localbase": {
            return goRoute(views.excel());
        }   
        default: {
            return root.appendChild(views.notFound());
        }
    }
};

export { router };
