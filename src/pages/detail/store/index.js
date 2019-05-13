//作为出口，将reducer.js的文件暴露出去
import reducer from './reducer.js';
import * as actionCreator from "./actionCreator.js";
import * as constants from "./constants.js";

export {reducer,actionCreator,constants};