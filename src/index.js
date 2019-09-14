import _VueDropify_ from '../src/components/VueDropify/VueDropify'
import {_registerComponent, _use} from "../src/utils/plugins";

const VueDropify = {
    install(Vue) {
        _registerComponent(Vue, _VueDropify_);
    }
};

_use(VueDropify);

export default VueDropify