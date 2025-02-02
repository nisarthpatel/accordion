import { MenuList } from "./menu-list";
import { treeData } from "./data";
import './styles.css';

export default function TreeView() {
    return (
        <div className='tree-view-container'>
            <MenuList list={treeData} />
        </div>
    )
}
