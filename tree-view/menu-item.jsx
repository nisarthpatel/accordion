import { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MenuList } from "./menu-list";

export const MenuItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const hasChildren = item.children && item.children.length > 0;

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {hasChildren && (
                    <span onClick={handleToggle} className="toggle-icon">
                        {isExpanded ? <FaMinus /> : <FaPlus />}
                    </span>
                )}
            </div>
            {hasChildren && isExpanded && <MenuList list={item.children} />}
        </li>
    )
}
