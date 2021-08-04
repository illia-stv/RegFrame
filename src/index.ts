
interface RegFrameProperties {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    length: number | null;
    content: string | null;
    pattern: string | null;
    start: string | null;
    end: string | null;
}


function test(val:string, props:RegFrameProperties=null):boolean {

    const properties = props || {
        upperCase: false,
        lowerCase: false,
        numbers: false,
        length: null,
        content: null,
        pattern: null,
        start: null,
        end: null
    }

    return pipelineTest(val,properties)
}


function pipelineTest(val:string, props:RegFrameProperties):boolean {

    const stateContent = props.content === undefined || props.content === null ? null : props.content;

    if(stateContent !== null && props.content === val){
        return true
    } else if(stateContent !== null && props.content !== val) {
        return false
    }
    
    const regframeUpperCase = new RegExp(`[A-Z]`);
    const stateUpperCase = props.upperCase === undefined || props.upperCase === false ? false : true;
    
    if(regframeUpperCase.test(val) !== stateUpperCase){
        return false
    }

    const regframeLowerCase = new RegExp(`[a-z]`);
    const stateLowerCase = props.lowerCase === undefined || props.lowerCase === false ? false : true; 
    
    if(regframeLowerCase.test(val) !== stateLowerCase){
        return false
    }

    const regframeNumbers = new RegExp(`[0-9]`);
    const stateNumbers = props.numbers === undefined || props.numbers === false ? false : true; 
    
    if(regframeNumbers.test(val) !== stateNumbers){
        return false
    }

    const regframePattern = new RegExp(`${props.pattern}`); 
    const statePattern = props.pattern === undefined || props.pattern === null ? null : props.pattern; 
    
    if(statePattern !== null){

        if(regframePattern.test(val) !== true){
            return false
        }
    }

    const regframeStart = new RegExp(`^${props.start}`); 
    const stateStart = props.start === undefined || props.start === null ? null : props.start; 
    
    if(stateStart !== null){

        if(regframeStart.test(val) !== true){
            return false
        }
    }

    const regframeEnd = new RegExp(`${props.end}$`); 
    const stateEnd = props.end === undefined || props.end === null ? null : props.end; 
    
    if(stateEnd !== null){

        if(regframeEnd.test(val) !== true){
            return false
        }
    }

    const stateLength = props.length === undefined || props.length === null ? null : props.length;
    if(stateLength !== null && props.length !== val.length){
        return false
    }

    return true

} 


module.exports = test;






