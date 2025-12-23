"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MegaMenu({ columns = [], onClose }) {
  if (!columns.length) return null;
  const router = useRouter();

  return (
    <div 
      id="mega-menu" 
      className="absolute top-full -right-180 -translate-x-1/2 -translate-y-2.5 w-full max-w-[120vw] bg-white/98 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-200 ease-in-out z-[999] overflow-x-hidden overflow-y-auto max-h-[calc(100vh-6rem)] py-10 shadow-2xl border border-gray-200 [.has-mega.is-open_&]:opacity-100 [.has-mega.is-open_&]:pointer-events-auto [.has-mega.is-open_&]:translate-y-1" 
      role="menu" 
      aria-label="Services"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col">
            <h5 className="text-black font-bold mb-2.5 text-lg">
              {column.title}
            </h5>
            <ul className="list-none m-0 p-0 space-y-4">
              {column.subHeadings.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3 text-gray-700 no-underline p-1.5 rounded-lg transition-all duration-200 hover:text-black hover:translate-x-1.5 hover:bg-violet-50"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(item.href);
                      setTimeout(() => {
                        if (typeof onClose === "function") onClose();
                      }, 0);
                    }}
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-base text-violet-600 mt-0.5`} />
                    )}
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-black">
                        {item.subHeading}
                      </span>
                      {item.label && (
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {item.label}
                        </span>
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
