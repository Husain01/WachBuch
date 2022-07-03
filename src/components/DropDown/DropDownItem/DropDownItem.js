const DropDownItem = (props) => {
    return (<>  
         <div className={props.danger}>
                     {props.icon}
           {props.children}
                   </div>
     </>)
   }
   
   export default DropDownItem