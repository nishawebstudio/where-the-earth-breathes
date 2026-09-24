export default function Cloud({left,top,scale,bg}){
    return(

        <div
        className="cloud"
        style={{
            left,
            top,
            transform: `scale(${scale})`,
            backgroundColor: bg,
            color: bg
        }}
        ></div>
    )

}                    