import _VueDropify_ from './components/VueDropify'
import {_registerComponent, _use} from "./utils/plugins";

const VueDropify = {
    install(Vue) {
        _registerComponent(Vue, _VueDropify_);
    }
};

_use(VueDropify);

export default VueDropify