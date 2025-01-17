import { MenuItem } from "./menu-item";

// eslint-disable-next-line react/prop-types
export const MenuList = ({ list = [] }) => {
    return (
        <ul className="menu-list-container">
            {list.map((listItem, index) => (
                <MenuItem key={index} item={listItem} />
            ))}
        </ul>
    );
};
