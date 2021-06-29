import { FunctionComponent } from 'react'

const MainWrapper: FunctionComponent = (props) => {
    return (
        <div style={{backgroundColor: 'orange'}} className="container mx-auto px-4">
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default MainWrapper
