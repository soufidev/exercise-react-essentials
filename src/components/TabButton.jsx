
export default function TabButton ({children , onSelect , isselected, ...props}) {
    return <li><button {...props} className={isselected ? 'active' : ''}> {children} </button></li>
}