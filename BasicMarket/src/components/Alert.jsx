

const ShowAlert = (props) =>{
    return (
        <>
       <div style={{height:'50px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="{props.alert.type}">
  <strong>{props.alert.type!=null?props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1) + ': ' : null}</strong> {props.alert.message}
</div>
}
</div>

        </>
    )
}

export default ShowAlert;