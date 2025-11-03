import Link from "next/link";
import "./mega-menu.css";

export default function MegaMenu({ columns = [], onClose }) {
  if (!columns.length) return null;

  return (
    <div className="mega-menu" role="menu" aria-label="Services">
      <div className="mega-content">
        {columns.map((column, index) => (
          <div key={index} className="mega-column">
            <h5>{column.title}</h5>
            <ul>
              {column.subHeadings.map((item, itemIndex) => (
                <li key={itemIndex} className="mega-item">
                  <Link
                    href={item.href}
                    className="mega-item-link"
                    onClick={onClose}
                  >
                    {item.icon && (
                      <i className={`mega-item-icon ${item.icon}`} />
                    )}
                    <span className="mega-item-copy">
                      <span className="mega-item-title">{item.subHeading}</span>
                      {item.label && (
                        <span className="mega-item-description">{item.label}</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}