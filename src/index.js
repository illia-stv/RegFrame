function test(val, props) {
    if (props === void 0) { props = null; }
    var properties = props || {
        upperCase: false,
        lowerCase: false,
        numbers: false,
        length: null,
        content: null,
        pattern: null,
        start: null,
        end: null
    };
    return pipelineTest(val, properties);
}
function pipelineTest(val, props) {
    var stateContent = props.content === undefined || props.content === null ? null : props.content;
    if (stateContent !== null && props.content === val) {
        return true;
    }
    else if (stateContent !== null && props.content !== val) {
        return false;
    }
    var regframeUpperCase = new RegExp("[A-Z]");
    var stateUpperCase = props.upperCase === undefined || props.upperCase === false ? false : true;
    if (regframeUpperCase.test(val) !== stateUpperCase) {
        return false;
    }
    var regframeLowerCase = new RegExp("[a-z]");
    var stateLowerCase = props.lowerCase === undefined || props.lowerCase === false ? false : true;
    if (regframeLowerCase.test(val) !== stateLowerCase) {
        return false;
    }
    var regframeNumbers = new RegExp("[0-9]");
    var stateNumbers = props.numbers === undefined || props.numbers === false ? false : true;
    if (regframeNumbers.test(val) !== stateNumbers) {
        return false;
    }
    var regframePattern = new RegExp("" + props.pattern);
    var statePattern = props.pattern === undefined || props.pattern === null ? null : props.pattern;
    if (statePattern !== null) {
        if (regframePattern.test(val) !== true) {
            return false;
        }
    }
    var regframeStart = new RegExp("^" + props.start);
    var stateStart = props.start === undefined || props.start === null ? null : props.start;
    if (stateStart !== null) {
        if (regframeStart.test(val) !== true) {
            return false;
        }
    }
    var regframeEnd = new RegExp(props.end + "$");
    var stateEnd = props.end === undefined || props.end === null ? null : props.end;
    if (stateEnd !== null) {
        if (regframeEnd.test(val) !== true) {
            return false;
        }
    }
    var stateLength = props.length === undefined || props.length === null ? null : props.length;
    if (stateLength !== null && props.length !== val.length) {
        return false;
    }
    return true;
}
module.exports = test;
