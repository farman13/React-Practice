export function PostComponent({ name, subtitle, time, image, description }) {

    const style = { width: 300, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }
    return (
        <>
            <div style={style}>
                <div style={{ display: "flex" }}>
                    <img src={image} alt="" style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20
                    }} />
                    <div style={{ fontSize: 25, marginLeft: 10 }}>
                        <b>{name}</b>
                        <div>{subtitle}</div>
                        {time && <div style={{ display: "flex" }}>
                            <div>{time} </div>
                            <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" alt=""
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 20
                                }} />
                        </div>}
                    </div>
                </div>
                <div style={{ fontSize: 20 }}>{description}</div>
            </div>
        </>
    )
}


