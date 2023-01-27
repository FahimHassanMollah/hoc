const printProps = (Component) => { 
    return  (props) => {
        console.log(Component,'====================================');
        console.log(props, "props");
        console.log('====================================');
        return <Component {...props}/>
    }
 }

 export default printProps;