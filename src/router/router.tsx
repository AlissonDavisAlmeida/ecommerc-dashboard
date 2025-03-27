import {RouteObject, useRoutes} from "react-router-dom"


type RouterProps = {
    allRoutes: RouteObject[]
}

export const Router = ({ allRoutes }: RouterProps) => {
    
    const routes = useRoutes([...allRoutes])
    
    return routes
}
