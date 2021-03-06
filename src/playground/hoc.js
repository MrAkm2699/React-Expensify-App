//HOC higher order component->a component that renders another component
//Reuse code
//Render hijacking
//Prop maniplulation
//Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);

const withAdminWarning= (WrappedComponent)=> {
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication= (WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAutheticated ? <WrappedComponent {...props} />: <p>Please login to get authentication</p>}
        
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='coming from the render statement below' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheticated={true} info='coming from the render statement below' />, document.getElementById('app'));