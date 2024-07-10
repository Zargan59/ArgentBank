
export default function form({divName, labelFor, label, inputType, inputValue, onChange}){
    if(divName === "input-wrapper"){
        return(
                <div className={divName} >
                    <label htmlFor={labelFor}>{label} </label>
                    <input onChange={onChange} type={inputType} value={inputValue} id={labelFor} />
                </div>
        )
    }
    else{

        return(
            <div className={divName} >
                <input onChange={onChange} type={inputType} value={inputValue} id={labelFor} />
                <label htmlFor={labelFor}>{label} </label>
                
            </div>
    )
    }

}