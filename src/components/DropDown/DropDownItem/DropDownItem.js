const DropDownItem = (props) => {
    return (<>  
         <div className={props.danger} onClick={props.onClick}>
                     {props.icon}
           {props.children}
                   </div>
     </>)
   }
   
   export default DropDownItem