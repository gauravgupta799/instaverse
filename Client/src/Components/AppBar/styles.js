const styles = {
    header:{
        color:"#fff",
        textAlign:"center",
        fontSize:"3rem",
        background:"linear-gradient(90deg, rgba(246, 83, 39, 1) 0%,rgba(147,27,252, 0.95) 50%, rgba(246, 83, 39, 1) 100%)",
        height:"4rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:"1"
    },
    image:{
        width:"42px !important",
        height:"42px !important",
    },
    title:{
        color:"white",
        margin:"0 5px",
    },
    homeLink:{
        display:"flex",
        alignItems:"center",
    },
    avatar:{
        color:"#f54e80",
        backgroundColor:"#fde3cf",
        marginRight:'6px',
        fontSize:"1.5rem",
        fontWeight:"600",
    },
    userInfo:{
        position:"absolute",
        right:"25px",
        top:"12px",
        display:"flex",
        alignItems:"center",
    },
    login:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        right:"25px",
        top:"12px",
        backgroundColor:"#83e983",
        padding:"20px"
    },
    logout:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orangered",
        color:"white",
        fontWeight:"600",
        border:'1px solid rgba(255,255,255,0.5)',
        marginLeft:"10px",
    },
    text:{
        fontWeight:"600",
        fontSize:"1rem",
    }

}

export default styles;