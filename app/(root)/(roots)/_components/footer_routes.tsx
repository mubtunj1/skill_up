import { FooterNav, TermsLinks } from './footer_link';
import { FooterLink } from './footerlink_items';

interface FooterLinkRouteProps {
    FooterNav: typeof FooterNav;
}

export const FooterLinkRoute = ({
    FooterNav,
}:FooterLinkRouteProps) => {
    const routes = FooterNav;
    
    return (
        <div>
            {routes.map((route) => (
                <FooterLink
                    key={route.href}
                    link={route.link}
                    href={route.href}
                />
            ))}
        </div>
    );
};

    