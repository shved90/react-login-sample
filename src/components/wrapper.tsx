import { FunctionComponent } from 'react'

const MainWrapper: FunctionComponent = (props) => {
    return (
        <div style={{backgroundColor: 'orange'}}>
            {props.children}
        </div>
    )
}

export default MainWrapper
