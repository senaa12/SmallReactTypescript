import withBreadcrumbs, { InjectedProps, BreadcrumbsRoute } from "react-router-breadcrumbs-hoc";
import { Routes } from "../../assets/routes";

const routes: Array<BreadcrumbsRoute> = [
    { path: Routes.Root, breadcrumb: "test" }
];

const breadCrumbs: React.FC<InjectedProps> = ({ breadcrumbs, history }) => {
    return null;
};

export default withBreadcrumbs(routes)(breadCrumbs);
