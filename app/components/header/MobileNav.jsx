import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Search from "../search/search";
import { megaMenuData } from "./megaMenuData";

export default function MobileNav({
  isOpen,
  onClose,
  isMobileServicesOpen,
  onToggleServices,
}) {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile-panel">
      <div className="nav-mobile-inner">
        <div className="nav-mobile-meta">
          <span className="nav-mobile-eyebrow">Menu</span>
          <button
            type="button"
            className="nav-mobile-close"
            onClick={onClose}
          >
            <span className="sr-only">Close navigation</span>✕
          </button>
        </div>

        <div className="nav-mobile-sections">
          <div className="nav-mobile-group">
            <span className="nav-mobile-label">Browse</span>
            <ul>
              <li>
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={onClose}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={onClose}>
                  Contact us
                </Link>
              </li>
              <li className="nav-mobile-services">
                <div className="nav-mobile-services-header">
                  <Link
                    href="/services"
                    className="nav-mobile-services-link"
                    onClick={onClose}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="nav-mobile-services-toggle"
                    onClick={onToggleServices}
                    aria-expanded={isMobileServicesOpen}
                  >
                    <span
                      className="caret"
                      style={{
                        transform: isMobileServicesOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      ▼
                    </span>
                  </button>
                </div>
                {isMobileServicesOpen && (
                  <div className="nav-mobile-services-panel">
                    <ul className="nav-mobile-services-list">
                      {megaMenuData.map((column) => (
                        <li key={column.title}>
                          <span className="nav-mobile-column">
                            {column.title}
                          </span>
                          <ul className="nav-mobile-subservices">
                            {column.subHeadings.map((service) => (
                              <li key={service.subHeading}>
                                <Link
                                  href={service.href}
                                  onClick={onClose}
                                >
                                  <i
                                    className={`${service.icon} nav-mobile-service-icon`}
                                  ></i>
                                  {service.subHeading}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="nav-mobile-group">
            <span className="nav-mobile-label">Connect</span>
            <div className="nav-mobile-actions">
              <Link
                href="/contact"
                className="btn btn--primary"
                onClick={onClose}
              >
                Let's Talk
              </Link>
              <div className="nav-mobile-language">
                <LanguageSwitcher />
              </div>
              <div className="nav-mobile-search">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
