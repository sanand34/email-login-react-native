"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const firebase_1 = __importDefault(require("./firebase"));
const Landing_1 = __importDefault(require("./components/Landing"));
const react_native_1 = require("react-native");
const App = () => {
    const [loaded, setLoaded] = react_1.useState();
    const [loggedIn, setLoggedIn] = react_1.useState();
    react_1.useEffect(() => {
        firebase_1.default.auth().onAuthStateChanged((user) => {
            if (!user) {
                setLoggedIn(false);
                setLoaded(true);
            }
            else {
                setLoggedIn(true);
                setLoaded(true);
            }
        });
    }, []);
    return (<react_native_1.View>
      {loggedIn ? (<react_native_1.Text>{`This is ${JSON.stringify(loggedIn)}`}</react_native_1.Text>) : (<Landing_1.default />)}
    </react_native_1.View>);
};
exports.default = App;
const styles = react_native_1.StyleSheet.create({});