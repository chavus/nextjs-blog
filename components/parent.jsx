export default function Parent({children, val1, val2}){
    return(
        <>
            <h1>{val1}</h1>
            <h2>{val2}</h2>
            <p>{children}</p>
        </>
        
    )
}